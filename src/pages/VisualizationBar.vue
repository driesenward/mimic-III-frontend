<template>
  <q-page class="q-pa-md column justify-center items-center">
    <div v-if="error" class="my-error-wrapper q-mb-xl">
      <div>An error occured, try again later.</div>
    </div>
    <q-btn
      class="my-insert-button absolute-top-right q-ma-md"
      color="primary"
      label="Insert testdata"
      @click="mockData"
    />
    <bar-chart :allData="allData"></bar-chart>
  </q-page>
</template>

<script>
import api from "../service/ApiService";
import BarChart from "../components/BarChart.vue";

export default {
  name: "VisualizationBar",
  components: { BarChart },
  data() {
    return {
      allData: undefined,
      error: false,
    };
  },
  created() {
    api
      .fetchGroupedResults()
      .then((response) => {
        this.allData = response.data;
      })
      .catch((err) => {
        this.error = true;
      });
  },
  methods: {
    mockData() {
      let male = [];
      let female = [];

      let mockMultiplier = 20;
      for (let i = 0; i < 9; i++) {
        male.push(Math.floor(this.calculateRandom(mockMultiplier)));
        female.push(Math.floor(this.calculateRandom(mockMultiplier)));

        mockMultiplier += 10;
      }

      this.allData = {
        categories: this.allData.categories,
        male: male,
        female: female,
      };
    },
    calculateRandom(mockMultiplier) {
      return (
        Math.floor(Math.random() * mockMultiplier) +
        mockMultiplier * Math.random() * 1000
      );
    },
  },
};
</script>

<style>
.my-spinner {
  color: #3f98bd;
}

.my-error-wrapper {
  width: 400px;
  font-size: 1rem;
  background: #fab8b9;
  border-style: solid;
  border-color: #f47174;
  border-radius: 4px;
  border-width: 0 5px;
  padding: 16px 24px;
}

.my-insert-button {
  background: #3c3c3b !important;
}
</style>
