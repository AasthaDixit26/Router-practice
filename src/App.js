import './App.css';
import{createBrowserRouter,createRoutesFromElements,Route, RouterProvider} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';

import RootLayout from './Layout/RootLayout';
import HelpLayout from './Layout/HelpLayout';

import Contact from './pages/help/contact';
import Faq from './pages/help/faq';


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='help' element={<HelpLayout/>}>
          <Route path='faq'element={<Faq/>}/>
          <Route path='contact'element={<Contact/>}/>
        </Route>
      </Route>

  )
)

function App() {
  return (
    <RouterProvider router={router}/>

    
  // <BrowserRouter>
  //   <header>
  //     <nav>
  //       <h1>JobRouter</h1>
  //       <Link to="/">Home</Link>
  //       <NavLink to="about">About</NavLink>
  //       {/* through the nav link we get the class as active not active and all but with the link we only get simple anchor tag */}
  //     </nav>
  //   </header>
  //   <main>
  //     <Routes>
  //       <Route path='/' element={<Home/>}/>
  //       <Route path='about' element={<About/>}/>
  //     </Routes>
  //   </main>
  // </BrowserRouter>
  );
}

export default App;
