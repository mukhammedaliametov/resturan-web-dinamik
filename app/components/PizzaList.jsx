import React from "react";
import Image from "next/image";
import styles from "../../styles/PizzaList.module.css";
import PizzaImg from "../../public/images/pizza.png";
import { PizzaItems } from '../components/PizzaItems';

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.contentText}>The best pizza in town</h3>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quisquam
        sequi magni facilis aspernatur quas!
      </p>
      <div className={styles.cards}>
        {PizzaItems.map((item, index) => {
          return (
            <div className={styles.card} key={index}>
              <Image src={item.Img} alt="" width={250} />
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.money}>{item.money}</p>
              <p className={styles.info}>{item.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PizzaList;
