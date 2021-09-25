import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center">
                <div>
                    <h1>Get Famouse <span className="text-secondary">Fisher</span> Man</h1>
                    <h4>Budget: <span className="fs-1">20</span> milions</h4>
                </div>
                <img style={{height: '160px'}} className="img-fluid" src="./players/header-img.jpg" alt="" />
            </div>
            <hr />
        </div>
    );
};

export default Header;