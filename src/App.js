import logo from './logo.svg';
import './App.css';
import ClassBasedComponent from './components/classBasedComponent';
import FunctionBasedComponent from './components/FunctionBasedComponent';

function App() {
  return (
    <div className="App">
      <ClassBasedComponent />
      <FunctionBasedComponent />
    </div>
  );
}

export default App;
