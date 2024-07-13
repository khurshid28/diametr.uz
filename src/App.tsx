

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import NotFound from './components/404/notFound';


function App() {


  return (
    <BrowserRouter >
      <Routes >
        <Route path="/" >
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>


 
  );
}

export default App;
