import React from "react";
import { makeStyles } from "@mui/styles";
import { InputLabel, MenuItem, FormControl, Select, Box } from "@mui/material";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { updateSelectedCoinSites } from "@/redux/slices/faucetListSlice";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "50%",
    display: "flex",
    margin: "0 auto",
    [theme.breakpoints.down('md')]: {
      width: "80%",
    },
    [theme.breakpoints.down('sm')]: {
      width: "100%",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Tab = () => {
  const classes = useStyles();
  const [option, setOption] = React.useState("");
  const dispatch = useDispatch();

  const supportedCurrency = [
    { short: "BNB", long: "Binance Coin" },
    { short: "BTC", long: "Bitcoin" },
    { short: "BCH", long: "Bitcoin Cash" },
    { short: "BTT", long: "BitTorrent" },
    { short: "BCN", long: "Bytecoin" },
    { short: "ADA", long: "Cardano" },
    { short: "DASH", long: "Dash" },
    { short: "DGB", long: "DigiByte" },
    { short: "DOGE", long: "Dogecoin" },
    { short: "ETH", long: "Ethereum" },
    { short: "ETC", long: "Ethereum Classic" },
    { short: "EXG", long: "Ex-Gold" },
    { short: "EXS", long: "Ex-Silver" },
    { short: "ZEN", long: "Horizen" },
    { short: "KMD", long: "Komodo" },
    { short: "LSK", long: "Lisk" },
    { short: "LTC", long: "Litecoin" },
    { short: "XMR", long: "Monero" },
    { short: "NEO", long: "Neo" },
    { short: "PPC", long: "Peercoin" },
    { short: "PIVX", long: "Pivx" },
    { short: "RVN", long: "Ravencoin" },
    { short: "RDD", long: "Reddcoin" },
    { short: "XRP", long: "Ripple" },
    { short: "SHIB", long: "Shiba Inu" },
    { short: "STRAX", long: "Stratis" },
    { short: "XTZ", long: "Tezos" },
    { short: "TRX", long: "Tron" },
    { short: "USDT", long: "Teher" },
    { short: "VTC", long: "Vertcoin" },
    { short: "WAVES", long: "Waves" },
    { short: "ZEC", long: "Zcash" },
  ];

  return (
    <FormControl variant="filled" className={classes.formControl}>
      <InputLabel id="faucetlist">
        Select Crypto Coin
      </InputLabel>
      <Select
        labelId="faucetlist"
        id="faucetlist-filled"
        value={option}
        onChange={(e) => {
          setOption(e.target.value);
          dispatch(updateSelectedCoinSites(e.target.value));
        }}
      >
        {supportedCurrency.map(({ short, long }) => (
          <MenuItem key={short} value={short}>
            <Image
              src={`/images/${short.toLocaleLowerCase()}.png`}
              alt={`${long} Faucet list`}
              width={24}
              height={24}
            />
            <Box sx={{display: "inline-block", overflow: "hidden", ml: 0.5}}>{long}</Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Tab;
