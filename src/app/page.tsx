import React from 'react';
import Head from 'next/head';
import DemoComponent from '../components/DemoComponent.client';
import "antd/dist/reset.css";

const DemoPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Tooltip Demo</title>
      </Head>
      <div>
        <DemoComponent />
      </div>
    </>
  );
};

export default DemoPage;
