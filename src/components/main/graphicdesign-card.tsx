import Card from "./card";

export default function GraphicDesignCard() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-y-10 sm:gap-y-8 lg:gap-x-[1.87rem] ">
            <Card cardImg="/assets/graphic-design/desktop/image-change.jpg" title="Tim Brown" description="A book cover designed for Tim Brown's new release, 'Change'" />
            <Card cardImg="/assets/graphic-design/desktop/image-boxed-water.jpg" title="Boxed water" description="A simple packaging concept made for Boxed Water" />
            <Card cardImg="/assets/graphic-design/desktop/image-science.jpg" title="Science!" description="A poster made in collaboration with the Federal Art Project" />
        </section>
    );
}