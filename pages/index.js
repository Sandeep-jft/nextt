import Head from 'next/head';
import Navbar from './components/Navbar';
const Index = () => {
  return (
    <>
    <Head>
      <title>Home page</title>
      <meta charset="UTF-8"/>
      <meta name="description" content="Nextjs"/>
      <meta name="keywords" content="HTML, CSS, JavaScript, Next.js"/>
      <meta name="author" content="Sandeep Singh"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <h1>Root Page</h1>
    <Navbar />
    </>
  )
}

export default Index