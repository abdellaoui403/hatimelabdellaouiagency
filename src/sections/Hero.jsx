import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className="relative pt-40 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative  z-2 max-lg:max-w-388">



            <h1 className="mb-6 h1 text-center
 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-xl max-md:leading-12">
            Découvrez des stratégies exclusives pour renforcer votre présence en ligne et attirer davantage de clients, tout en optimisant  vos processus grâce à des solutions d'automatisation éprouvées.            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
            </p>
            <div className="caption  small-2  uppercase text-p3">
            NOS SERVICE            </div>
            <div className="flex items-center pb-5">
            <div className="dot" />
              <p className="pl-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex items-center pb-5">
            <div className="dot" />
              <p className="pl-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex items-center pb-5">
            <div className="dot" />
              <p className="pl-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex items-center pb-5">
            <div className="dot" />
              <p className="pl-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex items-center pb-5">
            <div className="dot" />
              <p className="pl-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex items-center pb-5">
            <div className="dot" />
              <p className="pl-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            
            
<div className="pt-10">
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Prenez rendez-vous maintenant</Button>
            </LinkScroll>
            </div>
          </div>

         
        </div>
      </Element>
    </section>
  );
};

export default Hero;
