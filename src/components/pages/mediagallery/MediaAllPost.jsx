import React, { useState } from 'react';
import Gallery from './Gallery';

import casava from "../../../assets/images/casava.png";
import truck from "../../../assets/images/truck2.png";
import livestock from "../../../assets/images/chickens.png";
import fruits from "../../../assets/images/fruits.png";
import prev from "../../../assets/images/prev.png";
import next from "../../../assets/images/next.png";

export default function Media() {
    const images = [
        { src: casava, alt: 'casava', rowSpan: 1, colSpan: 1 },
        { src: truck, alt: 'truck', rowSpan: 2, colSpan: 1 },
        { src: livestock, alt: 'livestock', rowSpan: 1, colSpan: 2 },
        { src: fruits, alt: 'fruits', rowSpan: 1, colSpan: 1 },
        { src: casava, alt: 'casava 2', rowSpan: 1, colSpan: 1 },
        { src: fruits, alt: 'fruits 2', rowSpan: 1, colSpan: 1 },
        { src: livestock, alt: 'livestock 2', rowSpan: 1, colSpan: 2 },
        { src: fruits, alt: 'fruits 3', rowSpan: 1, colSpan: 1 },
        { src: casava, alt: 'casava 3', rowSpan: 1, colSpan: 1 },
        { src: fruits, alt: 'fruits 4', rowSpan: 1, colSpan: 1 },
        { src: casava, alt: 'casava 4', rowSpan: 1, colSpan: 1 },
        { src: livestock, alt: 'livestock 4', rowSpan: 1, colSpan: 1 },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => setIsOpen(false);

    const goNext = () =>
        setCurrentIndex((prev) => (prev + 1) % images.length);

    const goPrev = () =>
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div>
            <div className="px-[10%] py-[3%]">
                {/* GALLERY */}
                <Gallery images={images} onImageClick={openModal} />

                {/* MODAL */}
                {isOpen && (
                    <div className="fixed px-[10%] pt-[8%] top-18 inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50">
                        <div className="relative w-full max-w-4xl px-4">
                            <img
                                src={images[currentIndex].src}
                                alt={images[currentIndex].alt}
                                className="w-full h-auto max-h-[60vh] object-contain"
                            />

                            <button
                                onClick={closeModal}
                                className="fixed top-20 md:right-[160px] right-[40px] bg-inherit text-white rounded-full px-4 py-1 text-[2rem]"
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>

                            <img
                                src={prev}
                                alt="Previous"
                                onClick={goPrev}
                                className="absolute -left-10 top-1/2 transform -translate-y-1/2 cursor-pointer px-4 py-1"
                            />
                            <img
                                src={next}
                                alt="Next"
                                onClick={goNext}
                                className="absolute -right-10 top-1/2 transform -translate-y-1/2 cursor-pointer px-4 py-1"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
