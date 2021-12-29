
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Student from './Components/Student';
import Contact from './Components/Contact';
import { Condata } from './Components/Context';
import Addstudent from './Components/Addstudent';
import Home from './Components/Home';
import Update from './Components/Update';



function App() {
  return (


    <Condata>

      <Router>
        <div className="App">
          <Header />

          <Routes>

            <Route path='' element={<Home />} />
            <Route path='/student' element={<Student />}/>
            <Route path='*' element={<Home/>}/>
            
            <Route path='/contact' element={<Contact />} />
            <Route path='/student/des' element={<Addstudent />}>
              <Route path=':id' element={<Addstudent />} />

            </Route>
            <Route path='/student/update' element={<Update />}>
              <Route path=':id' element={<Update />} />

            </Route>


          </Routes>





        </div>
      </Router>
    </Condata>
  );
}

export default App;
