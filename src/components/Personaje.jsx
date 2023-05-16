import React, { useEffect } from "react";
import { BsCircleFill } from "react-icons/bs";
import classes from "./Personaje.module.css";
import { Link } from "react-router-dom";

function Personaje(props) {
  const { id, name, image, species, status, loading } = props;

function Loader () {  

  return (
    <div className="row justify-content-center align-items-center g-2">
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>

    </div>
    </div>
  );
}



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
      {loading ? <Loader></Loader> : 
      <Link to={`/personaje/${id}`}>
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
      </Link>
    }
    </div>
  );
}

export default Personaje;
