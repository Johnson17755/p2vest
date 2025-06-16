import Contact from "@/components/contact";
import Currency from "@/components/currency";
import FAQAccordion from "@/components/faq";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import LoadingHome from "@/components/loading";
import PayBillsSection from "@/components/paybill";
import Shopping from "@/components/shopping";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <LoadingHome />
      <Currency />
      <Shopping />
      <PayBillsSection />
      <FAQAccordion />
      <Contact />
      <Footer />
    </>
  );
}
