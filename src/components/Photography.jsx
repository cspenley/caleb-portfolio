import { useEffect, useState } from "react";
import Media from "./Media";

export default function PhotographyGallery({ images }) {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const selectedImage =
        selectedIndex !== null ? images[selectedIndex] : null;

    function closeViewer() {
        setSelectedIndex(null);
    }

    function nextImage() {
        setSelectedIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    }

    function previousImage() {
        setSelectedIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    }

    useEffect(() => {
        function handleKeyDown(event) {
            if (selectedIndex === null) return;

            if (event.key === "Escape") {
                closeViewer();
            }

            if (event.key === "ArrowRight") {
                nextImage();
            }

            if (event.key === "ArrowLeft") {
                previousImage();
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedIndex]);

    return (
        <>
            {/* Gallery */}
            <div className="columns-1 gap-6 md:columns-2">
                {images.map((src, index) => (
                    <button
                        key={src}
                        onClick={() => setSelectedIndex(index)}
                        className="mb-6 block w-full break-inside-avoid"
                    >
                        <Media
                            src={src}
                            alt=""
                            className="w-full transition-transform duration-300 hover:scale-[1.02]"
                        />
                    </button>
                ))}
            </div>

            {/* Fullscreen viewer */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
                    onClick={closeViewer}
                >
                    {/* Left arrow */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            previousImage();
                        }}
                        className="absolute left-6 text-4xl text-white/70 transition hover:text-white"
                    >
                        ‹
                    </button>

                    {/* Image */}
                    <img
                        src={selectedImage}
                        alt=""
                        className="max-h-full max-w-full object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {/* Right arrow */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                        }}
                        className="absolute right-6 text-4xl text-white/70 transition hover:text-white"
                    >
                        ›
                    </button>
                </div>
            )}
        </>
    );
}