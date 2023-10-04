import { createWebHistory, createRouter } from "vue-router";
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import Contato from "../pages/Contato.vue";
import Funcional from "../pages/Funcional.vue";

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
    }    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;