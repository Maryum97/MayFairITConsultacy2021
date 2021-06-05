import React from 'react';

function InfoCard(props) {
    return (
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
                <img src={props.icon}></img>
                <br></br>
                <h3 className="mb-0 text-center">{props.title}</h3>
                <br></br>
                <p className="card-text mb-auto text-center">{props.text}</p>
            </div>
        </div>
    )
}

export default InfoCard;