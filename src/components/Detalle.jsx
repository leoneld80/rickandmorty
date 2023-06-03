import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./Detalle.module.css";

function Detalle() {
  const { id } = useParams();
  const [personaje, setPersonaje] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPersonaje(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

function totalEpisodios() {
  let total = personaje.episode?.length;
  return total
}


//TODO: FALTA BOTON VOLVER ATRAS, USAR ROUTER-DOM
return (
    //detalles personaje
    <div className="row mt-1 justify-content-center align-items-center g-2">
      <div className="col-6">
        <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={personaje.image}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{personaje.name}</h5>
                <p className="card-text">Status: {personaje.status}</p>
                <p className="card-text">Species: {personaje.species}</p>
                <p className="card-text">Type: {personaje?.type}</p>
                <p className="card-text">Origin: {personaje?.origin?.name}</p>
                <p className="card-text">Location: {personaje?.location?.name}</p>
                <p className="card-text">Total Episodes: {totalEpisodios()}</p>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detalle;
