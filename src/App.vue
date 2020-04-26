<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">
        <img
          src="src/assets/capgemini-logo.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt
        />
        {{ titulo }}
      </router-link>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/realizartransacao">Realizar transação</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <transition name="muda-pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      titulo: "Banco Capgemini"
    };
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
  transition: opacity .3s;
}
</style>
