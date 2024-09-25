import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const LineChart = ({ options }) => (
  <HighchartsReact highcharts={Highcharts} options={options} />
);

export default LineChart;
