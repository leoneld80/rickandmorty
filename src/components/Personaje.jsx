import React from "react";
import { BsCircleFill } from "react-icons/bs";
import classes from "./Personaje.module.css";

function Personaje(props) {
  const { id, name, image, species, status, gender, url } = props;

  // function NoEncontrado() {
  //   return (
      
       

  //     <div className="row justify-content-center align-items-center g-2">
  //       <div className="col-12">
  //         <h1 className="text-center text-light">No se</h1>
  //       </div>
  //     </div>
  //   );
  // }


  return (


    <div className="
    col-4 
    align-items-center
    justify-content-center
    mb-4
    mt-4
    "
    >
      <div className="card">
        <div className="card-body">
          <div className="row justify-content-center align-items-center g-2">
            <div className="col-12">
              <span>
                {status === "Alive" ? (
                  <BsCircleFill style={{ color: "green" }}></BsCircleFill>
                ) : status === "Dead" ? (
                  <BsCircleFill style={{ color: "red" }}></BsCircleFill>
                ) : (
                  <BsCircleFill style={{ color: "gray" }}></BsCircleFill>
                )}
              </span>
            </div>
          </div>
          <img src={image} className="card-img-top" alt="..." />
          <h3 className="align-items-center">{name}</h3>
          <ul className="list-group list-group-flush align-items-center">
            <li className="list-group-item">{species}</li>
            <li className="list-group-item">{gender}</li>
            <button type="button" className="btn btn-primary">
              Ver más
            </button>
          </ul>
        </div>
      </div>

    </div>
  

  );
}

export default Personaje;
