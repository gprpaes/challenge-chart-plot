export const options: Highcharts.Options = {
    title: {
      text: "",
    },
    chart:{
      height: 320,
      
    },
    xAxis: {
      categories: [],
      tickmarkPlacement: "on",
    },
    yAxis: {
      labels: { enabled: false },
      title:{text: null}
    },
  
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        marker: {
          symbol: "circle",
          radius: 7,
          lineWidth: 1,
        },
      },
    },
    credits: {
      enabled: false,
    },
    legend: {
      layout: "vertical",
      itemStyle: {
        textTransform: "capitalize",
      },
      align: "right",
      itemDistance: 100,
      verticalAlign: "top",
    },
    series: [
      {type: 'line', data: []},
    ],
  };