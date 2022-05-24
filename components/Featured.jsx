import React,{useState} from 'react'
import styles from '../styles/Featured.module.css'
import Image from 'next/image'

function Featured() {
  const [index, setIndex] = useState(0)
  const images = [
    '/pizza1.png',
    '/bg1.webp',
    '/bg2.jpg'
  ]

  const handleArrow = (direction) => {
    if (direction === 'l') {
      setIndex(index !==0? index -1: 2)
    }
    if (direction === 'r') {
      setIndex(index !==2? index +1: 0)
    }
  }

 
  
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{left:0}} onClick={()=>handleArrow('l')}>
        <Image src='/arrowl.png' layout='fill' objectFit='contain'/>
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
          {images.map((img, index)=>(
           <div className={styles.imgContainer} key={index}>
            <Image src={img} layout='fill' objectFit='contain'/>
          </div>
          ))}
      </div>
      <div className={styles.arrowContainer} style={{right:0}} onClick={()=>handleArrow('r')}>
      <Image src='/arrowr.png' layout='fill' objectFit='contain'/>
      </div>
    </div>
  )
}

export default Featured