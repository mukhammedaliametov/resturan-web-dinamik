import Image from "next/image";
import styles from "../../styles/Featured.module.css";
import PizzaPng from "../../public/images/hero-bg.png";
import Logo from "../../public/images/logo.png";

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContent}>
        <h2 className={styles.text}>You can order pizza through this website</h2>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum at
          aliquid nemo facilis? Optio, repellat sequi. Necessitatibus ab
          perferendis maxime dignissimos harum nisi animi excepturi voluptate,
          explicabo, similique quasi voluptatum!
        </p>
        <button className={styles.button}>See more</button>
      </div>
      <Image src={PizzaPng} alt="" width={600} />
    </div>
  );
};

export default Featured;
