import { Box,Grid } from "@mui/material"
import Head from 'next/head'
import Footer from '../src/Components/Footer'
import Header from '../src/Components/Header'
import CustomSlider from '../src/Components/CustomSlider'
import TelegramBotWrapper from "../src/Components/TelegramBotWrapper"
import CustomCard from "../src/Components/CustomCard"

export default function Home() {
  const CardData = [1,2,3,4,5,6,7,8,9,10]

  return (
    <div>
      <Head>
        <title>Order landing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main >
        <Grid container spacing={2}>
          <Grid item  xs={12} md={9}>
            <CustomSlider />
          </Grid>
          <Grid item  xs={12} md={3} >
            <TelegramBotWrapper />
          </Grid>
        </Grid>
        <Grid className="card--wrapper" container spacing={2} sx={{padding:"40px"}}>
          {
            CardData.map(item => (
              <Grid item  xs={12} sm={6} md={3}>
                <CustomCard />
              </Grid>
            ))
          }
        </Grid>
      </main>
      <Footer/>

    </div>
  )
}
