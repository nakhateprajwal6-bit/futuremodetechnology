const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Modern university campus with students walking between buildings",
    span: "col-span-2 row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Students working with computers in a modern classroom",
    span: ""
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Advanced technology equipment and lab setup",
    span: ""
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Happy graduates in caps and gowns celebrating",
    span: ""
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Professional team meeting with laptops and collaboration",
    span: ""
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
    alt: "Programming classroom with multiple monitors and coding workstations",
    span: "col-span-2"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="gallery-title">
            Campus Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="gallery-subtitle">
            Explore our state-of-the-art facilities and vibrant learning environment
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className={image.span}>
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-xl hover-lift cursor-pointer transition-transform duration-300"
                data-testid={`gallery-image-${index}`}
                onClick={() => {
                  // Open image in new tab for full view
                  window.open(image.src, '_blank');
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
