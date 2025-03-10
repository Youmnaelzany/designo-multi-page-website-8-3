import AppDesign from "@/components/main/AppDesign";
import GraphicDesignCard from "@/components/main/graphicdesign-card";
import WebDesignSm from "@/components/main/WebDesignSm";

export default function GraphicDesign() {
  return (
    <main className="">
      <GraphicDesignCard />
      <section className="flex flex-col items-center justify-center gap-y-6 xl:flex-row xl:justify-between xl:gap-x-[1.87rem]">
        <AppDesign />
        <WebDesignSm />
      </section>
    </main>
  );
}