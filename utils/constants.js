export const countryData = [
  { name: "Kenya", value: 678, flag: "kenya.svg" },
  { name: "Uganda", value: 150, flag: "uganda.svg" },
  { name: "Ethiopia", value: 560, flag: "ethiopia.svg" },
  { name: "Tanzania", value: 360, flag: "tanzania.svg" },
  { name: "Rwanda", value: 150, flag: "rwanda.svg" },
];

export const sourceOfDocumentOptions = {
  chart: {
    type: "line",
    height: 350, // Increase height of the chart
  },
  title: {
    text: "",
  },
  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    title: {
      text: "",
    },
  },
  yAxis: {
    min: 0,
    tickInterval: 50,
    title: {
      text: "",
    },
    labels: {
      formatter: function () {
        return this.value; // Format y-axis labels
      },
    },
  },
  legend: {
    layout: "horizontal",
    align: "right",
    verticalAlign: "top", // Position the legend at the top
    floating: false, // Allow the legend to float
    y: 5, // Adjust vertical position
    itemMarginBottom: 10, // Space between legend items
  },
  plotOptions: {
    column: {
      grouping: true,
      pointPadding: 0, // Decrease the gap between bars
      borderWidth: 0,
      borderWidth: 0,
      borderRadius: 0,
    },
  },
  series: [
    {
      name: "By Hospital",
      data: [250, 150, 100, 130, 300, 50, 200, 190, 100, 70, 230, 60],
      color: "#39409A",
    },
    {
      name: "Recieved By Email",
      data: [150, 100, 200, 130, 90, 200, 170, 150, 250, 160, 100, 70],
      color: "#00B33C",
    },
    {
      name: "By Internal Team",
      data: [100, 40, 70, 30, 60, 100, 150, 150, 90, 40, 70, 30],
      color: "#F30808",
    },
    {
      name: "FTP Upload",
      data: [40, 100, 150, 70, 60, 180, 100, 140, 210, 210, 60, 50],
      color: "#4A87FF",
    },
  ],
};
export const documentIntegratedOption = {
  chart: {
    type: "column",
    height: 350, // Increase height of the chart
  },
  title: {
    text: "",
  },

  xAxis: {
    categories: ["1st Week", "2nd Week", "3rd week", "4th week", "5th week"],
    title: {
      text: "",
    },
    labels: {
      style: {
        fontSize: "10px", // Set your desired font size here
      },
    },
    gridLineWidth: 0,
  },
  yAxis: {
    min: 0,
    max: 800,
    title: {
      text: "",
    },
    tickInterval: 100,
    labels: {
      overflow: "justify",
      formatter: function () {
        return this.value; // Format y-axis labels
      },
    },
    gridLineWidth: 0,
    lineWidth: 1,
  },
  legend: {
    layout: "horizontal",
    align: "right",
    verticalAlign: "top",
    itemStyle: {
      fontWeight: "bold",
    },
    y: 5,
    itemMarginBottom: 10, // Space between legend items
  },
  plotOptions: {
    column: {
      grouping: true,
      pointPadding: 0, // Decrease the gap between bars
      borderWidth: 0,
      borderWidth: 0,
      borderRadius: 0,
    },
  },
  series: [
    {
      name: "Integrated",
      data: [500, 300, 130, 100, ""],
      color: "#3A7CFF",
    },
    {
      name: "Upload",
      data: [200, 400, 190, 20, ""],
      color: "#39409A",
    },
  ],
};
