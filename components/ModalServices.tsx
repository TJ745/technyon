import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,.8)] pt-16">
      <div className="bg-gray-800 p-6 rounded-md shadow-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-200 hover:text-gray-500 text-3xl"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
