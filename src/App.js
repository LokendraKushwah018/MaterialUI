import {Routes , Route} from 'react-router-dom'
import Home from './Components/Home';
import Services from './Components/Services';
import ResponsiveAppBar from "./Components/Nav"
import About from './Components/About';
import Registration from './Components/Registration'

function App() {
  return <div>
    <ResponsiveAppBar/>
 <Routes>
  <Route path='/Home'  element={<Home/>}/>
  <Route path='/Services' element={<Services/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Registration' element={<Registration/>}/>

 </Routes>
    </div>    
}
export default App;
