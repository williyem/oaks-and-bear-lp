import "./globals.css";
import Hero from "./components/hero";
import Services from "./components/services";
import Blog from "./components/blog";
import CTA from "./components/cta";
import AboutUs from "./components/about-us";
import Works from "./components/works";
import ContactUs from "./components/contact-us";
import Testimonial from "./components/testimonial";
import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Blog />
        <Services />
        <Works />
        {/* <CTA /> */}
        <AboutUs />
        <Testimonial />
        <ContactUs />
      </main>
    </>
  );
}
