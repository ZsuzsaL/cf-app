import Link from "next/link";
import React from "react";

interface SlidingMenuProps {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SlidingMenu: React.FC<SlidingMenuProps> = ({ setIsMenuOpen }) => {
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-64 h-full shadow-lg transform transition-transform duration-300 translate-x-0">
        <button className="p-4 text-black" onClick={() => setIsMenuOpen(false)}>
          Close
        </button>
        <nav className="p-4">
          <ul>
            <li>
              <Link href="/community" onClick={handleLinkClick}>
                Community
              </Link>
            </li>
            <li>
              <Link href="/transition-journey" onClick={handleLinkClick}>
                Transition Journey
              </Link>
            </li>
            <li>
              <Link href="/farm" onClick={handleLinkClick}>
                Farm
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SlidingMenu;
