import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Article from '../Article/Article';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Header from '../Header/Header';
import Home from '../Home/Home';

const App = () => {
  const [news, setNews] = useState({});
  const [selectedArticle, setSelectedArticle] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home news={news} />} />
        <Route path='/:articleId' element={<Article selectedArticle={selectedArticle} />} />
        <Route path='/*' element={<ErrorMessage errorMessage={errorMessage} />} />
      </Routes>
    </>
  );
}

export default App;
