import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';

import App from './App.vue';
import AboutPage from './pages/AboutPage.vue';
import Main from './pages/Main.vue';

const routerHistory = createWebHistory();
const router = createRouter({
	history: routerHistory,
	routes: [
		{ path: '/', component: Main },
		{ path: '/about', component: AboutPage },
	],
});

const app = createApp(App);

app.use(router);

app.mount('#app');

export { routerHistory, router };
