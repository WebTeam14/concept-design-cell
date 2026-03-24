import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ProjectImageSliderProps {
  images: string[];
  title: string;
  open: boolean;
  onClose: () => void;
}

export default function ProjectImageSlider({
  images,
  title,
  open,
  onClose,
}: ProjectImageSliderProps) {
  const [current, setCurrent] = useState(0);

  if (!open) return null;

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-background/80 hover:text-background transition-colors active:scale-95"
          aria-label="Close"
        >
          <X size={28} />
        </button>

        {/* Title */}
        <h3 className="absolute -top-12 left-0 font-display text-lg font-semibold text-background">
          {title}
        </h3>

        {/* Image */}
        <div className="relative overflow-hidden bg-foreground">
          <img
            src={images[current]}
            alt={`${title} - Image ${current + 1}`}
            className="w-full h-[50vh] md:h-[70vh] object-cover transition-opacity duration-500"
          />

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-background/20 hover:bg-background/40 text-background transition-all active:scale-95"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-background/20 hover:bg-background/40 text-background transition-all active:scale-95"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current
                  ? "bg-primary w-6"
                  : "bg-background/40 hover:bg-background/60"
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
