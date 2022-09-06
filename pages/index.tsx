import type { NextPage } from 'next'

import Layout from '../src/components/layout/index'
import NewsWrapper from "../src/components/newsWrapper"

const Home: NextPage = () => {
  return (
    <Layout title='Home'>
      <NewsWrapper />
    </Layout>
  )
}

export default Home
