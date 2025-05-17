import React from 'react';

export default function Gallery({ images, onImageClick }) {
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-4">
      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt={img.alt}
          onClick={() => onImageClick(index)}
          className={`w-full h-full object-cover cursor-pointer 
            ${img.rowSpan ? `row-span-${img.rowSpan}` : ''}
            ${img.colSpan ? `col-span-${img.colSpan}` : ''}`}
        />
      ))}
    </div>
  );
}
