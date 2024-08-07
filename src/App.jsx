import React from 'react'
import Header from './Components/Header'
import { Provider } from 'react-redux'
import Body from './Components/Body'
import appStore from './Constants/appStore'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WatchPage from './Components/WatchPage'
import MainContainer from './Components/MainContainer'
import ResultPage from './Components/ResultPage'

function App() {
  const appRouter=createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[{
path:"/",
element:<MainContainer/>,

    },
    {
      path:"/watch",
      element:<WatchPage/>
    },
    {
      path:"/results",
      element:<ResultPage/>
    }

    ]

    
  },
])
  return (
    <Provider store={appStore}>
  <div >
    <Header/>
   <RouterProvider router={appRouter}> 
    
   </RouterProvider>
    </div>
    </Provider>
  
  )
}

export default App