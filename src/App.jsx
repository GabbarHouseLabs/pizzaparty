import { useState } from 'react'
import './App.css'
import DonatePage from './components/Donatepage'
import React from 'react'

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [mainnet],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: '29272fb02cb832df45b580d0eaa5e6ea',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

function App() {


  return (
    <>
     <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
      <DonatePage/>
      </RainbowKitProvider>
      </WagmiConfig>
    
    </>
  )
}

export default App
