import React, { useState, useEffect } from "react";

function ButtonMsg() {
  const [name, setName] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("username");
    if (saved) setName(saved);
  }, []);

  const handleClick = () => {
    const newName = prompt("Podaj swoje imię:");
    if (newName) {
      localStorage.setItem("username", newName);
      setName(newName);
    }
  };

  return (
    <div className="user-box">
      {name && <p>Witaj ponownie, {name}!</p>}
      <button onClick={handleClick}>Przedstaw się</button>
    </div>
  );
}

export default ButtonMsg;
