export const chartConfig = () => {
  const COLOURS = colours();

  const chartColours = [
    COLOURS.purple[800],
  ]


  // let backgroundColours = [];
  // let borderColours = [];
  // chartColours.forEach((colour) => {
  //   backgroundColours.push(colour);
  //   borderColours.push(colour);
  // });


  const getBaseOptions = (): Object => {
    return {
      backgroundColor: [
        'rgba(254,243,127, 0.4)'
      ],
      borderColor: [
        'rgb(254, 243, 127)'
      ],
      borderWidth: 2,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          ticks: {
            color: "rgb(255,255,255)", 
            font: {
              size: 18,
            },
          },
          beginAtZero: true
        },
        x: {
          ticks: {
            color: "rgb(255,255,255)",
            font: {
              size: 14
            },
          }
        }
      },
      responsive: false
    };
  };

  return {
    getBaseOptions
  }
}
