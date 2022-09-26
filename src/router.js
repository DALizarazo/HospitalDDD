import { createRouter, createWebHistory } from 'vue-router'
import App from './App'
import LogIn from './components/LogIn.vue'
import RegistroUsuario from './components/RegistroUsuario.vue'
import RegistrarFamiliar from './components/RegistrarFamiliar.vue'
import RegistroMedico from './components/RegistroMedico.vue'
import RegistarPaciente from './components/ResgistrarPaciente.vue'
import Home from './components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: App
  },

  {
    path: '/user/login',
    name: 'logIn',
    component: LogIn
  },

  {
    path: '/user/registrarusuario',
    name: 'registrarUsuario',
    component: RegistroUsuario
  },

  {
    path: '/user/registrarmedico',
    name: 'registrarMedico',
    component: RegistroMedico
  },

  {
    path: '/user/registrarpaciente',
    name: 'registrarPaciente',
    component: RegistarPaciente
  },

  {
    path: '/user/registrarfamiliar',
    name: 'registrarFamiilar',
    component: RegistrarFamiliar
  },

  {
    path: '/user/home',
    name: "home",
    component: Home
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
