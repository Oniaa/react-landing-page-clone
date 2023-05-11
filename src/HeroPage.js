import React, { useEffect, useState } from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { CgFacebook } from 'react-icons/cg';
import { FaShoppingCart, FaTwitter } from 'react-icons/fa';
import styles from './HeroPage.module.scss';

export default function HeroPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.backgroundContainer} ${
        isScrolled ? styles.scrolled : ''
      }`}
    >
      <header className={styles.header}>
        <nav className={`${styles.navigationBar} ${isScrolled && styles.hide}`}>
          <a href="/#">
            <span>Crosby</span>
          </a>
          <ul>
            <li>
              <a href="/#">Shop</a>
            </li>
            <li>
              <a href="/#">Our Story</a>
            </li>
            <li>
              <a href="/#">Journal</a>
            </li>
            <li>
              <a href="/#">Contact</a>
            </li>
          </ul>
          <div className={styles.iconContainer}>
            <a href="/#">
              <AiOutlineInstagram size="1.3rem" />
            </a>
            <a href="/#">
              <CgFacebook size="1.3rem" />
            </a>
            <a href="/#">
              <FaTwitter size="1.3rem" />
            </a>
            <a href="/#">
              <FaShoppingCart size="1.3rem" />
              <span>0</span>
            </a>
          </div>
        </nav>
      </header>
      <section className={styles.heroPage}>
        <h1>
          Plants and Pots
          <br />
          For Your Home
        </h1>
        <a href="/#">
          <span>Shop Now</span>
        </a>
      </section>
    </div>
  );
}
