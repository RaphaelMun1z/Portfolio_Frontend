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
import { Line } from 'react-chartjs-2';

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

// Hooks
import { useState, useEffect } from 'react';

const DashboardGraphic = ({ projectsData }) => {
    const [projects, setProjects] = useState()

    useEffect(() => {
        if (projectsData) {
            setProjects(groupDataByMonth(projectsData))
        }
    }, [projectsData])

    const groupDataByMonth = (data) => {
        const groupedData = {
            Janeiro: 0,
            Fevereiro: 0,
            Março: 0,
            Abril: 0,
            Maio: 0,
            Junho: 0,
            Julho: 0,
            Agosto: 0,
            Setembro: 0,
            Outubro: 0,
            Novembro: 0,
            Dezembro: 0
        }

        try {
            data.forEach(entry => {
                const month = new Date(entry.createdAt).getMonth();
                const monthName = Object.keys(groupedData)[month];
                groupedData[monthName]++;
            });
        } catch (error) {
            console.log(error)
        }

        return Object.values(groupedData);
    }

    const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Projetos',
                data: projects,
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                borderColor: 'green',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };

    return (
        <Line options={options} data={data} />
    )
}

export default DashboardGraphic