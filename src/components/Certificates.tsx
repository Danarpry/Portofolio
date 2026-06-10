"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Certificates.module.css';

const certificates = [
  {
    title: '1st Place – Bioselom National Debate Competition 2024',
    desc: 'Awarded 1st Place in a national-level debate competition, demonstrating strong critical thinking, public speaking, and argumentation skills.',
    image: '/assets/certificates/bioselom.jpg'
  },
  {
    title: '1st Place – Mobile Legends Dean\'s Cup 2023',
    desc: 'Secured 1st Place in a university esports competition through effective teamwork, communication, and strategic decision-making.',
    image: '/assets/certificates/ml.jpg'
  },
  {
    title: '1st Place – Fescom Debate Competition 2024',
    desc: 'Achieved 1st Place in an academic debate competition, showcasing analytical reasoning, teamwork, and persuasive communication abilities.',
    image: '/assets/certificates/fescom.jpg'
  },
  {
    title: 'Participant – ZFL Incubation Program 2024',
    desc: 'Participated in an innovation and incubation program focused on developing entrepreneurial mindset, problem-solving, and project development skills.',
    image: '/assets/certificates/zfl.jpg'
  },
  {
    title: 'Certificate of Appreciation – Former Head of Cadre Development Division, BEMP 2025',
    desc: 'Recognized for leadership and contributions in managing member development programs, organizational activities, and student engagement initiatives.',
    image: '/assets/certificates/demisioner.jpg'
  },
  {
    title: '1st Place – Men\'s Basketball Dean\'s Cup 2023',
    desc: 'Won 1st Place in a university basketball tournament, demonstrating teamwork, discipline, and competitive spirit.',
    image: '/assets/certificates/basket.jpg'
  },
  {
    title: 'Committee Member – Freshman Orientation Program (PKKMB) FMIPA UNJ 2025',
    desc: 'Served as a Committee Member for the Freshman Orientation Program (PKKMB), contributing to the successful organization and execution of orientation activities for new students.',
    image: '/assets/certificates/pkkmb.jpg'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
};

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="certificates" className={`section ${styles.certSection}`}>
      <div className="container">
        <motion.h2 
          className={`section-title`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gradient">Certificates & Achievements</span>
        </motion.h2>
        
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {certificates.map((cert, index) => (
            <motion.div 
              key={index} 
              className={`glass ${styles.certCard}`}
              onClick={() => setSelectedImage(cert.image)}
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)" }}
            >
              <div className={styles.iconWrapper}>🏆</div>
              <h3 className={styles.certTitle}>{cert.title}</h3>
              <p className={styles.certDesc}>{cert.desc}</p>
              <div className={styles.clickHint}>Click to view certificate</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for viewing certificate image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className={styles.modal} 
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className={styles.modalContent} 
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>
                &times;
              </button>
              <div className={styles.imageContainer}>
                <Image 
                  src={selectedImage} 
                  alt="Certificate" 
                  fill
                  style={{ objectFit: 'contain' }}
                  unoptimized
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
