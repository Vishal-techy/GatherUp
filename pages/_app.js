import '../styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

import { AuthContextProvider } from '../context/AuthContext'
import { useRouter } from 'next/router'
import ProtectedRoute from '../components/ProtectedRoute'
import NavBar from '@/components/NavBar'

import '@/styles/navbar.css'
import '@/styles/subNavBar.css'
import '@/styles/eventCard.css'
import '@/styles/teamCard.css'
import '@/styles/notificationCenter.css'

import '@/styles/sideNavBar.css'
import '@/styles/eventOverview.css'

const noAuthRequired = ['/login', '/signup']

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <AuthContextProvider>
      {/* <NavBar /> */}
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  )
}

export default MyApp