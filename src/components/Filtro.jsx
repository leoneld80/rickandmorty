import React, { useState } from "react";
import classes from "./Filtro.module.css";

function Filtro() {

const [ activo, setActivo ] = useState(false);
const [ option, setOption ] = useState("");

const filtrar = () => {
  console.log("filtrar");
}

  return (
    //filter badges
    <div className="col-12">
      <div className="row justify-content-center align-items-center g-2">
        <div className="col-12">
          <div className="row justify-content-center align-items-center g-2">
            <div className="col-12">
              <h1 className="text-center text-light">Filter by:</h1>
            </div>
          </div>
          <div className="row justify-content-center align-items-center g-2">
            <div className="col-12 ">
              <span class="badge rounded-pill  text-bg-light link" onChange={setOption}>Human</span>
              <span class="badge rounded-pill  text-bg-light link">Alien</span>
              <span class="badge rounded-pill  text-bg-light link">Humanoide</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filtro;
