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
  { id: 11, src: "https://picsum.photos/seed/reading1/400/300", fullSrc: "https://picsum.photos/seed/reading1/800/600", alt: "Track and field athletics day", category: "Sports" },
  { id: 12, src: "https://picsum.photos/seed/craft1/400/300", fullSrc: "https://picsum.photos/seed/craft1/800/600", alt: "Creative writing workshop", category: "Arts" },
];

const gridItemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.2 },
  },
};

export default function ActivitiesGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filtered =
    activeCategory === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const openLightbox = useCallback((index) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(-1);
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % filtered.length);
  }, [filtered.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  }, [filtered.length]);

  useEffect(() => {
    const handleKey = (e) => {
      if (lightboxIndex < 0) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  return (
    <section id="gallery" className="activities-gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="section-title">Activities &amp; Gallery</h2>
          <p className="section-subtitle">
            Explore the vibrant life at Christ Legacy Academy through our activities and events.
          </p>
        </div>

        <div className="gallery-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn${activeCategory === cat ? " active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          className="gallery-grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((img, index) => (
              <motion.div
                key={img.id}
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
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <span className="gallery-category">{img.category}</span>
                  <span className="gallery-alt">{img.alt}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxIndex >= 0 && filtered[lightboxIndex] && (
          <motion.div
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="lightbox-close"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                ✕
              </button>
              <button
                className="lightbox-prev"
                onClick={goPrev}
                aria-label="Previous image"
              >
                ‹
              </button>
              <img
                className="lightbox-image"
                src={filtered[lightboxIndex].fullSrc}
                alt={filtered[lightboxIndex].alt}
              />
              <button
                className="lightbox-next"
                onClick={goNext}
                aria-label="Next image"
              >
                ›
              </button>
              <p className="lightbox-caption">
                {filtered[lightboxIndex].alt}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
