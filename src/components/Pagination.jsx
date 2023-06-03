import React from 'react'

function Pagination({ handleNextPage, handlePrevPage}) {
    

  return (
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center mt-2 mb-4">
          <li className="page-item" >
            <button className="page-link" tabIndex={-1} aria-disabled="true" onClick={handlePrevPage}>
              Previous
            </button>
          </li>
     
          <li className="page-item" >
            <button className="page-link" onClick={handleNextPage}>
              Next
            </button>
          </li>
        </ul>
      </nav>
  )
}

export default Pagination