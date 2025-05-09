
import React, { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

interface ImageModalProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="relative group cursor-pointer" onClick={openModal}>
        <img src={src} alt={alt} className={`w-full rounded-lg ${className}`} />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-2">
            <ZoomIn size={20} className="text-designer-red" />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-[90vh] overflow-auto">
            <button 
              className="absolute top-4 right-4 bg-white rounded-full p-2"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            >
              <X size={24} className="text-designer-red" />
            </button>
            <img src={src} alt={alt} className="max-w-full max-h-[85vh]" />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModal;
