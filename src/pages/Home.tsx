import '../css/css.custom.css';
import { Button } from '@/components/ui/button';
import banner from '@/assets/images/banner.png';
import hero from '@/assets/images/hero.png';
import { Link } from 'react-router-dom';
import Footer from '@/layouts/Footer';

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center md:flex-row h-[calc(100vh-80px)] max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="md:w-1/2 md:pr-8 lg:pr-16 margin_top__home">
          <h1 className="text-4xl md:text-6xl font-black text-primary mb-2">
            HAYLOU <br /> SOLAR PLUSE
          </h1>
          <p className="text-secondary font-semibold text-lg md:text-xl">
            Effortless communication at your fingertips
          </p>
          <div className="text-primary mt-8 md:mt-12 lg:mt-16">
            <p>Bluetooth 5.2 for easy, secure communication</p>
            <p>Precise 143 Amoled display for clear visuals</p>
          </div>
          <Button className="mt-4 md:mt-6">Learn more</Button>
        </div>
        <div className="md:w-1/2 md:relative md:-right-14 mt-8 md:mt-0">
          <img src={banner} alt="" />
        </div>
      </div>
      <div className="mb-12 md:mb-24 lg:mb-32">
        <div>
          <img className="mx-auto" src={hero} alt="" />
        </div>
        <div className="text-center mt-6 md:mt-10">
          <h1 className="text-4xl md:text-5xl font-black text-primary uppercase">
            The future of tech is here
          </h1>
          <Button className="mt-4 md:mt-6" asChild>
            <Link to="/products">Browse all products</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </>
  );
}
