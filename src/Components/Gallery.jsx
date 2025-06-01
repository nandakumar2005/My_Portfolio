import React, { useState } from "react";
import { galleryImages } from "../GalleryData";

const Gallery = React.forwardRef((props, ref) => {
  const [selectedCategory, setSelectedCategory] = useState("highlights");
  const [lightboxIndex, setLightboxIndex] = useState(null); // null means no open image

  const selectedImages = galleryImages[selectedCategory] || [];
  const columns = [[], [], [], []];
  selectedImages.forEach((img, index) => {
    columns[index % 4].push(img);
  });

  // Lightbox navigation
  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i === 0 ? selectedImages.length - 1 : i - 1));
  const nextImage = () =>
    setLightboxIndex((i) => (i === selectedImages.length - 1 ? 0 : i + 1));

  return (
    <section ref={ref} className="bg-white dark:bg-stone-950 py-12">
      <div className="max-w-7xl px-6 mx-auto">
        <p className="text-xl font-medium text-amber-400">My</p>
        <h1 className="mt-1 text-2xl font-semibold text-gray-800 capitalize lg:text-5xl dark:text-slate-50">
          Gallery
        </h1>
        <div className="flex mx-auto mt-2">
          <span className="inline-block w-20 h-1 bg-amber-400 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-amber-300 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-amber-200 rounded-full"></span>
        </div>

        {/* Category Buttons */}
        <div className="flex justify-center gap-2 mt-10 sm:mt-4">
          {["highlights", "blitzkrieg", "tamilnadu"].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                closeLightbox();
              }}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === cat
                  ? "bg-amber-400 text-slate-50"
                  : "bg-slate-50"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 p-4">
          {columns.map((col, colIndex) => (
            <div className="grid gap-4" key={colIndex}>
              {col.map((img, imgIndex) => {
                // Calculate real index for lightbox
                const realIndex = colIndex + imgIndex * 4;
                return (
                  <div
                    key={imgIndex}
                    className="cursor-pointer overflow-hidden rounded-lg"
                    onClick={() =>
                      openLightbox(
                        colIndex + imgIndex * 4 > selectedImages.length - 1
                          ? selectedImages.length - 1
                          : colIndex + imgIndex * 4
                      )
                    }
                  >
                    <img
                      className="h-80 w-full object-cover object-cente transition-transform duration-300 hover:scale-110"
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white text-3xl p-2 hover:bg-gray-700 rounded-full select-none"
            aria-label="Previous Image"
          >
            ‹
          </button>
          <img
            src={selectedImages[lightboxIndex].src}
            alt={selectedImages[lightboxIndex].alt}
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white text-3xl p-2 hover:bg-gray-700 rounded-full select-none"
            aria-label="Next Image"
          >
            ›
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-4 right-4 text-white text-3xl p-2 hover:bg-gray-700 rounded-full select-none"
            aria-label="Close Lightbox"
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
});

export default Gallery;
