import './App.css';
import InfiniteSlider from './components/InfiniteSlider';

function App() {
  return (
    <div >
      <h1 className='title'>infinite slider</h1>
      <br />
      <InfiniteSlider>
        <li className="item">
          1
        </li>
        <li className="item">
          2
        </li>
        <li className="item">
          3
        </li>
        <li className="item">
          4
        </li>
        <li className="item">
          5
        </li>
        <li className="item">
          6
        </li>
        <li className="item">
          7
        </li>
        <li className="item">
          8
        </li>
        <li className="item">
          9
        </li>
        <li className="item">
          10
        </li>
        <li className="item">
          11
        </li>
      </InfiniteSlider>
    </div>
  );
}

export default App;
