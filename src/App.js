import './App.css';
import CounterPage from './pages/CounterPage';

const App=()=> {
  return (
    <div className="App">
     <div>
      <h1 className='text-center text-light bg-success bg-success p-2 rounded-start m-2'>This is Counter App</h1>
     </div>
     <CounterPage/>
    </div>
  );
}

export default App;
