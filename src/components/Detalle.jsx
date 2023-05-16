import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detalle() {

  const { id } = useParams()
  const [personaje, setPersonaje] = useState({})


  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setPersonaje(data)
      })
      .catch((error) => console.log(error))
  }, [id])


  
  return (
    //detalles personaje
    <div className="row mt-1 justify-content-center align-items-center g-2">
      <div className="col-6">
        <div className="card">
          <div className="card-header">
            <h2>Detalles del personaje</h2>
          </div>
          <div className="card-body">
            <h5 className="card-title">{personaje.name}</h5>
            <img src={personaje.image} alt=""/>
            <p className="card-text">Especie: {personaje.species}</p>
            <p className="card-text">Estado: {personaje.status}</p>
           <p className="card-text">Origen: {personaje?.origin?.name}</p>
            <p className="card-text">Ultima ubicación conocida: {personaje?.location?.name}</p>



            {/* <p className="card-text">Ultima ubicación conocida: </p> */}
          </div>
        </div>
      </div>
    </div>

    )
}

export default Detalle;