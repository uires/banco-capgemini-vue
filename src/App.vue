<template>
  <div class="container">
    <menu-aplicacao></menu-aplicacao>
    <transition name="muda-pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import Menu from './components/fragmento/Menu.vue'
export default {
  components: {
    "menu-aplicacao": Menu
  }
};
</script>

<style>
.muda-pagina-enter,
.muda-pagina-leave-active {
  opacity: 0;
}
.muda-pagina-enter,
.muda-pagina-leave-active {
  transition: opacity 0.3s;
}
</style>
