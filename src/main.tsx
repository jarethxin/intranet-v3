import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/globals.css'
import { Home } from '@/pages/home'
import { Toaster } from "@/components/ui/toaster"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <Home />
      <Toaster />
    </>
  </React.StrictMode>,
)
