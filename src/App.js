import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListStudentComponent from './components/ListStudentComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateStudentComponent from './components/CreateStudentComponent';

function App() {
  return (
    <div> 
      <Router>
        <div className="container">
          <HeaderComponent />
            <div className="container">
              <Routes>
                <Route exact path='/' Component={ListStudentComponent}></Route>
                <Route path='/students' Component={ListStudentComponent}></Route>
                <Route path='/add-student/:id' Component={CreateStudentComponent}></Route> 
                <Route path='/view-student/:id' Component={CreateStudentComponent}></Route>   
                {/* <Route path='/update-student' Component={CreateStudentComponent}></Route> */}
              </Routes>
            </div>
          <FooterComponent />
        </div> 
      </Router> 
    </div> 
  ); 
}

export default App;
