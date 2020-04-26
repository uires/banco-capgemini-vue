import Transacoes from './components/transacoes/Transacoes.vue';
import RealizaTransacao from './components/transacoes/RealizaTransacao.vue';
import Login from './components/login/Login.vue';

export const routes = [
    { path: '/', component: Login, name: 'Login' },
    { path: '/realizartransacao', component: RealizaTransacao, name: 'realizartransacao', meta: { requiresAuth: true } },
    { path: '/transacoes', component: Transacoes, name: 'transacoes', meta: { requiresAuth: true } }
];