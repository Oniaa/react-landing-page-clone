import { AiOutlineInstagram } from 'react-icons/ai';
import { CgFacebook } from 'react-icons/cg';
import { FaShoppingCart, FaTwitter } from 'react-icons/fa';
import styles from './App.module.scss';
import BiggerStatements from './images/BiggerStatements.jpg';
import giftCard from './images/giftCard.jpg';
import LilGuys from './images/LilGuys.jpg';
import LowMaintenance from './images/LowMaintenance.jpg';
import plant1 from './images/plant1.gif';
import plant2 from './images/plant2.gif';

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
      <section className={styles.secondSection}>
        <h2 className={styles.h2}>Fan Favorites</h2>
        <div className={styles.secondSecContainer}>
          <div className={styles.imgColumn}>
            <img src={LilGuys} alt="Lil Guys" />
            <h3 className={styles.h3}>Lil' Guys</h3>
            <a href="/#" className={styles.button}>
              <span>Buy Now</span>
            </a>
          </div>
          <div className={styles.imgColumn}>
            <img src={BiggerStatements} alt="Bigger Statements" />
            <h3 className={styles.h3}>Bigger Statements</h3>
            <a href="/#" className={styles.button}>
              <span>Buy Now</span>
            </a>
          </div>
          <div className={styles.imgColumn}>
            <img src={LowMaintenance} alt="Low Maintenance" />
            <h3 className={styles.h3}>Low Maintenance</h3>
            <a href="/#" className={styles.button}>
              <span>Buy Now</span>
            </a>
          </div>
        </div>
      </section>
      <section className={styles.thirdSection}>
        <div className={styles.thirdSectionBackground}>
          <span>Pseudo Content</span>
        </div>
      </section>
      <section className={styles.fourthSection}>
        <h2 className={styles.h2}>The Journal</h2>
        <div className={styles.fourthSecContainer}>
          <div className={styles.imgColumn}>
            <img src={plant1} alt="Plant Gif" />
            <h3 className={styles.h3}>Is It Flowers Youre After?</h3>
            <p>
              Flowering plants are stunning, but require a bit more work than
              their non-flowering brethren. Learn how to keep them happy.
            </p>
            <a href="/#">
              <span>Read More</span>
            </a>
          </div>
          <div className={styles.imgColumn}>
            <img src={plant2} alt="Plant Gif" />
            <h3 className={styles.h3}>Searching for Succulents?</h3>
            <p>
              If you have a sunny windowsill, you can be a succulent owner.
              These hardy and beautiful plants are as easy as they come.
            </p>
            <a href="/#">
              <span>Read More</span>
            </a>
          </div>
        </div>
      </section>
      <section className={styles.fifthSection}>
        <div className={styles.fifthSectionBackground}>
          <h3 className={styles.h3}>They grow up so fast.</h3>
          <p>Dont miss a thing. Sign up to receive news and updates.</p>
          <div className={styles.emailContainer}>
            <input type="email" placeholder="Email Address" />
            <a href="/#" className={styles.button}>
              <span>Sign Up</span>
            </a>
          </div>
        </div>
      </section>
      <section className={styles.sixtSection}>
        <div className={styles.sixtSectContainer}>
          <img src={giftCard} />
          <div>
            <h2 className={styles.h2}>Give the Gift of Greenery</h2>
            <p>
              Plants are as thoughtful a gift as flowers and last much longer.
              With a gift card, you can brighten up someone’s home, office or
              dorm room with a potted plant of their choice. They’re available
              in any denomination and we’ll mail it for free!
            </p>
            <a href="/#">
              <span>Purchase Gift Card</span>
            </a>
          </div>
        </div>
      </section>

      <footer>Footer</footer>
    </>
  );
}
