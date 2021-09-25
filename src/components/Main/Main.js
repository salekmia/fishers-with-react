import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import Summary from '../Summary/Summary';

const Main = () => {
    const [players, setPlayers] = useState([])
    const [summary, setSummary] = useState([])

    useEffect(() => {
        fetch('./players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])

    // event handler
    const hireBtn = (player) => {
        if(summary.includes(player)) {
            alert('Alredy added!')
        } else {
            const newSummary = [...summary, player]
            setSummary(newSummary)
        }
    }

    let total = 0
    for(const element of summary) {
        total = total + parseInt(element.salary)
    }

    return (
        <div className="row">
            <div className="col-md-8">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        players.map(player => <Player player={player} key={player.id} hireBtn={hireBtn}></Player>)
                    }
                </div>
            </div>
            
            <div className="col-md-4">
                <div className="border p-4 rounded ms-4 sticky-top" style={{ width: "300px", height: "350px", overflow: "scroll"}}>
                    <h3>Players: {summary.length}</h3>
                    <h4>Total Salary: {total}</h4>
                    {
                        summary.map(player => <Summary player={player} key={player.id}></Summary>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Main;