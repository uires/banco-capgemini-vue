<template>
  <div>
    <menu></menu>
    <div class="container">
      <div class="row">
        <img src="src/assets/capgemini-logo.png" width="100" height="100" />
        <h3>Banco Capgemini</h3>
      </div>
      <form @submit.prevent="logar()">
        <div class="form-group">
          <label for="username">E-mail</label>
          <input type="email" class="form-control" id="username" v-model="login.username" />
        </div>
        <div class="form-group">
          <label for="password">Senha</label>
          <input type="password" class="form-control" id="password" v-model="login.password" />
        </div>
        <button type="submit" class="form-control btn btn-primary">Acessar</button>
      </form>
    </div>
  </div>
</template>
<script>
import { apiUrlLogin, getHeader, userUrl } from "../../config.js";
import { clientSecret, clientId } from "../../env.js";
import Menu from '../fragmento/Menu.vue';
export default {
  components: {
    Menu
  },
  data() {
    return {
      login: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    logar() {
      const data = {
        grant_type: "password",
        client_id: clientId,
        client_secret: clientSecret,
        username: this.login.username,
        password: this.login.password,
        scope: ""
      };
      const usuarioAutorizado = {};
      this.$http.post(apiUrlLogin, data).then(
        response => {
          if (response.status === 200) {
            usuarioAutorizado.access_token = response.data.access_token;
            usuarioAutorizado.refresh_token = response.data.refresh_token;
            window.localStorage.setItem(
              "usuarioAutorizado",
              JSON.stringify(usuarioAutorizado)
            );

            this.$http
              .get(userUrl + this.login.username, { headers: getHeader() })
              .then(response => {
                usuarioAutorizado.id = response.data.id;
                usuarioAutorizado.email = response.data.email;
                usuarioAutorizado.agencia =
                  response.data.conta_corrente.agencia;
                usuarioAutorizado.numero_conta =
                  response.data.conta_corrente.numero_conta;
                window.localStorage.setItem(
                  "usuarioAutorizado",
                  JSON.stringify(usuarioAutorizado)
                );
                this.$router.push({ name: "transacoes" });
              });
          }
        },
        err => {
          if (err.status === 401) {
            this.$swal({
              type: "error",
              text: "Usuário e/ou senha incorreto",
              timer: 5000
            });
          }
        }
      );
    }
  }
};
</script>
<style>
</style>