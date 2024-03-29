// Chart
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const DashboardGraphic = ({ graphicType }) => {
    // Bar Graphic
    const labelsBar = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const dataBar = {
        labels: labelsBar,
        datasets: [
            {
                label: 'Acessos',
                data: labelsBar.map((() => Math.floor(Math.random() * 100))),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                borderColor: 'blue',
                borderWidth: 1,
                categoryPercentage: 0.8,
                barPercentage: 1,
            },
            {
                label: 'Formulários',
                data: labelsBar.map((() => Math.floor(Math.random() * 100))),
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                borderColor: 'green',
                borderWidth: 1,
                categoryPercentage: 0.8,
                barPercentage: 1,
            },
        ],
    };

    const optionsBar = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: 'Dataset',
            },
        },
    };

    // Line Graphic
    const labelsLine = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const dataLine = {
        labels: labelsBar,
        datasets: [
            {
                label: 'Projetos',
                data: labelsLine.map((() => Math.floor(Math.random() * 10))),
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                borderColor: 'green',
                borderWidth: 1,
            },
        ],
    };

    const optionsLine = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };

    return (
        <>
            {graphicType === "bar" ? (
                <Bar options={optionsBar} data={dataBar} />
            ) : (
                graphicType === "line" ? (
                    <Line options={optionsLine} data={dataLine} />
                ) : (
                    <div>Nenhum tipo de formulário válido fornecido.</div>
                )
            )}
        </>
    )
}

export default DashboardGraphic