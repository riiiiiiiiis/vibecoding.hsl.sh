// app/page.js
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LeadMagnet from './components/LeadMagnet';
import Testimonials from './components/Testimonials';
import StudentProjects from './components/StudentProjects';
import Program from './components/Program';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LeadMagnet />
        <Testimonials />
        <StudentProjects />
        <Program />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}