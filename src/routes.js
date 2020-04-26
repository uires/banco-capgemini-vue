import Home from './components/home/Home.vue';
import RealizaTransacao from './components/transacoes/RealizaTransacao.vue';

export const routes = [
    { path: '', component: Home },
    { path: '/realizartransacao', component: RealizaTransacao }
];