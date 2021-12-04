import { Box, Container, Grid, Typography } from "@mui/material";
import Tab from "@/components/Tab";
import Table from "@/components/Table";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";

export default function expresscrypto() {
  return (
    <>
      <Head>
      <title>ExpressCrypto daily updated Faucet List | Earn free cryptocurrencies</title>
        <meta name="title" content="ExpressCrypto All Faucet List" />
        <meta name="description" content="Expresscrypto all Faucet list update regularly" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="shortcut icon" href="/faucet-list/favicon.ico" />
        <meta name="keywords" content="ExpressCrypto, auto faucet, earn free cryptocurrency, bitcoin auto faucet, faucet list" />
        <meta name="copyright" content="© 2022 Copyright crypto-all.com" />
        <meta name="author" content="crypto-all.com" />
        <meta name="email" content="admin@crypto-all.com" />
        <meta httpEquiv="content-language" content="EN" />
      </Head>
      <Box style={{ height: "100vh" }}>
        <Header />
        <Container maxWidth="lg">
          <Typography component="h5" variant="h5" sx={{ textAlign: "center" }}>
            Expresscrypto All Faucet List
          </Typography>
          <Tab />
          <Table />
        </Container>
        <Footer />
      </Box>
    </>
  );
}
