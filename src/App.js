import HomePage from './pages/HomePage';

import React from 'react';

const objectData = [
  {name:'Javascript', price: 500},
  {name:'PHP', price: 3},
  {name:'Phyton', price: 399}
]


function Test() {
  const [objectsToShow, setToShow] = React.useState(objectData)

  const compare = (a, b, ascendingOrder) => {
    if (a < b) {
      return ascendingOrder ? -1 : 1;
    }
    if (a > b) {
      return ascendingOrder ? 1 : -1;
    }
    return 0;
  }

  const handleChange = (value) => {
    if(value === 'none'){
        setToShow([...objectData])
    } else {
      let toType, toAscending
      switch(value){
        case 'ascending' : toType = true; toAscending = true; break;
        case 'descending' : toType = true; toAscending = false; break;
        case 'high' : toType = false; toAscending = true; break;
        case 'low' : toType = false; toAscending = false; break;
        default: console.log('Please choose again')
      }
      let current = [...objectData]
      current.sort((a, b) => toType ?
            compare(a.name, b.name, toAscending)
            :
            compare(a.price, b.price, toAscending))
      setToShow([...current])
    }
  }
  return(
    <div>
    <select onChange={(e) => handleChange(e.target.value)}>
      <option value="none">Default</option>
      <option value="ascending">Alphabetically, A-Z</option>
      <option value="descending">Alphabetically, Z-A</option>
      <option value="high">Low to high</option>
      <option value="low">High to low</option>
    </select>
    {objectsToShow.map(elem => <p key={elem.name}>{elem.name} {elem.price}</p>)}
    </div>
  )
}


function App() {
  return (
    <>
        <HomePage/>
        {/* <Test/> */}
    </>
  );
}

export default App;
