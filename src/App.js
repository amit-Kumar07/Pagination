

import Pagination from './Pagination';

function App() {
  const items =  ['Item1', 'Item2', 'Item3', 'Item4', "Item5", "Another Item", "Antoher Item2"]
  return (
    <div>
     <Pagination items={items} itemsPerPage={2}/>
    </div>
  );
}

export default App;
