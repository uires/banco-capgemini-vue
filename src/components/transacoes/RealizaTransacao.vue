<template>
  <div class="container">
    <form @submit.prevent="transacao()">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="agencia">Agência (com dígito)</label>
          <input
            id="agencia"
            type="text"
            name="agencia"
            class="form-control"
            v-mask="'######-#'"
            @input="agencia = $event.target.value"
            :value="agencia"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="numeroConta">Número Conta</label>
          <input
            id="numeroConta"
            type="text"
            name="numeroConta"
            class="form-control"
            @input="numeroConta = $event.target.value"
            :value="numeroConta"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="valor">Valor</label>
        <input
          id="valor"
          type="text"
          name="valor"
          class="form-control"
          @input="valor = $event.target.value"
          :value="valor"
        />
      </div>
      <div class="form-group">
        <label for="tipo">Tipo transação</label>
        <select name="tipo" id="tipo" class="form-control" @input="tipo = $event.target.value" :value="tipo">
          <option value="DEPOSITO">Deposito</option>
          <option value="SAQUE">Saque</option>
        </select>
      </div>
      <button class="form-control btn btn-primary" type="submit">Realizar</button>
    </form>
  </div>
</template>
<script>
import { header, apiUrl, getHeader } from '../../config.js';
export default {
  data() {
    return {
      agencia: "",
      numeroConta: "",
      valor: 0.0,
      tipo: ""
    };
  },
  methods: {
    transacao() {

      if (this.tipo == "DEPOSITO") {
        
        this.$http.post(apiUrl + "/contacorrente/depositar/" + this.numeroConta + "/" + this.agencia, 
          { valor: this.valor, tipo: this.tipo }, { headers: getHeader()})
          .then(
            () => this.$swal('Deposito realizado com sucesso'),
            err => alert('Ocorreu um erro ao relizar o deposito!')
          );
      } else {

        this.$http.post( apiUrl + "http://localhost:8000/contacorrente/realizasaque/" + this.numeroConta + "/" + this.agencia, 
          { valor: this.valor, tipo: this.tipo }, { headers: getHeader()})
          .then(
            () => this.$swal({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              type: 'success',
              text: 'Transação realizada com sucesso!',}),
            err => alert('Ocorreu um erro ao realizar o saque!')
        );
      }
      
      // this.$router.push('/');

      this.agencia = "";
      this.numeroConta = "";
      this.valor = 0.0;
      this.tipo = "";
    }
  }
};
</script>
<style>
</style>