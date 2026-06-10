"use client";

import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skills = [
  {
    title: 'Problem Solver',
    description: 'Enjoy solving complex problems and turning ideas into practical digital solutions.',
  },
  {
    title: 'Fast Learner',
    description: 'Passionate about learning new technologies and continuously improving technical skills.',
  },
  {
    title: 'Critical Thinking',
    description: 'Able to analyze situations logically and make effective decisions under pressure.',
  },
  {
    title: 'Leadership',
    description: 'Experienced in leading teams, coordinating projects, and maintaining effective collaboration.',
  },
  {
    title: 'Team Collaboration',
    description: 'Comfortable working with teams and adapting to collaborative development environments.',
  },
  {
    title: 'Communication',
    description: 'Strong communication skills developed through leadership and debate competitions.',
  },
];

const techSkills = [
  {
    category: "Frontend Development",
    skills: [
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" }
    ]
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
      { name: "CodeIgniter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "REST API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" }
    ]
  },
  {
    category: "Machine Learning & Python",
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
      { name: "Scikit-Learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
      { name: "MediaPipe", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.skillsSection}`}>
      <div className="container">
        {/* Personal Skills */}
        <motion.h2 
          className={`section-title ${styles.title}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gradient">Personal Skills</span>
        </motion.h2>
        
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className={`glass ${styles.card}`}
              variants={cardVariants}
            >
              <h3 className={styles.cardTitle}>{skill.title}</h3>
              <p className={styles.cardDesc}>{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Skills */}
        <motion.h2 
          className={`section-title ${styles.title}`}
          style={{ marginTop: '5rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gradient">Technical Skills</span>
        </motion.h2>

        <motion.div
          className={`glass ${styles.techBox}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {techSkills.map((category, idx) => (
            <div key={idx} className={styles.techCategory}>
              <h3>{category.category}</h3>
              <div className={styles.techGrid}>
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className={styles.techItem}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={skill.icon} alt={skill.name} className={styles.techIcon} />
                    <span className={styles.techName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
