import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Component/Header'
import Footer from './Component/Footer'

function App() {
 

  return (
    <div className="App">
       {/* header */}
        <Header></Header>
       {/* header end*/}


      <Outlet></Outlet>

      {/* footer  */}
        <Footer></Footer>
      {/* footer end */}
    </div>
  )
}

export default App
