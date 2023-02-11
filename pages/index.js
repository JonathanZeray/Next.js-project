import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
    <Head>
    <title>Vanichaya Beauty Care | Home</title>
    <meta name="keywords" content="Beauty Care" />
    </Head>
   <div>
    <h1 className={styles.title}>Homepage</h1>
    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates reiciendis modi rem ullam inventore similique tempora deserunt quo eveniet doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, maxime? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo fuga voluptas consectetur provident animi, harum repudiandae asperiores voluptate dolores odit vero obcaecati eos iste modi doloremque ad suscipit? Molestiae, voluptates?</p>
    <Link href="/contact">
       <p className={styles.btn}>For Questions</p>
    </Link>
   </div>
   </>
  )
}
