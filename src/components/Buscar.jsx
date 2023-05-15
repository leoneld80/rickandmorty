import React from 'react'

function Buscar({handleSearch, set}) {
  return (
      <div className="row mt-4 justify-content-center align-items-center g-2">
        <div className="col-6">
          <form onSubmit={handleSearch}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="personaje"
                placeholder="Buscar personaje"
              />
              <button className="btn btn-outline-secondary" type="submit">
                Buscar
              </button>
            </div>
          </form>
        </div>
        </div>


    )
}

export default Buscar