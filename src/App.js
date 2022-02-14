import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './App.css';
import Navbar from './components/navbar';
import PageRender from './components/pageRender';

function App() {
const [page,setPage]=useState(1)
  function handlePage(pageNumber){
  
    setPage(pageNumber)
    console.log(page)
  }
  return (
    <div className="App">
      <Navbar page={(page)=>handlePage(page)}/>
      <PageRender pageNum={page}/>
    </div>
  );
}

export default App;
