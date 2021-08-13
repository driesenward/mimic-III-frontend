<template>
  <apexchart
    ref="chart"
    width="1000"
    type="bar"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "ChartComponent",
  components: { apexchart: VueApexCharts },
  props: {
    allData: { type: Object },
  },
  data() {
    return {
      chartOptions: {
        colors: ["#3f98bd", "#3c3c3b"],
        title: {
          text: "Number of admissions based on age and sex",
          align: "center",
          style: {
            fontSize: "20px",
          },
        },
        chart: {
          id: "vuechart-example",
          toolbar: {
            show: false,
          },
        },
        legend: {
          position: "top",
          onItemHover: {
            highlightDataSeries: false,
          },
        },
        xaxis: {
          categories: [],
          title: {
            text: "age",
            style: {
              fontSize: "18px",
            },
          },
        },
        yaxis: {
          title: {
            text: "amount of admissions",
            style: {
              fontSize: "18px",
            },
          },
        },
        noData: {
          text: "No data available",
          align: "center",
          verticalAlign: "middle",
        },
      },
      series: [],
    };
  },
  watch: {
    allData: {
      handler() {
        this.$refs.chart.updateOptions({
          xaxis: {
            categories: this.allData.categories,
          },
        });

        this.$refs.chart.updateSeries([
          {
            name: "male",
            data: this.allData.male,
          },
          {
            name: "female",
            data: this.allData.female,
          },
        ]);
      },
    },
  },
};
</script>

<style></style>
