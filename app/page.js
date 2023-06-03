import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Featured from './components/Featured'

export default function Home() {
  return (
    <>
      <Navbar />
      <Featured />
      <Footer />
    </>
  )
}
