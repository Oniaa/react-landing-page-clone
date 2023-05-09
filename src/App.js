import styles from './App.module.scss';

export default function App() {
  return (
    <>
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
      <main>
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
      </main>
      <footer>Footer</footer>
    </>
  );
}
