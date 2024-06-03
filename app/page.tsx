import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Testemonials from "@/components/Testemonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <Nav />
      <div className="font-clash px-5 py-5 md:px-20 md:pt-8 lg:px-14 lg:pt-8 xl:px-40 overflow-x-hidden">
        <Hero />
        <Features />
        <Testemonials />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
