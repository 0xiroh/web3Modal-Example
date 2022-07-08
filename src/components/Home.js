import React from 'react'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'

import { useState, useEffect } from 'react';

function Home() {
    const [web3Modal, setWeb3Modal] = useState(null);

    useEffect(() => {
        const providerOptions = {
            walletconnect: {
                package: WalletConnectProvider,
                options: {
                    infuraId: '98729269926443ecb2eb50891137531b'
                    // infuraId: process.env.INFURA_ID
                }
            },
        };

        const newWeb3Modal = new Web3Modal({
            cacheProvider: false,
            network: 'rinkeby',
            providerOptions,
        });

        setWeb3Modal(newWeb3Modal);
    }, []);

    async function connectWallet(){
        const provider =  await web3Modal.connect();
    }
  return (
    <button onClick={connectWallet}>Connect </button>
  )
}

export default Home