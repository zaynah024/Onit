"use client";

import Header from "../../home/components/header";
import HeroSection from "../components/hero";
import DetailPage from "../components/detail";
import FAQ from "../components/FAQ";
import OurServices from "../components/ourservices";
import TechStackSection from "../components/techstack";
import ContactSection from "../components/contactus";
import BuildSection from "../../home/components/build";
import Footer from "../../home/components/footer";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface TechStack {
  src: string;
  name: string;
}

interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  heroText: string;
  detailText: string;
  image?: string;
  features?: string[];
  serviceCards?: ServiceCard[];
  faqs?: FAQItem[];
  technologies?: TechStack[];
}

export default function ServiceDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    fetch("/data/services.json")
      .then((res) => res.json())
      .then((data: Service[]) => {
        const found =
          data.find((s) => s.id === id) || // Match by ID
          data.find((s) => s.slug === id) || // Match by slug
          data[0]; // Fallback
        setService(found);
      });
  }, [id]);

  if (!service) return <p>Loading...</p>;

  return (
    <div>
      <Header />
      <HeroSection service={service} />
      <DetailPage service={service} />
      <FAQ faqs={service.faqs || []} />
      <OurServices service={service} />
      <TechStackSection technologies={service.technologies || []} />
      <ContactSection />
      <BuildSection />
      <Footer />
    </div>
  );
}
