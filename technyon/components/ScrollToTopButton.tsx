"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 animate-pulse">
      {visible && (
        <button
          onClick={handleScroll}
          className="bg-red-900 text-white p-3 rounded-xl w-12 h-12 flex items-center justify-center focus:outline-none shadow-lg hover:bg-red-950 cursor-pointer"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}
