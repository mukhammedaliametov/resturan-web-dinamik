import Image from "next/image";
import styles from "../../styles/Featured.module.css";
import Logo from '../../public/images/logo.png';

const Featured = () => {
  return (
    <div className={styles.container}>
        <div className={styles.textContent}>
            <Image src={Logo} alt="" width={300}/>
            <p className={styles.paragraph}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, eveniet. Minima, expedita? Fugiat nam harum accusamus, voluptatem laboriosam, unde consectetur tempora minima quisquam consequatur, sequi delectus neque? Inventore, voluptatibus molestias.</p>
            <button className={styles.button}>Menu</button>
            <button className={styles.button}>Blogs</button>
        </div>
    </div>
  );
};

export default Featured;
