import React, { useEffect, useState } from "react";
import Personaje from "./Personaje";
import Pagination from "./Pagination";
import "./Home.css";
import Buscar from "./Buscar";
import Filtro from "./Filtro";

function Home() {
  const paginaInicial = "https://rickandmortyapi.com/api/character";
  const [personajes, setPersonajes] = useState([]);
  const [info, setInfo] = useState();
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchCharacters = (url) => {
    try {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setPersonajes(data.results);
          setInfo(data.info);
        });
    } catch (error) {
      console.log(error);
    }
  };

  //search personaje
  const searchPersonaje = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPersonajes(data.results);
        setInfo(data.info);
        setMostrarTodos(true);
      })
      .catch((error) => console.log(error));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const personaje = document.getElementById("personaje").value;
    const url = `https://rickandmortyapi.com/api/character/?name=${personaje}`;
    searchPersonaje(url);
  };

  const handleNextPage = () => {
    try {
      fetchCharacters(`${info.next}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePrevPage = () => {
    fetchCharacters(`${info.prev}`);
  };

  useEffect(() => {
    try {
      setTimeout(() => {
      setLoading(false);
      }, 1000);
      
      fetchCharacters(paginaInicial);
    } catch (error) {
      
    }
  }, []);

  // const handleMostrarTodos = () => {
  //   setMostrarTodos(true);
  // }

  function BotonMostrarTodos() {
   
      return (
        <div className="container mt-4 align-items-center">
          <row className="row mt-4 justify-content-center align-items-center g-2">
            <Filtro></Filtro>
            <button
              className="btn btn-primary"
              onClick={() => setMostrarTodos(true)}
            >
              Mostrar todos
            </button>
          </row>
        </div>
      );

  }

  function MostrarListado() {
    return (
      <div className="container mt-4">
        <Filtro></Filtro>
        <Pagination
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
        />


        <div className="row justify-content-center align-items-center g-2">
          {personajes?.map((personaje) => (
            <Personaje
              key={personaje.id}
              id={personaje.id}
              name={personaje.name}
              image={personaje.image}
              species={personaje.species}
              status={personaje.status}
              gender={personaje.gender}
              url={personaje.url}
              loading={loading}
            />
          ))}
        </div>
        <Pagination
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
        />
      </div>
    );
  }

   
  

  return (
    <>
      <Buscar handleSearch={handleSearch}></Buscar>
        <MostrarListado></MostrarListado>
    </>
  );
}

export default Home;
