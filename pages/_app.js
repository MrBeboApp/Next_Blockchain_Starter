import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Layout from "../components/Layout"


function MyApp({ Component, pageProps }) {
  return (
    <div>
    <Layout >
      < Component {...pageProps} />
     
    </Layout>
  
  </div>
  )
}

export default MyApp
