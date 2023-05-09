import styles from './App.module.scss';

export default function App() {
  return (
    <>
      <div className={styles.backgroundContainer}>
        <header>
          <nav className={styles.navigationBar}>
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
            <div>
              <a href="/#">Icon</a>
              <a href="/#">Icon</a>
              <a href="/#">Icon</a>
              <a href="/#">Icon</a>
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
      <section className={styles.secondSection}></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>

      <footer>Footer</footer>
    </>
  );
}
