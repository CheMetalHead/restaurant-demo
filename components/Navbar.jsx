import React from 'react'
import styles from '../styles/Navbar.module.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import Link from 'next/link'

function Navbar() {

  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src='/telephone.png' alt='' width='32' height='32'/>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>061 234 5678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href='/' passHref>
           <li className={styles.listItem}>Homepage</li>
          </Link>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <AiOutlineShoppingCart className={styles.cartIcon}/>
            <div className={styles.counter}>
              {quantity}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Navbar