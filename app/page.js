import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Featured from './components/Featured'
import PizzaList from './components/PizzaList'

export default function Home() {
  return (
    <>
      <Navbar />
      <Featured />
      <PizzaList />
      <Footer />
    </>
  )
}
