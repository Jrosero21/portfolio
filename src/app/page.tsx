import Hero from '@/components/home/Hero';
import Capabilities from '@/components/home/Capabilities';
import Work from '@/components/home/Work';
import Approach from '@/components/home/Approach';
import Experience from '@/components/home/Experience';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Work />
      <Approach />
      <Experience />
      <Contact />
    </>
  );
}
