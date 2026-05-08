import img1 from "@/assets/Client/1.JPG";
import img2 from "@/assets/Client/2.jpg";
import img3 from "@/assets/Client/3.JPG";
import img4 from "@/assets/Client/4.JPG";
import img5 from "@/assets/Client/5.JPG";
import img6 from "@/assets/Client/6.JPG";
import img7 from "@/assets/Client/7.JPG";

const clientLogos = [img1, img2, img3, img4, img5, img6, img7];

export default function ClientLogoSlider() {
  return (
    <section className="py-12 md:py-20 bg-background overflow-hidden border-t border-b border-border/20">
      <div className="container mx-auto px-4 mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
          OUR VALUED CLIENTS
        </h2>
        <div className="w-16 h-0.5 bg-primary/40 mx-auto mt-4"></div>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full flex overflow-x-hidden py-12 bg-foreground">
        <div className="flex w-max animate-marquee space-x-12 md:space-x-24 px-12 md:px-24 items-center">

          {clientLogos.map((logo, index) => (
            <div
              key={`logo-${index}`}
              className="w-[120px] md:w-[160px] flex-shrink-0"
            >
              <img
                src={logo}
                alt={`Client Logo ${index + 1}`}
                className="w-full h-auto object-contain max-h-[100px]"
                loading="lazy"
              />
            </div>
          ))}
          {/* Duplicate set for seamless continuous scrolling */}
          {clientLogos.map((logo, index) => (
            <div
              key={`logo-dup-${index}`}
              className="w-[120px] md:w-[160px] flex-shrink-0"
            >
              <img
                src={logo}
                alt={`Client Logo Duplicate ${index + 1}`}
                className="w-full h-auto object-contain max-h-[100px]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
