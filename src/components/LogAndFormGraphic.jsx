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
import { Bar } from 'react-chartjs-2';

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

const LogAndFormGraphic = ({ logData, formData }) => {
    const [logs, setLogs] = useState()
    const [forms, setForms] = useState(formData)

    useEffect(() => {
        if (logData) {
            setLogs(groupDataByMonth(logData))
        }
    }, [logData])

    useEffect(() => {
        if (formData) {
            setForms(groupDataByMonth(formData))
        }
    }, [formData])

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
                label: 'Acessos',
                data: logs,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                borderColor: 'blue',
                borderWidth: 1,
                categoryPercentage: 0.8,
                barPercentage: 1,
            },
            {
                label: 'Formulários',
                data: forms,
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                borderColor: 'green',
                borderWidth: 1,
                categoryPercentage: 0.8,
                barPercentage: 1,
            },
        ],
    };

    const options = {
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

    return (
        <Bar options={options} data={data} />
    )
}

export default LogAndFormGraphic