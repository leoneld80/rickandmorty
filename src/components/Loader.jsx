import React from 'react'
import classes from "./Loader.module.css";


function Loader() {
  return (
    <div className='container-fluid mt-4 mb-4'>
          <div className="row justify-content-center align-items-center g-2">
            <div className="spinner-border text-light" role="status">
              <span className={`visually-hidden ${classes.loading}`}>Loading...</span>
      
          </div>
          </div>
          </div>

    )
}

export default Loader