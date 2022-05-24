import React from 'react'
import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'

function PizzaList({pizzaList}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>fefgagewageg gaeg gaegeag</h1>
      <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio blanditiis voluptates sed quam harum natus dolores perferendis officiis dolorem omnis excepturi neque voluptas consequuntur fugiat veniam, temporibus repellat beatae magnam voluptatum dicta, consequatur hic delectus quae doloribus! Harum voluptate, esse dicta aperiam porro vel laudantium?</p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza)=>(
          
          <PizzaCard key={pizza._id} pizza={pizza}/>
        ))}
      </div>
    </div>
  )
}

export default PizzaList