<template>
  <div>
    <app-stock v-for="stock in stocks" :key="stock" />
  </div>
</template>

<script>
import Stock from "./Stock.vue";

export default {
  data() {
    return {
      stocks: [
        { id: 1, name: "AMD", price: 85 },
        { id: 2, name: "AAPL", price: 200 },
        { id: 3, name: "FB", price: 250 },
        { id: 4, name: "MSFT", price: 150 },
      ],
    };
  },
  components: {
    appStock: Stock,
  },
};
</script>
