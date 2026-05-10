import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["All", "Sports", "Arts", "Worship", "Academics", "Events"];

const GALLERY_IMAGES = [
  { id: 1, src: "https://picsum.photos/400/300?random=1", alt: "Students playing football on the school field", category: "Sports" },
  { id: 2, src: "https://picsum.photos/400/300?random=2", alt: "Basketball practice session", category: "Sports" },
  { id: 3, src: "https://picsum.photos/400/300?random=3", alt: "Students painting in art class", category: "Arts" },
  { id: 4, src: "https://picsum.photos/400/300?random=4", alt: "Drama club rehearsal on stage", category: "Arts" },
  { id: 5, src: "https://picsum.photos/400/300?random=5", alt: "Chapel worship service", category: "Worship" },
  { id: 6, src: "https://picsum.photos/400/300?random=6", alt: "Morning devotion assembly", category: "Worship" },
  { id: 7, src: "https://picsum.photos/400/300?random=7", alt: "Science laboratory experiment", category: "Academics" },
  { id: 8, src: "https://picsum.photos/400/300?random=8", alt: "Library reading session", category: "Academics" },
  { id: 9, src: "https://picsum.photos/400/300?random=9", alt: "Mathematics competition", category: "Academics" },
  { id: 10, src: "https://picsum.photos/400/300?random=10", alt: "Annual sports day ceremony", category: "Events" },
  { id: 11, src: "https://picsum.photos/400/300?random=11", alt: "Graduation day celebration", category: "Events" },
  { id: 12, src: "https://picsum.photos/400/300?random=12", alt: "Swimming gala at the pool", category: "Sports" },
];

export default function ActivitiesGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const openLightbox = useCallback((index) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? filteredImages.length - 1 : prev - 1;
    });
  }, [filteredImages.length]);

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === filteredImages.length - 1 ? 0 : prev + 1;
    });
  }, [filteredImages.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, closeLightbox, goToPrev, goToNext]);

  useEffect(() => {
    if (lightboxIndex !== null && lightboxIndex >= filteredImages.length) {
      setLightboxIndex(filteredImages.length > 0 ? 0 : null);
    }
  }, [filteredImages.length, lightboxIndex]);

  const currentLightboxImage =
    lightboxIndex !== null && lightboxIndex < filteredImages.length
      ? filteredImages[lightboxIndex]
      : null;

  return (
    <section id="gallery" className="py-24 bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-heading">
            Activities Gallery
          </h2>
          <div className="w-24 h-1 bg-cla-gold mx-auto rounded-full mb-6" />
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Explore moments from our vibrant school life across sports, arts,
            worship, academics, and special events.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? "bg-cla-purple text-white shadow-lg shadow-cla-purple/30"
                  : "bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="break-inside-avoid mb-4"
              >
                <button
                  type="button"
                  onClick={() => openLightbox(index)}
                  className="relative group w-full overflow-hidden rounded-xl cursor-pointer block bg-slate-800 border-0 p-0"
                  aria-label={`View ${image.alt}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium">
                      {image.category}
                    </span>
                  </div>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg">No images found in this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {currentLightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer border-0"
              aria-label="Close lightbox"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Previous Button */}
            {filteredImages.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer border-0"
                aria-label="Previous image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
            )}

            {/* Next Button */}
            {filteredImages.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer border-0"
                aria-label="Next image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            )}

            {/* Lightbox Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentLightboxImage.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.25 }}
                className="max-w-4xl w-full mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={currentLightboxImage.src}
                  alt={currentLightboxImage.alt}
                  className="w-full max-h-[90vh] object-contain rounded-lg"
                />
                <div className="text-center mt-4">
                  <p className="text-white/80 text-sm">
                    {currentLightboxImage.alt}
                  </p>
                  <p className="text-white/50 text-xs mt-1">
                    {lightboxIndex + 1} / {filteredImages.length}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
