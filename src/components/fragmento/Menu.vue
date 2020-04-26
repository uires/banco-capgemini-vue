<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/transacoes">
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
      <div class="alinhamento-botao-sair">
        <a class="botao-sair" href v-on:click="sair()">Sair</a>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      titulo: "Banco Capgemini"
    };
  },
  methods: {
    sair() {
      alert("deslogado");
      window.localStorage.removeItem("usuarioAutorizado");
    }
  }
};
</script>
<style>
.alinhamento-botao-sair {
  float: right;
}
.botao-sair {
  color: #c10000;
}
</style>