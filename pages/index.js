import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import styles from '../styles/Home.module.css'
import PizzaList from '../components/PizzaList'
import axios from 'axios'
import Add from '../components/Add'
import AddButton from '../components/AddButton'
import { useState } from 'react'
import Product from "../models/Product"
import dbConnect from '../util/mongo'

export default function Home({pizzaList,admin}) {
  const [close, setClose] = useState(true)
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Novi Sad</title>
        <meta name="description" content="The best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      {admin && <AddButton setClose={setClose}/>}
      <PizzaList pizzaList={pizzaList}/>
      {!close && <Add setClose={setClose} />}
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  dbConnect();
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

try {
  let pizzaList = await Product.find();
  pizzaList = JSON.parse(JSON.stringify(pizzaList))
  return {
    props: {
      pizzaList,
      admin,
    },
  };
} catch (error) {
  console.log(error)
}
};
