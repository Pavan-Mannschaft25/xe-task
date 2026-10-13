import homeBanner from "../../assets/images/home_banner.png";

export default function HeroBanner({
  image = homeBanner,
  title = "Welcome to Citigold Private Client",
  subtitle = "Wealth solutions built around you.",
}) {
  return (
    <section className="relative w-full overflow-hidden bg-gray-300">
      <img
        src={image}
        alt=""
        className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[660px]"
      />
    </section>
  );
}
