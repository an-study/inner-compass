import React from 'react';

type Props = {
  id: string;
  src?: string;
  alt?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  expectedSize?: string;
};

export default function ImagePlaceholder({ id, src, alt = '', className = '', expectedSize = '—', width, height }: Props) {
  // If a file exists at the provided src (user can drop files into /public/images), the <img> will load it.
  // Otherwise we render the gray placeholder with the id so it's easy to replace locally.
  if (src) {
    return (
      // the id helps the user find and replace the element if needed
      // allow image to cover the area while preserving aspect via object-cover
      <img id={id} src={src} alt={alt || id} className={`w-full h-full object-cover rounded-lg ${className}`} width={width} height={height} />
    );
  }

  return (
    <div id={id} className={`w-full h-full bg-gray-300 rounded-lg flex items-center justify-center border border-gray-400 text-gray-700 ${className}`}>
      <div className="text-center px-4">
        <div className="font-medium mb-1">{id}</div>
        <div className="text-xs text-gray-600">{expectedSize}</div>
      </div>
    </div>
  );
}
