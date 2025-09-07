export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Industry {
  id: number;
  icon: string;
  title: string;
  slug: string;
  description: string;
  heroText: string;
  detailText: string;
  features?: Feature[];
  ctaText: string;
  image: string;
  solutions: string[];
}

export interface IndustrySolution {
  slug: string;
  title: string;
  image: string;
  solutions: string[];
}
