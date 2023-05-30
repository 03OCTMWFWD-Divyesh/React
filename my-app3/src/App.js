import './App.css';
import Video from './component/Video';
import Audio from './component/Audio';

function App() {
  return (
    <div className="App">
        <div className='App-header'>
          Hello React
          <Video />
          <Audio></Audio>
        </div>
        
    </div>
  );
}

export default App;
