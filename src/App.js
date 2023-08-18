import Navbar from "./Components/Navbar";
import NewsCollection from "./Components/NewsCollection";
import { BrowserRouter , Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<NewsCollection key="general" country="us" category="general"/>} />
          <Route  path="/business" element={<NewsCollection key="business" country="us" category="business"/>}/>
          <Route  path="/entertainment" element={<NewsCollection key="entertainment" country="us" category="entertainment"/>}/>
          <Route  path="/health" element={<NewsCollection key="health" country="us" category="health"/>}/> 
          <Route  path="/science" element={<NewsCollection key="science" country="us" category="science"/>}/> 
          <Route  path="/sports" element={<NewsCollection key="sports" country="us" category="sports"/>}/> 
          <Route  path="/technology" element={<NewsCollection key="technology" country="us" category="technology"/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
