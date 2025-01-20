import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import CreateTrip from './create-trip/index.jsx'
import Header from './components/ui/custom/Header'
import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>
  },
  {
    path : '/create-trip',
    element : <CreateTrip/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Toaster />
    <RouterProvider router={router}/>
  </StrictMode>,
)
