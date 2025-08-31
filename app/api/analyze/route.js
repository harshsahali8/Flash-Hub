import { HfInference } from '@huggingface/inference';
import { NextResponse } from 'next/server';

const hf = new HfInference(process.env.HF_API_TOKEN);

export async function POST(request) {
  try {
    const { description, ideaId } = await request.json();

    if (!description || !ideaId) {
      return NextResponse.json({ error: 'Missing description or ideaId' }, { status: 400 });
    }

    // Call Hugging Face Inference API for sentiment analysis
    const result = await hf.textClassification({
      model: 'distilbert/distilbert-base-uncased-finetuned-sst-2-english',
      inputs: description,
    });

    const sentiment = result[0]; // { label: "POSITIVE" or "NEGATIVE", score: 0-1 }
    const spotlightTag = sentiment.label === 'POSITIVE' 
      ? 'Positive Buzz' 
      : 'Needs Attention';

    // Return result (you’ll save this to DB in a real app)
    return NextResponse.json({
      ideaId,
      spotlight: {
        tag: spotlightTag,
        score: sentiment.score,
      },
    });
  } catch (error) {
    console.error('AI Analysis Error:', error);
    return NextResponse.json({ error: 'Analysis failed' }, { status: 500 });
  }
}