import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Webscraping  from './pages/Webscraping';
/* import Tabla from './components/Tabla';
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/webscraping" element={<Webscraping />} />
       {/*  <Route path="/tabla" element={<Tabla />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;