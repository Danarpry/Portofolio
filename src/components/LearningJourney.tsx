"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './LearningJourney.module.css';

const journeyPhotos = [
  { src: '/assets/journey/fescom-debate.jpg', caption: '1st Place – Fescom Debate Competition 2024' },
  { src: '/assets/journey/bioselom-debate.jpg', caption: '1st Place – Bioselom National Debate Competition 2024' },
  { src: '/assets/journey/zfl-incubation.jpg', caption: 'Z Future Leaders Incubation Phase 2024' },
  { src: '/assets/journey/zfl-awarding.jpg', caption: 'Z Future Leaders Certificate Awarding Ceremony 2024' },
  { src: '/assets/journey/hr-head.jpg', caption: 'Head of Human Resource Development Department 2025' },
  { src: '/assets/journey/hr-member.jpg', caption: 'Member of Human Resource Development Department 2025' },
  { src: '/assets/journey/coffee-unj.jpg', caption: 'Coffee Stand Entrepreneurship at UNJ 2025' },
  { src: '/assets/journey/coffee-coating.jpg', caption: 'Coffee Stand Entrepreneurship at Indonesia Coating Show 2025' },
  { src: '/assets/journey/france-dialogue.jpg', caption: 'Cross-Cultural Dialogue with the President of France 2025' },
  { src: '/assets/journey/freshman-orientation.jpg', caption: 'Freshman Orientation Committee Member 2025' },
  { src: '/assets/journey/fmipa-mengabdi-1.jpg', caption: 'FMIPA Mengabdi – Community Teaching Program' },
  { src: '/assets/journey/fmipa-mengabdi-2.jpg', caption: 'FMIPA Mengabdi – Community Teaching Program' },
  { src: '/assets/journey/fmipa-mengabdi-3.jpg', caption: 'FMIPA Mengabdi – Community Teaching Program' },
  { src: '/assets/journey/demission-ceremony.jpg', caption: 'Department Demission Ceremony 2025' }
];

export default function LearningJourney() {
  return (
    <section id="journey" className={`section ${styles.journeySection}`}>
      <div className="container">
        <motion.h2 
          className={`section-title`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gradient">My Learning Journey</span>
        </motion.h2>
        
        <div className={styles.photoGrid}>
          {journeyPhotos.map((photo, index) => (
            <motion.div 
              key={index} 
              className={styles.photoCard}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className={styles.imageWrapper}>
                <Image 
                  src={photo.src} 
                  alt={photo.caption} 
                  fill
                  style={{ objectFit: 'cover' }}
                  unoptimized
                />
              </div>
              <div className={styles.captionOverlay}>
                <p>{photo.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
