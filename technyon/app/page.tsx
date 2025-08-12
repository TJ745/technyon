import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import Hero from "./hero/page";
import ProductsPage from "./products/page";
import TestimonialPage from "./testimonials/page";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      {/* Remaining About & Products*/}
      <AboutPage />
      <ProductsPage />
      <TestimonialPage />
      <ContactPage />
    </div>
  );
}
