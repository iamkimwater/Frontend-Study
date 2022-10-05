// 원래는 next에서 알아서 import 해주는데 eslint 설정 때문에 작성
import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Home = () => (
  <AppLayout>
    <Head>
      <title>NodeBird</title>
    </Head>
    <div>Hello, Next!</div>
  </AppLayout>
);

export default Home;