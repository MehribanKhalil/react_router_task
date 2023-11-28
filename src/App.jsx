import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import ShortCodes from './pages/ShortCodes'
import Languages from './pages/Languages'
import MainLayout from './layouts/MainLayout'
import NotFound from './pages/NotFound'
import ImagesPage from './pages/ImagesPage'
import Contact from './pages/Contact'
import Markup from './pages/Markup'
import ClearingFloats from './pages/ClearingFloats'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Comments from './pages/Comments'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<MainLayout />}>

            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/shortcodes" element={<ShortCodes />} />
            <Route path="/languages" element={<Languages />} />
            <Route path="/about" element={<About />}>
             
              <Route path="pageMarkup" element={<Markup/>} />
              <Route path="contact" element={<Contact/>} />
              <Route path="imagesPage" element={<ImagesPage />} />
              <Route path="floatsPage" element={<ClearingFloats/>} />
              <Route path="comments" element={<Comments/>} />
            </Route>
          </Route>
          <Route path="/*" element={<NotFound />} />



        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
