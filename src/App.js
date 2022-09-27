import { useState } from 'react';
import './App.css';

function App() {
  const list = [
    'Samuel',
    'James',
    'John',
    'Jhon',
    'Amanda',
    'Sandra',
    'Tina',
    'Queen',
    'Grace',
    'Daniel',
    'Arthur',
    'Esther'
  ]

  // decleared state
  const [filterList, setFilterList] = useState(list)

  // change event
  const handleSearch = (event) => {
    
    if (event.target.value === "") {

      setFilterList(list)
      
      return;

    }
    
    const filteredValues = list.filter(
    
      (item) =>
        
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
      
    );

    setFilterList(filteredValues);

  }
  
  return (

    <div className="App">

      <h4> search: <input name='search' type="text" onChange={handleSearch} /> </h4>
      
      {filterList && filterList.map((item, index) => (

        <div key={index}>{item}</div>

      ))}
      
    </div>

  );

}

export default App;
