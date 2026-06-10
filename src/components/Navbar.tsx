import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <span className="text-gradient">Danar.</span>
        </Link>
        
        <ul className={styles.navLinks}>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#certificates">Certificates</Link></li>
          <li><Link href="#journey">Journey</Link></li>
        </ul>
        
        <Link href="#contact" className="btn btn-outline">
          Contact Me
        </Link>
      </div>
    </nav>
  );
}
