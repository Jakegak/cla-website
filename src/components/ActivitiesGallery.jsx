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
  { id: 8, src: "https://picsum.photos/seed/science1/400/300", fullSrc: "https://picsum.photos/seed/science1/800/600", alt: "Library reading session", category: "Academics" },
  { id: 9, src: "https://picsum.photos/seed/music1/400/300", fullSrc: "https://picsum.photos/seed/music1/800/600", alt: "Mathematics competition in classroom", category: "Academics" },
  { id: 10, src: "https://picsum.photos/seed/garden1/400/300", fullSrc: "https://picsum.photos/seed/garden1/800/600", alt: "Annual sports day celebration", category: "Events" },
  { id: 11, src: "https://picsum.photos/seed/teamwork1/400/300", fullSrc: "https://picsum.photos/seed/teamwork1/800/600", alt: "Graduation ceremony", category: "Events" },
  { id: 12, src: "https://picsum.photos/seed/choir1/400/300", fullSrc: "https://picsum.photos/seed/choir1/800/600", alt: "Cultural day festivities", category: "Events" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ActivitiesGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1
    );
  }, [filteredImages.length]);

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0
    );
  }, [filteredImages.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, goToPrev, goToNext]);

  return (
    <section className="activities-gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="section-title">Activities Gallery</h2>
          <p className="section-subtitle">
            Explore moments from our vibrant school community
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

        <motion.div
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory}
        >
          <AnimatePresence mode="wait">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="gallery-item"
                variants={itemVariants}
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
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && filteredImages[lightboxIndex] && (
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
              <button className="lightbox-close" onClick={closeLightbox}>
                &times;
              </button>
              <button className="lightbox-prev" onClick={goToPrev}>
                &#8249;
              </button>
              <img
                className="lightbox-image"
                src={filteredImages[lightboxIndex].fullSrc}
                alt={filteredImages[lightboxIndex].alt}
              />
              <button className="lightbox-next" onClick={goToNext}>
                &#8250;
              </button>
              <p className="lightbox-caption">
                {filteredImages[lightboxIndex].alt}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
