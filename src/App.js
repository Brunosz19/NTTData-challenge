import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState()
  
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=15")
      .then((response) => setData(response.data.results))
      .catch((error) => console.log(error))
  }, []);

  return (
    <div>
      <div style={{ display: "flex", gap: "35px" }}>
        <h1>Nombre</h1>
        <h1>Apellido</h1>
        <h1>Edad</h1>
        <h1>Genero</h1>
        <h1>Email</h1>
        <h1>Nacionalidad</h1>
        <h1>Foto</h1>
      </div>
      <div style={{ display: "flex", gap: "35px" }}>
        <h1>{data ? data[0].name.first : null}</h1>
        <h1>Apellido</h1>
        <h1>Edad</h1>
        <h1>Genero</h1>
        <h1>Email</h1>
        <h1>Nacionalidad</h1>
        <h1>Foto</h1>
      </div>
    </div>
  );
}

export default App;
