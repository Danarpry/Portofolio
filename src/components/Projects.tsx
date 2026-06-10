"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'SIAP-PPKB Jasa Raharja',
    year: '2026',
    role: 'Project Manager, QA, and Backend Developer',
    tech: 'Next.js, React, MySQL, JavaScript, REST API, Data Scraping, Chart Visualization',
    description: 'A large-scale monitoring and analytics platform consisting of 10+ integrated modules, enabling centralized data management, operational monitoring, arrears analysis, geospatial visualization, and data-driven decision support.',
    status: 'Under Development',
    link: 'https://siapppkb-jasaraharja.com/',
    images: ['/assets/projects/siapppkb.jpg', '/assets/projects/siapppkb-2.jpg', '/assets/projects/siapppkb-3.jpg']
  },
  {
    title: 'SignSync',
    year: '2026',
    role: 'Machine Learning & Computer Vision Developer',
    tech: 'Python, OpenCV, MediaPipe, Scikit-Learn, NumPy, CustomTkinter, Pillow',
    description: 'A real-time sign language translation system utilizing computer vision and machine learning to support more inclusive communication experiences for the deaf and hard-of-hearing community.',
    status: 'Not Deployed',
    link: '#',
    images: ['/assets/projects/signsync.jpg', '/assets/projects/signsync-2.jpg', '/assets/projects/signsync-3.jpg']
  },
  {
    title: 'Onegarage (E-Bengkel)',
    year: '2025',
    role: 'Backend Developer',
    tech: 'PHP, MySQL, REST API, JavaScript, Bootstrap, HTML5, CSS3',
    description: 'A centralized automotive management system to synchronize information between warehouses and branch stores, improve inventory visibility, and streamline day-to-day business operations.',
    status: 'Not Deployed',
    link: '#',
    images: ['/assets/projects/onegarage.jpg', '/assets/projects/onegarage-2.jpg', '/assets/projects/onegarage-3.jpg']
  },
  {
    title: 'SIXKUL',
    year: '2025',
    role: 'Backend Developer',
    tech: 'Next.js, React, JavaScript, MySQL, HTML5, CSS3',
    description: 'A centralized extracurricular management platform to streamline activity administration, improve data accessibility, and provide a more efficient experience for administrators and students.',
    status: 'Not Deployed',
    link: '#',
    images: ['/assets/projects/sixkul.jpg', '/assets/projects/sixkul-2.jpg', '/assets/projects/sixkul-3.jpg']
  },
  {
    title: 'iKM Disperindag Riau',
    year: '2020',
    role: 'Backend Developer',
    tech: 'PHP, MySQL, HTML, CSS, JavaScript, Bootstrap',
    description: 'A centralized web-based administrative platform to manage employee information, website content, and administrative data, streamlining processes and improving operational efficiency.',
    status: 'Active',
    link: 'https://ikm-disperindag.kepriprov.go.id/',
    images: ['/assets/projects/ikm.jpg', '/assets/projects/ikm-2.jpg']
  }
];

export default function Projects() {
  const [selectedProjectImages, setSelectedProjectImages] = useState<string[] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getStatusClass = (status: string) => {
    if (status === 'Active') return styles.statusActive;
    if (status === 'Under Development') return styles.statusDevelopment;
    if (status === 'Not Deployed') return styles.statusNotDeployed;
    return '';
  };

  const handleProjectClick = (e: React.MouseEvent, project: any) => {
    e.preventDefault();
    setSelectedProjectImages(project.images && project.images.length > 0 ? project.images : ['/assets/projects/placeholder.jpg']);
    setCurrentImageIndex(0);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProjectImages && currentImageIndex < selectedProjectImages.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProjectImages && currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
    }
  };

  return (
    <section id="projects" className={`section ${styles.projectsSection}`}>
      <div className="container">
        <motion.h2
          className={`section-title`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gradient">Featured Projects</span>
        </motion.h2>

        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`glass ${styles.projectCard}`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.projectHeader}>
                <div className={styles.titleGroup}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <span className={`${styles.statusBadge} ${getStatusClass(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <span className={styles.projectYear}>{project.year}</span>
              </div>
              <p className={styles.projectRole}>{project.role}</p>
              <p className={styles.projectTech}><strong>Tech Stack:</strong> {project.tech}</p>
              <p className={styles.projectDesc}>{project.description}</p>

              <div className={styles.actionButtons}>
                <button
                  className={styles.viewDetailBtn}
                  onClick={(e) => handleProjectClick(e, project)}
                >
                  View Detail
                </button>
                {project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.visitLinkBtn}
                  >
                    Visit Website ↗
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for viewing project image carousel */}
      <AnimatePresence>
        {selectedProjectImages && (
          <motion.div
            className={styles.modal}
            onClick={() => setSelectedProjectImages(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Navigation Buttons (Outside) */}
            {selectedProjectImages.length > 1 && (
              <>
                <button
                  className={`${styles.navArrow} ${styles.arrowPrev}`}
                  onClick={prevImage}
                  disabled={currentImageIndex === 0}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <button
                  className={`${styles.navArrow} ${styles.arrowNext}`}
                  onClick={nextImage}
                  disabled={currentImageIndex === selectedProjectImages.length - 1}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
              </>
            )}

            <motion.div
              className={styles.carouselWrapper}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button className={styles.closeBtn} onClick={() => setSelectedProjectImages(null)}>
                &times;
              </button>

              {/* Silhouette Previous */}
              {currentImageIndex > 0 && (
                <div className={`${styles.silhouette} ${styles.silhouettePrev}`} onClick={prevImage}>
                  <Image
                    src={selectedProjectImages[currentImageIndex - 1]}
                    alt="Previous Image"
                    fill
                    style={{ objectFit: 'cover' }}
                    unoptimized
                  />
                  <div className={styles.silhouetteOverlay}></div>
                </div>
              )}

              {/* Main Active Image */}
              <div className={styles.mainImageContainer}>
                <Image
                  src={selectedProjectImages[currentImageIndex]}
                  alt={`Project Screenshot ${currentImageIndex + 1}`}
                  fill
                  style={{ objectFit: 'contain' }}
                  unoptimized
                />
              </div>

              {/* Silhouette Next */}
              {currentImageIndex < selectedProjectImages.length - 1 && (
                <div className={`${styles.silhouette} ${styles.silhouetteNext}`} onClick={nextImage}>
                  <Image
                    src={selectedProjectImages[currentImageIndex + 1]}
                    alt="Next Image"
                    fill
                    style={{ objectFit: 'cover' }}
                    unoptimized
                  />
                  <div className={styles.silhouetteOverlay}></div>
                </div>
              )}

              {selectedProjectImages.length > 1 && (
                <div className={styles.imageCounter}>
                  {currentImageIndex + 1} / {selectedProjectImages.length}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
