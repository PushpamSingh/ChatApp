import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Homepage from "./Components/Pages/Homepage.jsx"
import Loginpage from "./Components/Pages/Loginpage.jsx"
import Signuppage from "./Components/Pages/Signuppage.jsx"
import Onboardingpage from "./Components/Pages/Onboardingpage.jsx"
import Notificationpage from "./Components/Pages/Notificationpage.jsx"
import Callpage from "./Components/Pages/Callpage.jsx"
import Chatpage from "./Components/Pages/Chatpage.jsx"

import { AuthLayOut } from './Components/AuthLayout.jsx'
import App from './App.jsx'
import { store } from './Store/Store.js'
import {
  QueryClient,
  QueryClientProvider
} from  '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Homepage/>
      },
      {
        path:'/login',
        element:(
          // <AuthLayOut authentication={false}>
            <Loginpage/>
          // </AuthLayOut>
        )
      },
      {
        path:'/signup',
        element:(
          <AuthLayOut authentication={false}>
            <Signuppage/>
         </AuthLayOut>
        )
      },
      {
        path:'/onboarding',
        element:(
          <AuthLayOut authentication>
            <Onboardingpage/>
          </AuthLayOut>
        )
      },
      {
        path:'/notification',
        element:(
          <AuthLayOut authentication>
            <Notificationpage/>
          </AuthLayOut>
        )
      },
      {
        path:'/call',
        element:(
          <AuthLayOut authentication>
            <Callpage/>
          </AuthLayOut>
        )
      },
      {
        path:'/chat',
        element:(
          <AuthLayOut authentication>
            <Chatpage/>
          </AuthLayOut>
        )
      }
    ]
  }
])

const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
<Provider store={store}>
    
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
    
</Provider>
  </StrictMode>,
)
