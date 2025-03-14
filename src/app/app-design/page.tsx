import AppDesignCard from "@/components/main/appdesign-card";
import GraphicDesign from "@/components/main/GraphicDesign";
import HeroTitle from "@/components/main/hero-title";
import WebDesignSm from "@/components/main/WebDesignSm";

export default function AppDesign() {
  return (
    <main className="">
      <HeroTitle title="App Design" description="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips." />

      <AppDesignCard />
      <section className="flex flex-col items-center justify-center gap-y-6 xl:flex-row xl:justify-between xl:gap-x-[1.87rem]">
        <WebDesignSm />
        <GraphicDesign />
      </section>
    </main>
  );
}