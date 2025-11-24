import { useState } from "react";
import g1 from "./../assets/g1.jpg";
import g2 from "./../assets/g2.jpg";
import g3 from "./../assets/g3.jpg";
import g4 from "./../assets/g4.jpg";
import g5 from "./../assets/g5.jpg";
import g6 from "./../assets/g6.jpg";
import g7 from "./../assets/g7.jpg";
import g8 from "./../assets/g8.jpg";
import g9 from "./../assets/g9.jpg";
import g10 from "./../assets/g10.jpg";
import g11 from "./../assets/g11.jpg";
import g13 from "./../assets/g13.jpg";
import g14 from "./../assets/g14.jpg";
import g15 from "./../assets/g15.jpg";
import g16 from "./../assets/g16.jpg";
import "./../styles/Gallery.css";

const galleryImages = [
  { src: g1, alt: "", span: "span-large" },
  { src: g2, alt: "", span: "" },
  { src: g3, alt: "", span: "" },
  { src: g4, alt: "", span: "" },
  { src: g5, alt: "", span: "" },
  { src: g11, alt: "", span: "span-large" },
  { src: g10, alt: "", span: "" },
  { src: g7, alt: "", span: "" },
  { src: g9, alt: "", span: "" },
  { src: g8, alt: "", span: "" },
  { src: g6, alt: "", span: "span-large" },
  { src: g14, alt: "", span: "" },
  { src: g13, alt: "", span: "" },
  { src: g15, alt: "", span: "" },
  { src: g16, alt: "", span: "" }
];

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const imagesToShow = showAll ? galleryImages : galleryImages.slice(0, 8);

  const handleImageClick = (imageSrc) => window.open(imageSrc, "_blank");

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
          <h2 className="gallery-title">Gallery</h2>
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
