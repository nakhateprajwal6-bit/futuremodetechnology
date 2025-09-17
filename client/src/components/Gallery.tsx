import { useState } from "react";

const galleryImages = [
  { src: "./../src/assets/g1.jpg", alt: "Modern university campus with students walking between buildings", span: "col-span-2 row-span-2" },
  { src: "./../src/assets/g2.jpg", alt: "Students working with computers in a modern classroom", span: "" },
  { src: "./../src/assets/g3.jpg", alt: "Advanced technology equipment and lab setup", span: "" },
  { src: "./../src/assets/g4.jpg", alt: "Happy graduates in caps and gowns celebrating", span: "" },
  { src: "./../src/assets/g5.jpg", alt: "Professional team meeting with laptops and collaboration", span: "" },
  { src: "./../src/assets/g11.jpg", alt: "Programming classroom with multiple monitors and coding workstations", span: "col-span-2 row-span-2" },
  { src: "./../src/assets/g10.jpg", alt: "Students working with computers in a modern classroom", span: "" },
  { src: "./../src/assets/g7.jpg", alt: "Advanced technology equipment and lab setup", span: "" },
  { src: "./../src/assets/g9.jpg", alt: "Happy graduates in caps and gowns celebrating", span: "" },
  { src: "./../src/assets/g8.jpg", alt: "Professional team meeting with laptops and collaboration", span: "" },
  { src: "./../src/assets/g6.jpg", alt: "Programming classroom with multiple monitors and coding workstations", span: "col-span-2 row-span-2" },
  { src: "./../src/assets/g14.jpg", alt: "Students working with computers in a modern classroom", span: "" },
  { src: "./../src/assets/g13.jpg", alt: "Advanced technology equipment and lab setup", span: "" },
  { src: "./../src/assets/g15.jpg", alt: "Happy graduates in caps and gowns celebrating", span: "" }
];

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const imagesToShow = showAll ? galleryImages : galleryImages.slice(0, 8);

  return (
    <section id="gallery" className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our state-of-the-art facilities and vibrant learning environment
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {imagesToShow.map((image, index) => (
            <div key={index} className={`${image.span} group`}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-xl hover-lift cursor-pointer transition-all duration-300 group-hover:scale-105"
                onClick={() => window.open(image.src, "_blank")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    window.open(image.src, "_blank");
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View full size image: ${image.alt}`}
              />
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
}
