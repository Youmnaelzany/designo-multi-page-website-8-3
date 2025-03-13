import LocationCard from "@/components/main/location-card";
import OurLocations from "@/components/main/our-locations";

export default function Locations() {
  return (
    <main className="">
      <section className="">
        {/* Canada */}
        <LocationCard desktopImg="/assets/locations/desktop/image-map-canada.png" tabletImg="/assets/locations/tablet/image-map-canada.png" mobileImg="/assets/locations/desktop/image-map-canada.png" title="Canada" officeAddress="Designo Central Office" addressOne="3886 Wellington Street" addressTwo="Toronto, Ontario M9C 3J5" contactInfo="Contact" phoneNumber="P : +1 253-863-8967" emailAddress="M : contact@designo.co" />
        {/* Australia */}
        <LocationCard desktopImg="/assets/locations/desktop/image-map-canada.png" tabletImg="/assets/locations/tablet/image-map-canada.png" mobileImg="/assets/locations/desktop/image-map-canada.png" title="Australia" officeAddress="Designo AU Office" addressOne="19 Balonne Street" addressTwo="New South Wales 2443" contactInfo="Contact" phoneNumber="P : (02) 6720 9092" emailAddress="M : contact@designo.au" />
        {/* Australia */}
        <LocationCard desktopImg="/assets/locations/desktop/image-map-canada.png" tabletImg="/assets/locations/tablet/image-map-canada.png" mobileImg="/assets/locations/desktop/image-map-canada.png" title="United Kingdom" officeAddress="Designo UK Office" addressOne="13 Colorado Way" addressTwo="Rhyd-y-fro SA8 9GA" contactInfo="Contact" phoneNumber="P : 078 3115 1400" emailAddress="M : contact@designo.uk" />
      </section>
      <OurLocations />
    </main>
  );
}