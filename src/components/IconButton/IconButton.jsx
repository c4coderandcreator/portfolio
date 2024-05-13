/* eslint-disable react/prop-types */
import { useRef, useState } from "react";

export default function IconButton({ children, text, link, color, ...props }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`flex p-2 items-center rounded-lg text-webbut-400 text-base md:text-xl ${
          color || ""
        }`}
        {...props}
      >
        {children}
        <div
          style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
          className="overflow-x-hidden transition-all duration-300 ease-out"
        >
          <span ref={ref} className="px-1.5">
            {text}
          </span>
        </div>
      </button>
    </a>
  );
}
