import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/episode").then((response) => {
      const respostaApi = response.data.results;
      setCharacter(respostaApi);
    });
  }, []); // Adicionei um array vazio para garantir que o efeito seja executado apenas uma vez, sem dependências.

  return (
    <div>
      <h1>List of episodes from rick and morty</h1>
      <ul>
        {character.map((episodio) => (
          <li key={episodio.name}>{episodio.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
