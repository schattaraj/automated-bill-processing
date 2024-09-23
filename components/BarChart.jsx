import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarChart = ({options}) => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default BarChart;
