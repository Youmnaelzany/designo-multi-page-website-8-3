import AppDesign from "@/components/main/AppDesign";
import GraphicDesignCard from "@/components/main/graphicdesign-card";
import HeroTitle from "@/components/main/hero-title";
import WebDesignSm from "@/components/main/WebDesignSm";

export default function GraphicDesign() {
  return (
    <main className="">
      <HeroTitle title="Graphic Design" description="We deliver eye-catching branding materials that are 
tailored to meet your business objectives." />

      <GraphicDesignCard />
      <section className="flex flex-col items-center justify-center gap-y-6 xl:flex-row xl:justify-between xl:gap-x-[1.87rem]">
        <AppDesign />
        <WebDesignSm />
      </section>
    </main>
  );
}