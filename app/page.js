import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Services from '@/components/Services';
import Specialists from '@/components/Specialists';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <Specialists />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
