// app/page.js
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VibeCodingIntro from './components/VibeCodingIntro';
import Instructor from './components/Instructor';
import LeadMagnet from './components/LeadMagnet';
// import CourseProjects from './components/CourseProjects';
import Testimonials from './components/Testimonials';
import Program from './components/Program';
// import StudentProjects from './components/StudentProjects';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VibeCodingIntro />
        <Instructor />
        <LeadMagnet />
        {/* <CourseProjects /> */}
        <Testimonials />
        <Program />
        {/* <StudentProjects /> */}
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}