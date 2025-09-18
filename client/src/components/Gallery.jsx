
import { useState } from "react";
import "./Gallery.css";

const galleryImages = [
  { src: "./src/assets/g1.jpg", alt: "Modern university campus with students walking between buildings", span: "span-large" },
  { src: "./src/assets/g2.jpg", alt: "Students working with computers in a modern classroom", span: "" },
  { src: "./src/assets/g3.jpg", alt: "Advanced technology equipment and lab setup", span: "" },
  { src: "./src/assets/g4.jpg", alt: "Happy graduates in caps and gowns celebrating", span: "" },
  { src: "./src/assets/g5.jpg", alt: "Professional team meeting with laptops and collaboration", span: "" },
  { src: "./src/assets/g11.jpg", alt: "Programming classroom with multiple monitors and coding workstations", span: "span-large" },
  { src: "./src/assets/g10.jpg", alt: "Students working with computers in a modern classroom", span: "" },
  { src: "./src/assets/g7.jpg", alt: "Advanced technology equipment and lab setup", span: "" },
  { src: "./src/assets/g9.jpg", alt: "Happy graduates in caps and gowns celebrating", span: "" },
  { src: "./src/assets/g8.jpg", alt: "Professional team meeting with laptops and collaboration", span: "" },
  { src: "./src/assets/g6.jpg", alt: "Programming classroom with multiple monitors and coding workstations", span: "span-large" },
  { src: "./src/assets/g14.jpg", alt: "Students working with computers in a modern classroom", span: "" },
  { src: "./src/assets/g13.jpg", alt: "Advanced technology equipment and lab setup", span: "" },
  { src: "./src/assets/g15.jpg", alt: "Happy graduates in caps and gowns celebrating", span: "" }
];

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const imagesToShow = showAll ? galleryImages : galleryImages.slice(0, 8);

  const handleImageClick = (imageSrc) => {
    window.open(imageSrc, "_blank");
  };

  const handleKeyDown = (e, imageSrc) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      window.open(imageSrc, "_blank");
    }
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        {/* Section Header */}
        <div className="gallery-header">
          <h2 className="gallery-title">
            Gallery
          </h2>
          <p className="gallery-subtitle">
            Explore our state-of-the-art facilities and vibrant learning environment
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {imagesToShow.map((image, index) => (
            <div key={index} className={`gallery-item ${image.span}`}>
              <div className="gallery-item-inner">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery-image"
                  onClick={() => handleImageClick(image.src)}
                  onKeyDown={(e) => handleKeyDown(e, image.src)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View full size image: ${image.alt}`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="show-more-container">
          <button
            onClick={() => setShowAll(!showAll)}
            className="show-more-button"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
}
