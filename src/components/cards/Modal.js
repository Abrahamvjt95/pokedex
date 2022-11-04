import React from 'react'
import { Link } from 'react-router-dom';

export const Modal = ({id,title,content}) => {
  return (
    <div className="modal" tabindex="-1" id={id}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">{title}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>{content}</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary"><Link to={`/pokedetails/${id}`}>See Full Details</Link></button>
      </div>
    </div>
  </div>
</div>
  )
}
