import { useState, useEffect } from "react";

function useStats(){
    const [stats, setStats] = useState(); 
    useEffect(() => {
        async function fetchData() {
        console.log('Fetching Data');
        const data = await fetch('https://covid19.mathdro.id/api').then(res =>
         res.json()
        );
        setStats(data);
        }
    fetchData();
    }, []);
    return stats;
}

function Stats() {
    const stats = useStats();
    if(!stats) return <p> loading... </p>
    //    console.log(stats);
    return (
    <div>
        <div className="statBlock">
            <h3>Confirmed:</h3>
            <span>{stats.confirmed.value}</span>
        </div>
        
        <div className="statBlock">
            <h3>deaths:</h3>
            <span>{stats.deaths.value}</span>
        </div>

        <div className="statBlock">
            <h3>recovered:</h3>
            <span>{stats.recovered.value}</span>
        </div>
    </div>
    )
}

export default function IndexPage() {
    return(
        <div>
        <Stats></Stats>
        </div>
    )
}