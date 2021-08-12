<template>
  <apexchart
    ref="chart"
    width="1000"
    type="scatter"
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
          text: "Admission rate based on age and sex",
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
        let maleData = [];
        this.allData.male.forEach((male) => {
          maleData.push([male.age, male.occurrences]);
        });

        let femaleData = [];
        this.allData.female.forEach((female) => {
          femaleData.push([female.age, female.occurrences]);
        });

        this.$refs.chart.updateSeries([
          {
            name: "male",
            data: maleData,
          },
          {
            name: "female",
            data: femaleData,
          },
        ]);
      },
    },
  },
};
</script>

<style></style>
