import Card from "./card";

export default function AppDesignCard() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-y-10 sm:gap-y-8 lg:gap-x-[1.87rem] ">
            <Card cardImg="/assets/app-design/desktop/image-airfilter.jpg" title="Airfilter" description="  Solving the problem of poor indoor air quality by filtering the air" />
            <Card cardImg="/assets/app-design/desktop/image-eyecam.jpg" title="Eyecam" description="  Product that lets you edit your favorite photos and videos at any time" />
            <Card cardImg="/assets/app-design/desktop/image-faceit.jpg" title="Faceit" description="  Get to meet your favorite internet superstar with the faceit app" />
            <Card cardImg="/assets/app-design/desktop/image-todo.jpg" title="Todo" description="  A todo app that features cloud sync with light and dark mode" />
            <Card cardImg="/assets/app-design/desktop/image-loopstudios.jpg" title="Loopstudios" description="  A VR experience app made for Loopstudios" />
        </section>
    );
}