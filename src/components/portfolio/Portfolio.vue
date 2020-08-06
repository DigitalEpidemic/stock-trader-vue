<template>
  <div>
    <div v-if="!stocks.length">
      <p>You have no stocks in your portfolio!</p>
      <p>Navigate to the <strong>Stocks</strong> tab to purchase some stocks!</p>
    </div>
    <app-stock v-for="(stock, i) in stocks" :key="i" :stock="stock" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock.vue";
export default {
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio",
    }),
  },
  components: {
    appStock: Stock,
  },
};
</script>
