import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { wrapper, store } from '../src/store'

import '../styles/_all.sass'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default wrapper.withRedux(MyApp)
