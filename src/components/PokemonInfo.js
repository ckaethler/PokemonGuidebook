import React from 'react';
import { Polar } from 'react-chartjs-2'

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const PokemonInfo = ({pokemon}) => {
    console.log(pokemon);
    const labels = pokemon.stats.map(info => {
        return capitalize(info.stat.name);
    });

    const data = pokemon.stats.map(info => {
        return info.base_stat;
    });

    let chartData = {
        label: "Base Stats",
        labels: labels,
        datasets: [
            {
                label: "Base Stats",
                data: data,
                backgroundColor: [
                    "#FF298B",
                    "#E825E0",
                    "#CC36FF",
                    "#8225E8",
                    "#5529FF",
                    "#545EE8",
                ],
            }
        ],
    }

    return (
        <div className="Aligner">
            <Polar className="Aligner-item" data={chartData} width={300} height={250}/>
        </div>
    )
}

export default PokemonInfo;