import AppDesignCard from "@/components/main/appdesign-card";
import GraphicDesign from "@/components/main/GraphicDesign";
import WebDesignSm from "@/components/main/WebDesignSm";

export default function AppDesign() {
  return (
    <main className="">
      <AppDesignCard />
      <section className="flex flex-col items-center justify-center gap-y-6 xl:flex-row xl:justify-between xl:gap-x-[1.87rem]">
        <WebDesignSm />
        <GraphicDesign />
      </section>
    </main>
  );
}