import Head from 'next/head'
import Header from '@/components/Header'
import Logo from '/public/Logo.svg'
import styled from 'styled-components';

export default function Home() {

  const Div = styled.div`
  background-image: url(${Logo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: auto;
  height: 750px;
  `;

  return (
   <>
      <Head>
        <title>T-Sheet</title>
        <link rel="icon" href="/Logo.svg" />
      </Head>  
      <Div>
        <Header></Header> 
      </Div>
    </>
  )
}
