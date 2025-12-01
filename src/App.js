import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import ButtonMsg from "./components/ButtonMsg";
import "./App.css";

function App() {

  
  const [randomBg, setRandomBg] = useState("");

  useEffect(() => {
    const bg = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setRandomBg(bg);
  }, []);


  const artists = [
    ["Travis Scott", "Amerykański raper, producent muzyczny i projektant mody."],
    ["21 Savage", "Brytyjsko-amerykański raper znany z surowego stylu i storytellingu."],
    ["Queen", "Legendarna brytyjska grupa rockowa z Freddie’em Mercurym."],
    ["Taco Hemingway", "Polski raper i autor tekstów z dużym wpływem na młode pokolenie."],
    ["Quebonafide", "Polski raper znany z oryginalnego stylu i eksperymentalnych projektów."],
    ["Eminem", "Ikona rapu z Detroit, jeden z najlepiej sprzedających się artystów wszech czasów."],
    ["Mata", "Młody polski raper i autor hitów w nurcie pop-rap."],
    ["Drake", "Kanadyjski raper i piosenkarz, gwiazda globalnej sceny muzycznej."]
  ];


  const [searchValue, setSearchValue] = useState("");


  const funFacts = [
    "Travis Scott znany jest z organizowania spektakularnych koncertów z efektami wizualnymi.",
    "21 Savage posiada własną linię ubrań o nazwie 'Issa' w hołdzie swojemu pseudonimowi.",
    "Queen sprzedało ponad 300 milionów albumów na całym świecie.",
    "Taco Hemingway był dziennikarzem muzycznym przed rozpoczęciem kariery rapera.",
    "Quebonafide często eksperymentuje z różnymi gatunkami muzycznymi i wizerunkiem sceny.",
    "Eminem zdobył 15 nagród Grammy w ciągu swojej kariery.",
    "Mata jest laureatem wielu nagród Fryderyk dla młodych artystów.",
    "Drake ma ponad 200 milionów subskrybentów na Spotify w sumie ze wszystkimi utworami."
  ];

  const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];

  return (
    <div className="App" style={{ backgroundColor: randomBg }}>
      
      <Header title="Portal muzyczny" />

      <p className="fact-box">💡 {randomFact}</p>

      <ButtonMsg />

      <div className="search-box">
        <input
          type="text"
          placeholder="Szukaj artysty..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      <div className="card-container">
        {artists
          .filter((artist) =>
            artist[0].toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((artist, index) => (
            <Card key={index} title={artist[0]} description={artist[1]} />
          ))}
      </div>
    </div>
  );
}

export default App;

