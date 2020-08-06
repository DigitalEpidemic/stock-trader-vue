<template>
  <div>
    <h1>Welcome to Stock Trader!</h1>
    <hr />
    <h6>You may <strong>Save & Load</strong> your data.</h6>
    <h6>Click <strong>'End Day'</strong> to begin a new day!</h6>
    <hr />
    <h6><strong>End Day</strong> - Randomly increments or decrements every share price.</h6>
    <h6><strong>Save Data</strong> - Stores Current share prices and funds to Firebase</h6>
    <h6><strong>Load Data</strong> - Loads previously stored data from Firebase</h6>
    <hr />
    <p>
      Your Funds: <strong>{{ funds | currency }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
};
</script>
