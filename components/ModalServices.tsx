import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,.9)] pt-16">
      <div className="bg-black p-6 rounded-md shadow-lg md:w-1/2 w-full relative border">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-200 hover:text-red-800 text-3xl cursor-pointer"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
