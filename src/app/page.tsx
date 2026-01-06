"use client";

import { Hero } from "@/components/hero/Hero";
import { ArsenalGrid } from "@/components/arsenal/ArsenalGrid";
import { PhilosophySection } from "@/components/philosophy/PhilosophySection";
import { ConsultationForm } from "@/components/consultation/ConsultationForm";
import { heroContent, arsenalData, philosophyData, consultationData } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section id="hero">
        <Hero content={heroContent} />
      </section>
      
      <section id="arsenal" className="min-h-screen bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <ArsenalGrid 
          projects={arsenalData.projects}
          title={arsenalData.title}
          subtitle={arsenalData.subtitle}
        />
      </section>

      <section id="philosophy">
        <PhilosophySection 
          pillars={philosophyData.pillars}
          manifesto={philosophyData.manifesto}
        />
      </section>

      <section id="consultation">
        <ConsultationForm 
          formConfig={consultationData.formConfig}
          thankYouContent={consultationData.thankYouContent}
          onSubmit={(data: unknown) => console.log('Submitted:', data)}
        />
      </section>
    </div>
  );
}
