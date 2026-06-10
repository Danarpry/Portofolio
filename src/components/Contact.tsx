"use client";

import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const contactLinks = [
  {
    platform: 'Instagram',
    handle: '@danarpry',
    url: 'https://instagram.com/danarpry',
    icon: '📸',
  },
  {
    platform: 'LinkedIn',
    handle: 'Danar Priyo Utomo',
    url: 'http://www.linkedin.com/in/danarpritomo',
    icon: '💼',
  },
  {
    platform: 'GitHub',
    handle: 'danarpry',
    url: 'https://github.com/danarpry',
    icon: '💻',
  },
  {
    platform: 'WhatsApp',
    handle: '+62 812-2877-8952',
    url: 'https://wa.me/6281228778952',
    icon: '💬',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: "spring", stiffness: 100 }
  }
} as const;

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contactPage}`}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`section-title ${styles.title}`}>
            Let's <span className="text-gradient">Connect!</span>
          </h2>
          <p className={styles.subtitle}>
            Feel free to reach out for collaborations, project inquiries, or just to say hi. I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <motion.div 
          className={styles.linksContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {contactLinks.map((link, index) => (
            <motion.a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className={styles.contactCard}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={styles.iconWrapper}>
                {link.icon}
              </div>
              <div className={styles.info}>
                <span className={styles.platform}>{link.platform}</span>
                <span className={styles.handle}>{link.handle}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Decorative Background */}
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
