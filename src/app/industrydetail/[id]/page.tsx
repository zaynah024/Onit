"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import Header from "../../home/components/header";
import HeroSection from "../../industrydetail/components/hero";
import DetailSection from "../../industrydetail/components/detail";
import SolutionSection from "../../industrydetail/components/solutions";
import CompaniesSection from "../../industrydetail/components/companies";
import ContactSection from "../../industrydetail/components/contactus";
import BuildSection from "../../home/components/build";
import Footer from "../../home/components/footer";

// Feature type
interface Feature {
  icon: string;
  title: string;
  description: string;
}

// Main Industry type
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

// Subset for SolutionSection
export interface IndustrySolution {
  slug: string;
  title: string;
  image: string;
  solutions: string[];
}

export default function IndustryPage() {
  const params = useParams();
  const { id } = params;

  const [industry, setIndustry] = useState<Industry | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIndustry = async () => {
      try {
        const res = await fetch("/data/industries.json");
        const data: Industry[] = await res.json();
        const selected = data.find(
          (item) => item.id === Number(id) || item.slug === id
        );
        setIndustry(selected || null);
      } catch (err) {
        console.error("Failed to load industries:", err);
        setIndustry(null);
      } finally {
        setLoading(false);
      }
    };
    fetchIndustry();
  }, [id]);

  if (loading) return <p className="p-8">Loading industry data...</p>;
  if (!industry) return <p className="p-8">Industry not found.</p>;

  return (
    <div>
      <Header />
      <HeroSection industry={industry} />
      <DetailSection industry={industry} />
      <SolutionSection
        industry={{
          slug: industry.slug,
          title: industry.title,
          image: industry.image,
          solutions: industry.solutions,
        }}
      />
      <CompaniesSection />
      <ContactSection />
      <BuildSection />
      <Footer />
    </div>
  );
}
