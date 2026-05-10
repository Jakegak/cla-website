import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["All", "Sports", "Arts", "Worship", "Academics", "Events"];

const GALLERY_IMAGES = [
  { id: 1, src: "https://source.unsplash.com/400x300/?school,sports", alt: "Students playing football on the school field", category: "Sports" },
  { id: 2, src: "https://source.unsplash.com/400x300/?basketball,students", alt: "Basketball practice session", category: "Sports" },
  { id: 3, src: "https://source.unsplash.com/400x300/?art,school", alt: "Students painting in art class", category: "Arts" },
  { id: 4, src: "https://source.unsplash.com/400x300/?drama,theater", alt: "Drama club rehearsal on stage", category: "Arts" },
  { id: 5, src: "https://source.unsplash.com/400x300/?church,worship", alt: "Chapel worship service", category: "Worship" },
  { id: 6, src: "https://source.unsplash.com/400x300/?children,learning", alt: "Morning devotion assembly", category: "Worship" },
  { id: 7, src: "https://source.unsplash.com/400x300/?science,laboratory", alt: "Science laboratory experiment", category: "Academics" },
  { id: 8, src: "https://source.unsplash.com/400x300/?library,students", alt: "Library reading session", category: "Academics" },
  { id: 9, src: "https://source.unsplash.com/400x300/?classroom", alt: "Mathematics competition in classroom", category: "Academics" },
  { id: 10, src: "https://source.unsplash.com/400x300/?playground,children", alt: "Annual sports day ceremony", category: "Events" },
  { id: 11, src: "https://source.unsplash.com/400x300/?graduation,ceremony", alt: "Graduation day celebration", category: "Events" },
  { id: 12, src: "https://source.unsplash.com/400x300/?students,studying", alt: "School cultural festival", category: "Events" },
];

export default function ActivitiesGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredImages =
    selectedCategory === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === selectedCategory);

  const openLightbox = useCallback((index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
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
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, closeLightbox, goToNext, goToPrev]);

  return (
    <section className="activities-gallery" id="gallery">
      <div className="gallery-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gallery-header"
        >
          <h2 className="section-title">Activities Gallery</h2>
          <p className="section-subtitle">
            Explore moments from our vibrant school community
          </p>
        </motion.div>

        <div className="gallery-filters">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              className={`filter-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="gallery-grid">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="gallery-item"
                onClick={() => openLightbox(index)}
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
      </div>

      <AnimatePresence>
        {lightboxOpen && filteredImages[lightboxIndex] && (
          <motion.div
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={closeLightbox}>
                ✕
              </button>
              <button className="lightbox-prev" onClick={goToPrev}>
                ‹
              </button>
              <img
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                className="lightbox-image"
              />
              <button className="lightbox-next" onClick={goToNext}>
                ›
              </button>
              <p className="lightbox-caption">
                {filteredImages[lightboxIndex].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
