import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/globals.css'
import { HomePage } from '@/pages/home'
import { Toaster } from "@/components/ui/toaster"
import { Footer } from './components/general/footer-section'
import { NavigationBarMenu } from './components/general/navigation-bar-menu'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <NavigationBarMenu />
      <HomePage />
      <Footer />
      <Toaster />
    </>
  </React.StrictMode>,
)
