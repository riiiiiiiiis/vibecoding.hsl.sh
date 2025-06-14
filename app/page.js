// app/page.js
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Program from './components/Program';
import Pricing from './components/Pricing';
import Audience from './components/Audience';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Program />
        <Pricing />
        <Audience />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}