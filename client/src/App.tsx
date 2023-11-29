import './App.css'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Navbar from './components/Navbar'
import Loading from './components/Loading'
import PageNotFound from './pages/pageNotFound'
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('./pages/home'))
const Page2 = lazy(() => import('./pages/page2'))
const Page3 = lazy(() => import('./pages/page3'))

function App() {

  return (
    <div>
      <Navbar/>
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/page2' element={<Page2/>}/>
            <Route path='/page3' element={<Page3/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Routes>
        </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  )
}

export default App
