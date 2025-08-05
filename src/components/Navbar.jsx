import React from "react";
import logo from "../assets/Copilot_20250703_222043.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import CIcon from "@coreui/icons-react";
import { cibLeetcode } from "@coreui/icons";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-6 lg:px-20">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img
            src={logo}
            className="mr-2"
            width={70}
            height={53}
            alt="Logo"
          />
        </a>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/anshgangwar01/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Anshgangwar001"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/_ansh.gangwar_?utm_source=qr&igsh=MWp3ajAxZ21jeXpqYQ=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://leetcode.com/u/ANSH_X_minndflayer/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
        >
          <CIcon
            icon={cibLeetcode}
            style={{
              width: "28px",
              height: "28px",
              filter: "invert(100%)",
            }}
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
