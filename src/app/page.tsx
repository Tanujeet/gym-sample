import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Facilities from '@/components/Facilities';
import Trainers from '@/components/Trainers';
import TimingFees from '@/components/TimingFees';
import Benefits from '@/components/Benefits';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Facilities />
        <Trainers />
        <TimingFees />
        <Benefits />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
