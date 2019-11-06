import React, {Component} from 'react';
import { connect } from "react-redux";
import './chart.css';
import {Line} from "react-chartjs-2";
import getChartData from "../../dataSource";
// import {cn} from '@bem-react/classname';
// import {IClassNameProps} from "@bem-react/core";

class Chart extends Component {

  render() {
    let dataForCharts = getChartData();

    let chartParams = {
        labels: dataForCharts.labels,
        datasets: [
          {
            label: "DataSet1",
            backgroundColor: "rgba(255, 0, 255, 0.75)",
            data: dataForCharts.set1,
          },
          {
            label: "DataSet2",
            backgroundColor: "rgba(0, 255, 0, 0.75)",
            data: dataForCharts.set2,
          }
        ]
    };

    return (
      <div className="chart">
        <Line
          options = {{
            responsive: true
          }}
          data={chartParams}
        />
      </div>
    );
  }
};

const mapStateToProps = state => {
  const { periodFilter } = state;
  return {state};
};

export default connect(mapStateToProps)(Chart);

