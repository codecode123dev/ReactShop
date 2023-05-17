import HomePage from './pages/HomePage';
import React from 'react';
import Account from './components/Account';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


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
    <Router>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/home">Account</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/account">
          <Account />
        </Route>
        <Route path="/products/:productId">
          <ProductDetail />
        </Route>
      </Switch> */}
        {/* <HomePage/> */}
        {/* <Test/> */}
        <div className="App">
        < HomePage />
        </div>
    </Router>
  );
}

export default App;

// async function getFile() {
//   let myPromise = new Promise(function(resolve) {
//     let req = new XMLHttpRequest();
//     req.open('GET', "mycar.html");
//     req.onload = function() {
//       if (req.status == 200) {
//         resolve(req.response);
//       } else {
//         resolve("File not Found");
//       }
//     };
//     req.send();
//   });
//   document.getElementById("demo").innerHTML = await myPromise;
// }
