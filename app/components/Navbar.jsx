import Image from 'next/image';
import React from "react";
import styles from '../../styles/Navbar.module.css';
import TelephoneIcon from '../../public/images/telephone.png'
import Logo from '../../public/images/logo.png';
import Cart from '../../public/images/cart.png'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src={TelephoneIcon} alt="" width={32} height={32}/>
        </div>
        <div className={styles.texts}>
          <p className={styles.text}>Order now!</p>
          <p className={styles.text}>+998(94)833-06-81</p>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src={Logo} alt="" width={200}/>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blogs</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <Image src={Cart} alt="" width={30} height={30}/>
        <p className={styles.count}>2</p>
      </div>
    </div>
  );
};

export default Navbar;
