import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const PieChart = ({ options }) => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PieChart;
