import { createWebHistory, createRouter } from "vue-router";
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import Contato from "../pages/Contato.vue";
import Funcional from "../pages/Funcional.vue";
import Planos from "../pages/Planos.vue";
import Login from "../pages/Login.vue";
import Tips from "../pages/Tips.vue";
import FuncionalidadeCadastro from "../pages/FuncionalidadeCadastro.vue"
import FuncionalidadeEstoque from "../pages/FuncionalidadeEstoque.vue"
import FuncionalidadeFrenteCaixa from "../pages/FuncionalidadeFrenteCaixa.vue"
import FuncionalidadeVenda from "../pages/FuncionalidadeVenda.vue"
import FuncionalidadeNotaFiscal from "../pages/FuncionalidadeNotaFiscal.vue"


const routes = [
    {
        path: "/",
        name: "Home-page",
        component: Home,
    },
    {
        path: "/about",
        name: "About-page",
        component: About,
    },
    {
        path: "/contato",
        name: "Contato-page",
        component: Contato,
    },
    {
        path: "/funcional",
        name: "Funcional-page",
        component: Funcional,
    },
    {
        path: "/planos",
        name: "planos-page",
        component: Planos,
    },
    {
        path: "/login",
        name: "login-page",
        component: Login,
    },
    {
        path: "/tips",
        name: "tips-page",
        component: Tips,
    },
    {
        path: "/funcional/cadastro",
        name: "Funcional-cadastro",
        component: FuncionalidadeCadastro,
    },
    {
        path: "/funcional/estoque",
        name: "Funcional-estoque",
        component: FuncionalidadeEstoque,
    },
    {
        path: "/funcional/frenteCaixa",
        name: "Funcional-frenteCaixa",
        component: FuncionalidadeFrenteCaixa,
    },
    {
        path: "/funcional/venda",
        name: "Funcional-venda",
        component: FuncionalidadeVenda,
    },
    {
        path: "/funcional/notaFiscal",
        name: "Funcional-notaFiscal",
        component: FuncionalidadeNotaFiscal,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;