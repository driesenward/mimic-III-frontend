<template>
  <q-page class="q-pa-md column justify-center items-center">
    <div v-if="error" class="my-error-wrapper q-mb-xl">
      <div>An error occured, try again later.</div>
    </div>
    <chart-component :allData="allData"></chart-component>
  </q-page>
</template>

<script>
import api from "../service/ApiService";
import ChartComponent from "../components/ChartComponent.vue";

export default {
  name: "Visualization",
  components: { ChartComponent },
  data() {
    return {
      allData: undefined,
      error: false,
    };
  },
  created() {
    api
      .fetchTest()
      .then((response) => {
        this.allData = response.data;
      })
      .catch((err) => {
        this.error = true;
      });
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
</style>
