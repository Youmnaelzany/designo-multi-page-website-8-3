
import AppDesign from "@/components/main/AppDesign";
import GraphicDesign from "@/components/main/GraphicDesign";
import OurBrands from "@/components/main/our-brand";
import WebDesign from "@/components/main/WebDesign";


export default function Home() {
  return (
    <main className="">
      <section className="flex flex-col items-center justify-center xl:flex-row xl:justify-around  gap-y-6 xl:gap-x-[1.87rem]">
        <WebDesign />
        <div className="flex flex-col items-center justify-center gap-y-6">
          <AppDesign />
          <GraphicDesign />
        </div>
      </section>
      <OurBrands />
    </main>
  );
}
