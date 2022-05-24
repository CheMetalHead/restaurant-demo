import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src='/red-wine.webp' layout='fill' objectFit='cover'/>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            The only pizza that our customers want
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Find Our Restaurants</h1>
          <p className={styles.text}>
            Bulevar Oslobodjenja #304.
            <br /> Novi Sad, 21000
            <br /> 061 234 567
          </p>
          <p className={styles.text}>
            Bulevar Oslobodjenja #304.
            <br /> Novi Sad, 21000
            <br /> 061 234 567
          </p>
          <p className={styles.text}>
            Bulevar Oslobodjenja #304.
            <br /> Novi Sad, 21000
            <br /> 061 234 567
          </p>
          <p className={styles.text}>
            Bulevar Oslobodjenja #304.
            <br /> Novi Sad, 21000
            <br /> 061 234 567
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Working Hours</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAT 
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer