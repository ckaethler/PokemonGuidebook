import React from 'react';
import { Bar } from 'react-chartjs-2'

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const PokemonInfo = ({pokemon}) => {
    const labels = pokemon.stats.map(info => {
        return capitalize(info.stat.name);
    });

    const data = pokemon.stats.map(info => {
        return info.base_stat;
    });

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: "Base Statistics",
                backgroundColor: '#a89cac',
                data: data,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
            }
        ],
    }

    return (
        <div className="Aligner">
            <Bar 
                className="Aligner-item" 
                data={chartData} 
                width={300} 
                height={300}
            />
        </div>
    )
}

export default PokemonInfo;