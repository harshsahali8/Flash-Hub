// app/components/ShoutOutMarque.tsx
import Marquee from "@/components/magicui/marquee";
import { BiStar } from "react-icons/bi";
import { db } from '@/lib/db';
import { analyzeSpotlight } from '@/lib/actions';
import { Prisma } from '@prisma/client';

// Define Spotlight as a specific shape for runtime use
interface Spotlight {
  tag: string;
  score: number;
}

interface ShoutOutItem {
  title: string;
  description: string;
  headline: string;
  likes: number;
  tags: string[];
  imageLink: string;
  spotlight?: Prisma.JsonValue; // Match Prisma schema (Json?)
}

async function fetchSpotlightProducts(): Promise<ShoutOutItem[]> {
  const products = await db.product.findMany({
    where: { status: 'ACTIVE' },
    include: {
      upvotes: true,
      categories: true,
      comments: true,
    },
    orderBy: {
      upvotes: { _count: 'desc' },
    },
    take: 7,
  });

  // Trigger analysis, but don’t assign directly—let analyzeSpotlight update DB
  for (const product of products) {
    await analyzeSpotlight(product.id); // Updates aiSpotlight in DB
  }

  // Fetch updated products to get the latest aiSpotlight
  const updatedProducts = await db.product.findMany({
    where: { 
      status: 'ACTIVE',
      id: { in: products.map(p => p.id) } // Match original product IDs
    },
    include: {
      upvotes: true,
      categories: true,
      comments: true,
    },
    orderBy: {
      upvotes: { _count: 'desc' },
    },
    take: 7,
  });

  return updatedProducts.map((p) => ({
    title: p.name,
    description: p.description,
    headline: p.headline,
    likes: p.upvotes.length || 0,
    tags: p.categories.map((c) => c.name).slice(0, 2) || ['Productivity', 'Hackathon'],
    imageLink: p.logo || 'https://via.placeholder.com/48',
    spotlight: p.aiSpotlight, // Prisma.JsonValue from DB
  }));
}

const ShoutOutCard: React.FC<ShoutOutItem> = ({
  imageLink,
  title,
  headline,
  description,
  likes,
  tags,
  spotlight,
}) => {
  // Safely cast spotlight to our expected shape at runtime
  const spotlightData = spotlight as Spotlight | null | undefined;

  return (
    <div
      className="w-full flex flex-col p-4 rounded-md"
      style={{
        textTransform: "lowercase",
        backgroundImage: "url('/top-left-right.svg')",
      }}
    >
      <div className="flex items-center mb-2">
        <img
          src={imageLink}
          alt={title}
          className="w-12 h-12 rounded-lg border mr-3"
        />
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm text-gray-600">{headline}</p>
        </div>
      </div>
      <p className="text-sm mb-2">{description}</p>
      <div className="flex items-center justify-between space-x-5 flex-wrap">
        <div className="flex items-center justify-center text-black">
          <BiStar size={16} className="mr-1" />
          <span className="text-sm">{likes}</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-200 rounded-full px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      {spotlightData?.tag && (
        <p className="text-blue-600 text-sm mt-2">
          AI Spotlight: {spotlightData.tag} (Score: {spotlightData.score})
        </p>
      )}
    </div>
  );
};

export default async function ShoutOutMarque() {
  const products = await fetchSpotlightProducts();
  return (
    <div className="relative flex h-full w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {products.map((item) => (
          <ShoutOutCard key={item.title} {...item} />
        ))}
      </Marquee>
    </div>
  );
}