<template>
  <div>
    <app-header />
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    appHeader: Header,
  },
  created() {
    this.$store.dispatch("initStocks");
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.275s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
