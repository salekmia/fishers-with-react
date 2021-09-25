import React, { useEffect, useState } from 'react';
import Fisher from '../Fisher/Fisher';
import Summary from '../Summary/Summary';

const Main = () => {
    const [fishers, setPlayers] = useState([])
    const [summary, setSummary] = useState([])

    useEffect(() => {
        fetch('./fishers.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])

    // event handler
    const hireBtn = (fisher) => {
        if(summary.includes(fisher)) {
            alert('Alredy added!')
        } else {
            const newSummary = [...summary, fisher]
            setSummary(newSummary)
        }
    }

    // total salary count
    let total = 0
    for(const element of summary) {
        total = total + parseInt(element.salary)
    }

    return (
        <div className="row">
            <div className="col-md-8">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        fishers.map(fisher => <Fisher fisher={fisher} key={fisher.id} hireBtn={hireBtn}></Fisher>)
                    }
                </div>
            </div>
            
            <div className="col-md-4">
                <div className="border p-4 rounded ms-4 sticky-top" style={{ width: "300px", height: "350px", overflow: "scroll"}}>
                    <h3>Fishers: {summary.length}</h3>
                    <h4>Total Salary: ${total}</h4>
                    {
                        summary.map(fisher => <Summary fisher={fisher} key={fisher.id}></Summary>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Main;