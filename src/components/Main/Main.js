import React, { useEffect, useState } from 'react';

const Main = () => {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        fetch('./players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])

    return (
        <div className="row">
            <div className="col-md-8">
                <h1>I am from player</h1>
                {
                    players.map(player => console.log(player))
                }
            </div>
            <div className="col-md-4">
                <h1>I am from summary</h1>
            </div>
        </div>
    );
};

export default Main;