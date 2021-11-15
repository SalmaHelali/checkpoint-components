import './App.css';
import Contact from './comp/Address';
import FullName from './comp/FullName';
import ProfilePhoto from './comp/ProfilePhoto';
import './Css/style.css' ;

function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <FullName/>
      <address/> 
      <Contact/>
    </div>
  );
}

export default App;
