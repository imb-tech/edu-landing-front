"use client"
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Courses from '@/components/Courses';
import Advantages from '@/components/Advantages';
import Teachers from '@/components/Teachers';
import Testimonials from '@/components/Testimonials';
import Results from '@/components/Results';
import Gallery from '@/components/Gallery';
import Registration from '@/components/Registration';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Courses />
      <Advantages />
      <Teachers />
      <Testimonials />
      <Results />
      <Gallery />
      <Registration />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}