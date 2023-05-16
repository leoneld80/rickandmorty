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
    <div className={`col-3 ${classes.contenedor}`}>
      <div className={`${classes.cardpersonaje}`}>
        <div className="">
          <div className={classes.status}>
            <span>
              {status === "Alive" ? (
                <BsCircleFill style={{ color: "green" }}></BsCircleFill>
              ) : status === "Dead" ? (
                <BsCircleFill style={{ color: "red" }}></BsCircleFill>
              ) : (
                <BsCircleFill style={{ color: "gray" }}></BsCircleFill>
              )}
            </span>
            <img
              src={image}
              className={`${classes.cardimg}`}
              alt="..."
            />
          </div>
            <div className="">
              <div className={` ${classes.descripcion}`}>
                <h5 className="">{name}</h5>
                <p>{species}</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Personaje;
