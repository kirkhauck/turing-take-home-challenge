import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Article from '../Article/Article';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Header from '../Header/Header';
import Home from '../Home/Home';

const App = () => {
  const [news, setNews] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState({});
  const [error, setError] = useState('');

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/:articleId' element={<Article />} />
        <Route path='/*' element={<ErrorMessage />} />
      </Routes>
    </>
  );
}

export default App;
