// import React, { useState, useEffect } from 'react';
// import { Chart as ChartJS, BarElement } from 'chart.js/auto';
// import { Bar } from 'react-chartjs-2';

// ChartJS.register(
//   BarElement,
// );

// const BarChart = () => {
//   const [chart, setChart] = useState({});
//   const [coins, setCoins] = useState([]);

//   const coinIds = ['bitcoin', 'ethereum', 'cardano'];

//   const apiKey = '6303b0c3-fa99-45cc-9b0c-cca70a6f0398';

//   useEffect(() => {
//     const fetchCoins = async () => {
//       const coinPromises = coinIds.map((id) => {
//         return fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${id}`, {
//           headers: {
//             'Content-Type': 'application/json',
//             'X-CMC_PRO_API_KEY': `${apiKey}`,
//           },
//         })
//           .then((response) => {
//             if (response.ok) {
//               return response.json().then((json) => {
//                 return json.data[id].quote.USD;
//               });
//             } else {
//               throw new Error('Failed to fetch coin data');
//             }
//           })
//           .catch((error) => {
//             console.log(error);
//             return null;
//           });
//       });

//       try {
//         const coinsData = await Promise.all(coinPromises);
//         setCoins(coinsData.filter((coin) => coin !== null));
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchCoins();
//   }, [apiKey, coinIds]); 

//   const data = {
//     labels: coins.map((coin) => coin.name),
//     datasets: [
//       {
//         label: 'Market Cap',
//         data: coins.map((coin) => coin.market_cap),
//         backgroundColor: [
//           'rgba(255, 255, 255, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     maintainAspectRatio: false,
//     scales: {},
//     legend: {
//       labels: {
//         fontSize: 25,
//       },
//     },
//   };

//   return (
//     <div>
//       <Bar data={data} height={400} options={options} />
//     </div>
//   );
// };

// export default BarChart;