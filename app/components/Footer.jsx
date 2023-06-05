import React from "react";
import styles from "../../styles/Footer.module.css";
import Image from "next/image";
import FooterImg from "../../public/images/bg.png";

const Footer = () => {
  return (
    <div>
      <div className={styles.container}>
        <Image src={FooterImg} alt="" width={430} />
        <div className={styles.content}>
          <div className={styles.item}>
            <div className={styles.card}>
              <p className={styles.paragraph}>
                oh yes we did lama pizza wel backed slice of pizza
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.title}>Find Our Resturants</h3>
              <div className={styles.text}>
                1654 R. Don Road #304. <br />
                New Yourk, 85022 <br />
                (602) 867 1010
              </div>
              <div className={styles.text}>
                1654 R. Don Road #304. <br />
                New Yourk, 85022 <br />
                (602) 867 1010
              </div>
              <div className={styles.text}>
                1654 R. Don Road #304. <br />
                New Yourk, 85022 <br />
                (602) 867 1010
              </div>
              <div className={styles.text}>
                1654 R. Don Road #304. <br />
                New Yourk, 85022 <br />
                (602) 867 1010
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.title}>Find Our Resturants</h3>
              <div className={styles.text}>
                monday until friday <br />
                9:00-22:00
              </div>
              <div className={styles.text}>
                saturday sunday <br />
                12:00-24:00
              </div>
            </div>
          </div>
          <div className={styles.devInfo}>
            Developed by Mukhammedali Ametov
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
