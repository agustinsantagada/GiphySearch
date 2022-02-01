import "../Styles/styles.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Resultados from "./Resultados";
import SearchBar from "./SearchBar";

const endpointTrending = `https://api.giphy.com/v1/gifs/trending?api_key=XWXG7h959cOi8ufMXBZYhfCCHHXR69J3&limit=15&q=`;

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [results, setResults] = useState([]);
  const [gifs, setGifs] = useState([]);
  const [gifsTrend, setGifsTrend] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [button, setButton] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleTrending = async () => {
    const res = await fetch(endpointTrending);
    const resultados = await res.json();
    setGifsTrend(resultados.data);
  };

  useEffect(() => {
    handleTrending();
  }, []);

  return (
    <div className={isDarkMode ? "App-dark" : "App"}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <SearchBar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        results={results}
        setResults={setResults}
        gifs={gifs}
        setGifs={setGifs}
        text={text}
        setText={setText}
        loading={loading}
        setLoading={setLoading}
        gifsTrend={gifsTrend}
        setGifsTrend={setGifsTrend}
        button={button}
        setButton={setButton}
        inputText={inputText}
        setInputText={setInputText}
      />
      <Resultados
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        results={results}
        setResults={setResults}
        gifs={gifs}
        setGifs={setGifs}
        text={text}
        setText={setText}
        loading={loading}
        setLoading={setLoading}
        gifsTrend={gifsTrend}
        setGifsTrend={setGifsTrend}
        button={button}
        setButton={setButton}
        inputText={inputText}
        setInputText={setInputText}
      />
    </div>
  );
}
