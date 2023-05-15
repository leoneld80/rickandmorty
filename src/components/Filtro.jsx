import React from 'react'

function Filtro() {



  return (
    //filter badges
    <div className="col-12">
      <div className="row justify-content-center align-items-center g-2">
        <div className="col-12">
          <div className="row justify-content-center align-items-center g-2">
            <div className="col-12">
              <h1 className="text-center text-light">Filtrar por:</h1>
            </div>
          </div>
          <div className="row justify-content-center align-items-center g-2">
            <div className="col-12">
              <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <span class="badge rounded-pill  text-bg-light">Humano</span>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filtro