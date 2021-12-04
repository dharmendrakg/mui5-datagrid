import React from 'react';
import Image from 'next/image';
import Link from '@/src/Link';
const Header = () => {
    return (
        <ul className="zetta-menu zm-response-switch zm-full-width zm-effect-slide-bottom">
            <li className="zm-logo"><Link href="/"><Image src="/logo.png" alt="logo" width={50} height={50} /></Link></li>
            <li><Link href="/"><i className="fa fa-home" aria-hidden="true" /> Home</Link></li>
            <li><Link href='/'>All Faucet List<i className="zm-caret fa fa-caret-down" aria-hidden="true"></i></Link>
                <ul className="z-depth-4"  style={{width:"250px"}}>
                    <li><a className="faa-pulse animated yellow-text" href="https://faucetspro.com/auto-faucet-list-in-2022" target="_blank" rel="noopener noreferrer">AutoFaucet List</a></li>
                    <li><a href="https://faucetspro.com/all-time-best-and-trusted-faucets/" target="_blank" rel="noopener noreferrer">All Time Best List</a></li>
                    <li><a href="/features/faucet-list/expresscrypto" target="_blank" rel="noopener noreferrer">Express Crypto Faucets</a></li>
                    <li><a href="/faucetpay-list" target="_blank" rel="noopener noreferrer">Faucetpay Faucets</a></li>
                    <li><a href="/high-paying-faucet-rotator" rel="noopener noreferrer">Faucet Rotator</a></li>
                </ul>
            </li>
            <li><Link href='/'>Useful Links<i className="zm-caret fa fa-caret-down" aria-hidden="true"></i></Link>
                <ul className="z-depth-4" style={{width:"250px"}}>
                    <li><a href="http://coursesdeal.com/" target="_blank" rel="noopener noreferrer">Udemy Coupons <i className="fa fa-scissors" aria-hidden="true"></i></a></li>
                    <li><a href='https://hosting-star.com/' target="_blank" rel="noopener noreferrer">Top Hosting Reviews <i className="fa fa-database" aria-hidden="true"></i></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href='https://faucetspro.com/top-secure-bitcoin-and-cryptocurrency-wallets/'>Top cryptocurrency wallets</a></li>
                    <li><a href='/news' target="_blank" rel="noopener noreferrer">Latest News <i className="fa fa-newspaper-o" aria-hidden="true"></i></a></li>
                    <li><a href="https://faucetspro.com/all-cryptocurrency-exchanges" target="_blank" rel="noopener noreferrer">All Crypto exchanges</a></li>
                    <li><a href="/icon-generator" target="_blank" rel="noopener noreferrer">Icon Generator <i className="fa fa-html5" aria-hidden="true"></i></a></li>
                    <li><a href="https://faucetspro.com/best-websites-for-online-education-in-2022" target="_blank" rel="noopener noreferrer">All Learning Sites</a></li>
                    <li><a href="/password-generator" target="_blank" rel="noopener noreferrer">Password Generator <i className="fa fa-lock" aria-hidden="true"></i></a></li>
                </ul>
            </li>
            <li><a className="yellow-text" href='#/'><i className="fa fa-question-circle-o" aria-hidden="true"></i>Help<i className="zm-caret fa fa-caret-down" aria-hidden="true"></i></a>
                <ul className="z-depth-4" style={{width:"300px"}}>
                    <li><a target="_blank" rel="noopener noreferrer" href='https://faucetspro.com/how-to-earn-free-cryptocurrency-from-faucetworld-autofaucet/'>How to earn from Faucetworld</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href='https://faucetspro.com/earn-interest-on-your-crypto-investment-on-binance'>Binance Earn</a></li>
                    <li><a className="yellow-text" href='#/'>How To get cryptocurrency wallets?<i className="zm-caret fa fa-caret-right" aria-hidden="true"></i></a>
                        <ul className="z-depth-4" style={{width:"300px"}}>
                            <li><a target="_blank" rel="noopener noreferrer" href='https://faucetspro.com/top-secure-bitcoin-and-cryptocurrency-wallets/'>Top Cryptocurrency wallets </a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href='https://faucetspro.com/why-you-should-use-trezor-hardware-wallet-and-which-model-to-choose/'>Why should you use hardware wallet? </a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href='https://faucetspro.com/trezor-t-hardware-wallet-full-review-in-2021/'>Trezor-T hardware wallet review </a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href='https://faucetspro.com/trezor-one-hardware-wallet-full-review-in-2021/'>Trezor-One hardware wallet review </a></li>
                        </ul>
                    </li>
                    <li><a className="yellow-text" href='#/'>How To Buy Bitcoin Safely<i className="zm-caret" aria-hidden="true"></i></a>
                        <ul className="z-depth-4" style={{width:"300px"}}>
                            <li><a target="_blank" rel="noopener noreferrer" href='https://faucetspro.com/buy-bitcon-with-paypal/'>Buy Bitcoin with Paypal <i className="fa fa-paypal" aria-hidden="true"></i></a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href='https://faucetspro.com/buy-bitcoin-with-credit-card/'>Buy Bitcoin with Credit Card <i className="fa fa-credit-card-alt" aria-hidden="true"></i></a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href='https://faucetspro.com/buy-bitcoin-with-debit-card/'>Buy Bitcoin with Debit Card <i className="fa fa-credit-card" aria-hidden="true"></i></a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href='https://faucetspro.com/buy-bitcoin-with-bank-account/'>Buy Bitcoin with Bank Account <i className="fa fa-university" aria-hidden="true"></i></a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href='https://faucetspro.com/buy-bitcoin-with-apple-pay/'>Buy Bitcoin with Apple Pay <i className="fa fa-apple" aria-hidden="true"></i></a></li>
                        </ul>
                    </li>
                    <li><a target="_blank" rel="noopener noreferrer" href='https://faucetspro.com/category/crypto-courses'>Crypto Trading Courses</a></li>
                </ul>
            </li>
            <li className="zm-right-item"><a href="/about-us" target="_blank" rel="noopener noreferrer">About us</a></li>
        </ul>

    );
}

export default Header;
