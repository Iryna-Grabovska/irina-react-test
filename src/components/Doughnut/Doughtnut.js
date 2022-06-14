import React from 'react';
import { Doughnut } from 'react-chartjs-2';
// import { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { UserData } from 'components/data';
import s from './Doughnut.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
  labels: [],
  // UserData.map(data => data.userTransaction),
  datasets: [
    {
      label: 'userLost',
      data: UserData.map(data => data.userLost),

      backgroundColor: [
        ' #FED057',
        '#FFD8D0',
        '#FD9498',
        '#C5BAFF',
        '#4A56E2',
        '#81E1FF',
        '#24CCA7',
        '#00AD84',
      ],

      borderWidth: 0,
    },
  ],
};

export const options = {
  plugins: {
    legend: {
      position: 'right',
      rtl: false,
      labels: {
        pointStyle: 'rect',
        usePointStyle: true,
        padding: 20,
        font: {
          family: 'Montserrat',
          size: 16,
          weight: 400,
        },
      },
    },
  },
};

export function DoughnutChart() {
  return (
    <div className={s.sectionDoughnut}>
      <h2 className={s.title}>Statistics</h2>
      <div className={s.doughnut}>
        <Doughnut
          // options={options}
          data={data}
        />
      </div>
    </div>
  );
}

/// export const data = {
//   const [userData, setUserData] = useState({
//     labels: UserData.map((data) => data.year)
//     datasets: [
//       {
//         label: "Users Gained",
//         data: UserData.map((data) => data.userGain),
//         backgroundColor: [
//           "rgba(75,192,192,1)",
//           "#ecf0f1",
//           "#50AF95",
//           "#f3ba2f",
//           "#2a71d0",
//         ],
//         borderColor: "black",
//         borderWidth: 2,
//       },],
//   }),
// }
// labels: [
//   'Основные расходы',
//   'Продукты',
//   'Машина',
//   'Забота о себе',
//   'Забота о детях',
//   'Товары для дома',
//   'Образование',
//   'Досуг',
//   'Другие расходы',
// ],
// datasets: [
//   {
//     label: '# of Votes',
//     data: [8700.0, 3800.74, 1500.0, 800.0, 2208.5, 300.0, 1230.0, 610.0],
//     backgroundColor: [
//       ' #FED057',
//       '#FFD8D0',
//       '#FD9498',
//       '#C5BAFF',
//       '#4A56E2',
//       '#81E1FF',
//       '#24CCA7',
//       '#00AD84',
//     ],
//     borderWidth: 0,
//   },
// ],
