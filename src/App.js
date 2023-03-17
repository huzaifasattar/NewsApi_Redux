import './App.css';
// import ComplexGrid from './commponents/card/card';
import PaginationRounded from './commponents/pagination/pagination';
import SearchList from './commponents/searchList/searchList';

function App() {
  return (
    <div className="App">
      <SearchList />
      {/* <ComplexGrid />   */}
      <PaginationRounded />
      <h1></h1>
    </div>
  );
}

export default App;
