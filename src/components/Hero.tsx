"use client";

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const dropdownVariants = {
  open: { 
    opacity: 1, 
    y: 0,
    display: "flex"
  },
  closed: { 
    opacity: 0, 
    y: 10,
    transitionEnd: { display: "none" }
  }
} as const;

export default function Hero() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className={styles.greeting}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Hello, I am
          </motion.h2>
          <motion.h1 
            className={styles.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
          >
            <span className="text-gradient">Danar Priyo Utomo</span>
          </motion.h1>
          <motion.h3 
            className={styles.role}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Computer Science Student @ Universitas Negeri Jakarta
          </motion.h3>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            A passionate developer focused on building scalable, reliable, and user-friendly digital solutions. Experienced in Backend Architecture, Project Management, and modern Web Development.
          </motion.p>
          <motion.div 
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            
            <div className={styles.dropdown} ref={dropdownRef}>
              <button 
                className={`btn btn-outline ${styles.dropdownBtn}`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Download Resume
                <span className={styles.dropdownArrow}>{isDropdownOpen ? '▲' : '▼'}</span>
              </button>
              
              <motion.div 
                className={styles.dropdownMenu}
                variants={dropdownVariants}
                initial="closed"
                animate={isDropdownOpen ? 'open' : 'closed'}
                transition={{ duration: 0.2 }}
              >
                <a href="/assets/cv/CV_Danar_Priyo_Utomo.pdf" download="CV_Danar_Priyo_Utomo.pdf" className={styles.dropdownItem} onClick={() => setTimeout(() => setIsDropdownOpen(false), 200)}>
                  CV
                </a>
                <a href="/assets/cv/professional.pdf" download="professional.pdf" className={styles.dropdownItem} onClick={() => setTimeout(() => setIsDropdownOpen(false), 200)}>
                  Professional Portfolio
                </a>
                <a href="/assets/cv/personal.pdf" download="personal.pdf" className={styles.dropdownItem} onClick={() => setTimeout(() => setIsDropdownOpen(false), 200)}>
                  Personal Portfolio
                </a>
              </motion.div>
            </div>

            <a href="https://github.com/danarpry" target="_blank" rel="noreferrer" className="btn btn-outline">
              GitHub Profile
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <motion.div 
        className={styles.glow1}
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className={styles.glow2}
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      ></motion.div>
    </section>
  );
}
