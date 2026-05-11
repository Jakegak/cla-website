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
];

const gridItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
};

function ActivitiesGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredImages, setFilteredImages] = useState(GALLERY_IMAGES);
  const [lightbox, setLightbox] = useState({ open: false, image: null });

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredImages(GALLERY_IMAGES);
    } else {
      setFilteredImages(
        GALLERY_IMAGES.filter((img) => img.category === activeCategory)
      );
    }
  }, [activeCategory]);

  const openLightbox = useCallback((image) => {
    setLightbox({ open: true, image });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox({ open: false, image: null });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && lightbox.open) {
        closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox.open, closeLightbox]);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="gallery-header">
          <h2 className="section-title">Activities Gallery</h2>
          <p className="section-subtitle">
            Explore the vibrant life at Christian Living Academy
          </p>
        </div>

        <div className="gallery-filters">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div className="gallery-grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                className="gallery-item"
                variants={gridItemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <span className="gallery-category">{image.category}</span>
                  <p className="gallery-alt">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {lightbox.open && lightbox.image && (
            <motion.div
              className="lightbox-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <motion.div
                className="lightbox-content"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="lightbox-close"
                  onClick={closeLightbox}
                  aria-label="Close lightbox"
                >
                  &times;
                </button>
                <img
                  src={lightbox.image.fullSrc}
                  alt={lightbox.image.alt}
                  className="lightbox-image"
                />
                <div className="lightbox-info">
                  <span className="lightbox-category">
                    {lightbox.image.category}
                  </span>
                  <p className="lightbox-description">{lightbox.image.alt}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default ActivitiesGallery;
