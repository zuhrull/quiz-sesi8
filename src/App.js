// import logo from './logo.svg';
// import './App.css';
import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import {} from 'react-bootstrap';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
       <Content />
      </div>
      <Footer />
    </>
  );
}

export default App;
