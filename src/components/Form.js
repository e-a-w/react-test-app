import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState("");
  const [results, setResults] = useState([]);

  const getResults = () => {
    fetch(`https://www.swapi.tech/api/people/?name=${name}`)
      .then(res => res.json())
      .then(json => setResults(json.results))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getResults();
  }, [name]);

  return (
    <div id="form">
      <h3>Form</h3>
      <input
        onChange={e => setName(e.target.value)}
        type="text"
        placeholder="type here!"
      />
      <div id="result-container">
        {results?.map(result => {
          return (
            <p className="result" key={result.uid} data-testid="person">
              <Link to={`api/person/${result.uid}`}>
                {result.properties?.name}
              </Link>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Form;
