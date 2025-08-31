// app/lib/actions.ts
'use server';

import { db } from '@/lib/db';
import { HfInference } from '@huggingface/inference';
import { Prisma } from '@prisma/client';

const hf = new HfInference(process.env.HF_API_TOKEN);

type Spotlight = Prisma.InputJsonObject & {
  tag: string;
  score: number; // 0-100
};

export async function analyzeSpotlight(productId: string): Promise<Spotlight> {
  try {
    const product = await db.product.findUnique({
      where: { id: productId },
      select: {
        description: true,
        upvotes: { select: { createdAt: true } },
        comments: { select: { id: true } },
      },
    });

    if (!product?.description) {
      throw new Error('No description found');
    }

    // Analyze sentiment
    const sentiment = await hf.textClassification({
      model: 'distilbert/distilbert-base-uncased-finetuned-sst-2-english',
      inputs: product.description,
    });
    const sentimentScore = sentiment[0].score * 100; // 0-100 scale
    const roundedScore = Math.round(sentimentScore); // Integer score

    // Calculate vote velocity (upvotes in last hour)
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    const recentUpvotes = product.upvotes.filter(
      (upvote) => new Date(upvote.createdAt) > oneHourAgo
    ).length;
    const voteVelocity = recentUpvotes;

    // Additional metrics
    const totalUpvotes = product.upvotes.length;
    const commentCount = product.comments.length;

    // Determine spotlight tag with all tags mixed into 90-100
    let spotlightTag: string;
    if (sentimentScore >= 95 && voteVelocity >= 2 && totalUpvotes >= 5) {
      spotlightTag = 'Crowd Champion'; // Top-tier, vote-related
    } else if (sentimentScore >= 90) {
      // Mixed tags including "Rising Star," "Thought Provoker," "Underdog"
      switch (roundedScore) {
        case 100:
          spotlightTag = 'Vote Legend'; // Vote-related
          break;
        case 99:
          spotlightTag = 'Trend Setter'; // Generic
          break;
        case 98:
          spotlightTag = 'Upvote Elite'; // Vote-related
          break;
        case 97:
          spotlightTag = 'Buzz Maker'; // Generic
          break;
        case 96:
          spotlightTag = 'Game Changer'; // Generic
          break;
        case 95:
          spotlightTag = 'Rising Star'; // Requested, fits high range
          break;
        case 94:
          spotlightTag = 'Crowd Pleaser'; // Generic with vote undertone
          break;
        case 93:
          spotlightTag = 'Thought Provoker'; // Requested, fits mid-high
          break;
        case 92:
          spotlightTag = 'Vote Spark'; // Vote-related
          break;
        case 91:
          spotlightTag = 'Underdog'; // Requested, as an ironic high-score twist
          break;
        case 90:
          spotlightTag = 'Trailblazer'; // Generic
          break;
        default:
          spotlightTag = 'Hot Pick'; // Generic fallback
      }
    } else if (sentimentScore >= 75) {
      spotlightTag = 'Rising Wave'; // Generic for mid-range
    } else if (sentimentScore >= 60) {
      spotlightTag = 'Idea Igniter'; // Generic for lower-mid
    } else {
      spotlightTag = 'Sleeper Hit'; // Generic for low
    }

    const spotlightData: Spotlight = {
      tag: spotlightTag,
      score: roundedScore,
    };

    await db.product.update({
      where: { id: productId },
      data: { aiSpotlight: spotlightData },
    });

    // Log for debugging
    console.log(`Product ${productId}: Score=${sentimentScore}, Rounded=${roundedScore}, Velocity=${voteVelocity}, Upvotes=${totalUpvotes}, Comments=${commentCount}, Tag=${spotlightTag}`);

    return spotlightData;
  } catch (error) {
    console.error('Spotlight Analysis Error:', error);
    const fallback: Spotlight = { tag: 'Trending', score: 80 };
    await db.product.update({
      where: { id: productId },
      data: { aiSpotlight: fallback },
    }).catch(() => null);
    return fallback;
  }
}