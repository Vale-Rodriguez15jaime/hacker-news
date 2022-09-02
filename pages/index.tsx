import type { NextPage } from 'next'

import Layout from '../src/components/layout/index'
import ListPosts from "../src/components/listPosts"

const Home: NextPage = () => {
  return (
    <Layout title='Home'>
      <ListPosts />
    </Layout>
  )
}

export default Home
