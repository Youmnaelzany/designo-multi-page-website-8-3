import Card from "./card";

export default function WebDesignCard() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-y-10 sm:gap-y-8 lg:gap-x-[1.87rem] ">
            <Card cardImg="/assets/web-design/desktop/image-express.jpg" title="Express" description="A multi-carrier shipping website for ecommerce businesses" />
            <Card cardImg="/assets/web-design/desktop/image-transfer.jpg" title="Transfer" description="Site for low-cost money transfers and sending money within seconds" />
            <Card cardImg="/assets/web-design/desktop/image-photon.jpg" title="Photon" description="A state-of-the-art music player with high-resolution audio and DSP effects" />
            <Card cardImg="/assets/web-design/desktop/image-builder.jpg" title="Builder" description="Connects users with local contractors based on their location" />
            <Card cardImg="/assets/web-design/desktop/image-blogr.jpg" title="Blogr" description="Blogr is a platform for creating an online blog or publication" />
            <Card cardImg="/assets/web-design/desktop/image-camp.jpg" title="Camp" description="Get expert training in coding, data, design, and digital marketing" />
        </section>
    );
}