import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.info}>
          <h3 className={styles.name}>Danar Priyo Utomo</h3>
        </div>
        
        <div className={styles.copyright}>
          <p>&copy; {currentYear} Danar Priyo Utomo. Built with Next.js & Vanilla CSS.</p>
        </div>
      </div>
    </footer>
  );
}
