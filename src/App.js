import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import './App.css';
import Nevbar from './Component/Nevbar';
import NevbarTwo from './router_work/Nevbar';
import About from './router_work/About';
import Home from './router_work/Home';
import Help from './router_work/Help';
import Email from './router_work/Email';
import Api_work from './router_work/Api_work';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<NevbarTwo/>}>
    <Route index    element={<About/>} />
    <Route path='/Help'  element={<Help/>} />
    <Route path='/Home'  element={<Home/>} />
    <Route path='/Email' element={<Email/>}/>
    <Route path='/Api_work' element={<Api_work/>} />
    </Route>
   </Routes>
   </BrowserRouter>
  );
}
export default App;

