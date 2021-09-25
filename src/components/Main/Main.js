import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';

const Main = () => {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        fetch('./players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])
    console.log(players)
    return (
        <div className="row">
            <div className="col-md-8">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        players.map(player => <Player player={player} key={player.id}></Player>)
                    }
                </div>
            </div>
            <div className="col-md-4">
                <h1>I am from summary</h1>
            </div>
        </div>
    );
};

export default Main;