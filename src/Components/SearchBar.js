import "../Styles/styles-Search.css";
import React, { useState } from "react";

const endpointAutoComplete = `https://api.giphy.com/v1/gifs/search/tags?api_key=XWXG7h959cOi8ufMXBZYhfCCHHXR69J3&limit=5&q=`;
const endpointSearch = `https://api.giphy.com/v1/gifs/search?api_key=XWXG7h959cOi8ufMXBZYhfCCHHXR69J3&limit=15&q=`;

export default function SearchBar(props) {
  const handleAutocomplete = async (event) => {
    props.setInputText(event.target.value);
    console.log(event.target.value);
    const res = await fetch(endpointAutoComplete + event.target.value);
    const resultados = await res.json();
    props.setText(event.target.value);
    props.setResults(resultados.data);
    setIsOpen(true);
  };

  const handleSearch = async (text) => {
    props.setLoading(true);
    const res = await fetch(endpointSearch + text);
    const resultados = await res.json();
    props.setGifs(resultados.data);
    props.setButton(resultados.data);
    props.setLoading(false);
    props.setInputText("");
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={`App ${props.isDarkMode ? "dark" : "light"}`}>
      <div className="Search-bar">
        <input
          type="text"
          placeholder="Buscar GIF"
          value={props.inputText}
          onChange={handleAutocomplete}
        />
        <button
          type="submit"
          className="searchBar-input-button"
          onClick={() => {
            handleSearch(props.text);
          }}
        >
          <img src="../Images/icon-search.svg" alt="search-icon" />
        </button>
        <div className="listing">
          {isOpen &&
            props.results.map((r) => {
              return (
                <div
                  className={`listItem ${props.isDarkMode ? "dark" : "light"}`}
                >
                  <li
                    className="list"
                    href="#"
                    onClick={() => {
                      handleSearch(r.name);

                      console.log(r.name);
                    }}
                  >
                    <img
                      src="../Images/icon-search-list.svg"
                      alt="search-icon"
                      className="list-image"
                    />
                    <div className="list-text">{r.name}</div>
                  </li>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
