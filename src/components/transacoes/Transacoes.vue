<template>
  <table class="table table-hover">
    <tbody>
      <tr v-for="transacao of transacoes" :key="transacao.codigo">
        <td>R$ {{ transacao.valor.replace('.', ',') }}</td>
        <td
          v-if="transacao.tipo === 'DEPOSITO'"
          style="color: green;"
        >{{ transacao.tipo.toLowerCase() }}</td>
        <td v-else style="color: red;">{{ transacao.tipo.toLowerCase() }}</td>
      </tr>
    </tbody>
    <span class="navbar-text">
      <a href style="color: green;">Saldo R$ {{ contaCorrente.saldo }}</a>
    </span>
  </table>
</template>
<script>
import { apiUrl, getHeader } from '../../config.js';

export default {
  data() {
    return {
      transacoes: [],
      contaCorrente: {}
    };
  },
  created() {
    this.$http
      .get(apiUrl + "/transacoes", { headers: getHeader() })
      .then(resposta => resposta.json())
      .then(
        transacoes => (this.transacoes = transacoes),
        err => alert("Ocorreu um erro!")
      );

    this.$http
      .get(apiUrl + "/contacorrente/saldo/" + 
        JSON.parse(window.localStorage.getItem('usuarioAutorizado')).numero_conta + 
        "/" + JSON.parse(window.localStorage.getItem('usuarioAutorizado')).agencia,
        { headers: getHeader() })
      .then(resposta => resposta.json())
      .then(
        contaCorrente => (this.contaCorrente = contaCorrente),
        err => alert("Ocorreu um erro!")
      );
  }
};
</script>
<style></style>
