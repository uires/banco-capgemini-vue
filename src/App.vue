<template>
  <transition name="muda-pagina">
    <router-view></router-view>
  </transition>
</template>
<script>
export default {};
</script>

<style>
.muda-pagina-enter,
.muda-pagina-leave-active {
  opacity: 0;
}
.muda-pagina-enter,
.muda-pagina-leave-active {
  transition-duration: 0.1s;
  transition-property: opacity;
  transition-timing-function: ease;
}
</style>
