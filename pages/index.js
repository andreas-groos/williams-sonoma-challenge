import Head from 'next/head'
import Image from 'next/image'
import FakeMenu from '../components/FakeMenu'
import data from '/public/data.json'

export default function Home() {
  console.log('data', data)
  return (
    <div >
      <Head>
        <title>Williams Sonoma Code Challenge</title>
        <meta name="description" content="A simple catalog for some products" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/tye8rhp.css" /> {/* muli font import */}
      </Head>
      <header>
        <h1>Williams Sonoma</h1>
        <FakeMenu />
      </header>
      <main >

      </main>

      <footer >
      </footer>
    </div>
  )
}
