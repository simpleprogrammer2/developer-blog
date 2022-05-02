import 'nextra-theme-blog/style.css'
import Head from 'next/head'

import '../styles/main.css'
import TagManager from 'react-gtm-module'
import MyGoogleLogin from '../components/google/login'
import MyGoogleLogout from '../components/google/logout'
import MyDarkModeToggle from '../components/util/darkModeToggle'
import Grid from '@mui/material/Grid';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Nextra({ Component, pageProps }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const tagManagerArgs = {
    gtmId: 'GTM-5T3MTFP'
  };
  if (process.browser) {
    TagManager.initialize(tagManagerArgs);
  }
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />        
      </Head>

      <Grid container spacing={2}>
        <Grid item xs={6} md={5}>
          {/* <MyGoogleLogin />
          <MyGoogleLogout />   */}
        </Grid>
        <Grid item xs={6} md={5}>
        </Grid>
        <Grid item xs={6} md={2}>
          <MyDarkModeToggle />  
        </Grid>
      </Grid>
       
      <Component {...pageProps} />
    </>
  )
}
