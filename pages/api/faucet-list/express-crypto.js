import axios from 'axios';

export default async function handler(req, res) {
    const { data, status } = await axios.get('https://faucetworld.in/api-data/express-crypto-list.php');
    if (status === 200) {
        res.status(200).send(data)
    } else {
        res.status(400).send({})
    }
}