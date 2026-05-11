import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["All", "Sports", "Arts", "Worship", "Academics", "Events"];

const GALLERY_IMAGES = [
  { id: 1, src: "https://picsum.photos/seed/classroom1/400/300", fullSrc: "https://picsum.photos/seed/classroom1/800/600", alt: "Students playing football on the school field", category: "Sports" },
  { id: 2, src: "https://picsum.photos/seed/library1/400/300", fullSrc: "https://picsum.photos/seed/library1/800/600", alt: "Basketball practice session", category: "Sports" },
  { id: 3, src: "https://picsum.photos/seed/church1/400/300", fullSrc: "https://picsum.photos/seed/church1/800/600", alt: "Students painting in art class", category: "Arts" },
  { id: 4, src: "https://picsum.photos/seed/sports1/400/300", fullSrc: "https://picsum.photos/seed/sports1/800/600", alt: "Drama club rehearsal on stage", category: "Arts" },
  { id: 5, src: "https://picsum.photos/seed/art1/400/300", fullSrc: "https://picsum.photos/seed/art1/800/600", alt: "Chapel worship service", category: "Worship" },
  { id: 6, src: "https://picsum.photos/seed/playground1/400/300", fullSrc: "https://picsum.photos/seed/playground1/800/600", alt: "Morning devotion assembly", category: "Worship" },
  { id: 7, src: "https://picsum.photos/seed/graduation1/400/300", fullSrc: "https://picsum.photos/seed/graduation1/800/600", alt: "Science laboratory experiment", category: "Academics" },
  { id: 8, src: "https://picsum.photos/seed/science1/400/300", fullSrc: "https://picsum.photos/seed/science1/800/600", alt: "Mathematics competition winners", category: "Academics" },
  { id: 9, src: "https://picsum.photos/seed/music1/400/300", fullSrc: "https://picsum.photos/seed/music1/800/600", alt: "Annual prize-giving ceremony", category: "Events" },
  { id: 10, src: "https://picsum.photos/seed/dance1/400/300", fullSrc: "https://picsum.photos/seed/dance1/800/600", alt: "School cultural day celebration", category: "Events" },
  { id: 11, src: "https://picsum.photos/seed/debate1/400/300", fullSrc: "https://picsum.photos/seed/debate1/800/600", alt: "Inter-house athletics competition", category: "Sports" },
  { id: 12, src: "https://picsum.photos/seed/choir1/400/300", fullSrc: "https://picsum.photos/seed/choir1/800/600", alt: "School choir performance", category: "Arts" },
];

const gridItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

const ActivitiesGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filteredImages =
    activeCategory === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const openLightbox = useCallback((index) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(-1);
  }, []);

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev < filteredImages.length - 1 ? prev + 1 : 0
    );
  }, [filteredImages.length]);

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev > 0 ? prev - 1 : filteredImages.length - 1
    );
  }, [filteredImages.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === -1) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, goToNext, goToPrev]);

  return (
    <section id="gallery" className="activities-gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="section-title">Activities &amp; Gallery</h2>
          <p className="section-subtitle">
            Explore the vibrant life at our school through sports, arts, worship,
            and academic excellence.
          </p>
        </div>

        <div className="gallery-filters">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              className={`filter-btn${activeCategory === category ? " active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="gallery-item"
                variants={gridItemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                onClick={() => openLightbox(index)}
              >
                <img
                  className="gallery-image"
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <span className="gallery-category">{image.category}</span>
                  <span className="gallery-alt">{image.alt}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {lightboxIndex !== -1 && filteredImages[lightboxIndex] && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              ✕
            </button>
            <button className="lightbox-nav lightbox-prev" onClick={goToPrev}>
              ‹
            </button>
            <img
              className="lightbox-image"
              src={filteredImages[lightboxIndex].fullSrc}
              alt={filteredImages[lightboxIndex].alt}
            />
            <button className="lightbox-nav lightbox-next" onClick={goToNext}>
              ›
            </button>
            <p className="lightbox-caption">
              {filteredImages[lightboxIndex].alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ActivitiesGallery;
