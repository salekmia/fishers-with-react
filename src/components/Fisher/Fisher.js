import React from 'react';

const Fisher = (props) => {
    const {name, img, age, category, nationality, salary, fb, insta} = props.fisher
    return (
        <div className="col">
            <div className="card h-100 border-0 shadow-lg pt-2">
            <img src={img} className="rounded-circle me-auto ms-auto" width="120px" height="120px" alt="..."/>

            <div className="card-body">
                <h4 className="card-title text-center">{name}</h4>
                <div className="d-flex justify-content-between">
                    <p className="card-text">Age: <span className="fw-bold">{age}</span></p>
                    <p className="card-text">Category: <span className="fw-bold">{category}</span></p>
                </div>

                <div className="d-flex justify-content-between">
                    <p className="card-text">Nationality: <span className="fw-bold">{nationality}</span></p>
                    <p className="card-text">Salary: <span className="fw-bold">${salary}</span></p>
                </div>

                    {/* Social icon link */}
                <div className="d-flex text-center justify-content-center m-0 p-0">
                    <li className="mx-2 px-2" style={{listStyle: 'none'}}><a className="fs-5 text-secondary" href={fb}><i className="fab fa-facebook-f"></i></a></li>

                    <li className="mx-2 px-2" style={{listStyle: 'none'}}><a className="fs-5 text-secondary" href={insta}><i className="fab fa-instagram"></i></a></li>
                </div>

                    {/* Button */}
                <div className="d-flex justify-content-center my-4">
                    <button onClick={() => props.hireBtn(props.fisher)} className="btn btn-outline-secondary"><i className="far fa-heart"></i> Hire Me</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Fisher;