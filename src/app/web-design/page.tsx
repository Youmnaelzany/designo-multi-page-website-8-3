import AppDesign from "@/components/main/AppDesign";
import GraphicDesign from "@/components/main/GraphicDesign";
import HeroTitle from "@/components/main/hero-title";
import WebDesignCard from "@/components/main/webdesign-card";

export default function WebDesign() {
  return (
    <main className="">
      <HeroTitle title="Web Design" description="We build websites that serve as powerful marketing tools and bring memorable brand experiences." />
      <WebDesignCard />
      <section className="flex flex-col items-center justify-center gap-y-6 xl:flex-row xl:justify-between xl:gap-x-[1.87rem]">
        <AppDesign />
        <GraphicDesign />
      </section>
    </main>
  );
}