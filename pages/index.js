import Head from 'next/head'
import FakeMenu from '../components/FakeMenu'
import ProductGrid from '../components/ProductGrid'
import { groups as products } from "/public/data.json";

export default function Home() {
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
        <div className="container">
          <ProductGrid products={products} />
        </div>
      </main>
      <footer >
      </footer>
    </div>
  )
}
