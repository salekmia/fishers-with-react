import React from 'react';

const Player = (props) => {
    const {name, img, age, position, team, salary} = props.player
    return (
        <div className="col">
            <div className="card h-100 border-0 shadow">
            <img src={img} className="rounded-circle me-auto ms-auto" width="120px" height="120px" alt="..."/>
            <div className="card-body">
                <h4 className="card-title text-center">{name}</h4>
                <div className="d-flex justify-content-between">
                    <p className="card-text">Age: <span className="fw-bold">{age}</span></p>
                    <p className="card-text">Position: <span className="fw-bold">{position}</span></p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="card-text">Team: <span className="fw-bold">{team}</span></p>
                    <p className="card-text">Salary: <span className="fw-bold">{salary}</span></p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Player;