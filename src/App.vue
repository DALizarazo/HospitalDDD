<template>
  <header>
    <h1>Bienvenidos al Home-Assistance de MisiónTIC</h1>
    <img class="imglogo" src="/image/logo.PNG" alt="Logo" />
  </header>
  <main>
    <section class="botones">
      <button v-if="!is_auth">¿Quiénes somos?</button>
      <button v-if="!is_auth">Nuestros Servicios</button>
      <button v-if="is_auth" v-on:click="loadRegistrarMedico">Registrar Medico</button>
      <button v-if="is_auth" v-on:click="loadRegistrarPaciente">Registrar Paciente</button>
      <button v-if="is_auth" v-on:click="loadRegistrarFamiliar"> Registrar Familiar</button>
      <button v-if="is_auth" v-on:click="logOut">Cerrar Sesión</button>
      <button v-if="is_auth" v-on:click="loadHome">Inicio</button>
      <button v-if="!is_auth" v-on:click="loadLogIn">Inicio Sesión</button>
      <button v-if="!is_auth" v-on:click="loadRegistrarUsuario">Registrar Usuario</button>
    </section>



    <router-view v-on:completedLogIn="completedLogIn" v-on:completedRegistroUsuario="completedRegistroUsuario"
      v-on:completedRegistrarFamiliar="completedRegistrarFamiliar"
      v-on:completedRegistrarPaciente="completedRegistrarPaciente"
      v-on:completedRegistrarMedico="completedRegistrarMedico" v-on:logOut="logOut">
    </router-view>



    <br />
  </main>

</template>

<script>
export default {

  data: function () {
    return {
      is_auth: false
    }

  },

  methods: {
    verifyAuth: function () {
      this.is_auth = localStorage.getItem("isAuth") || false;

      if (this.is_auth == false)
        this.$router.push({ name: "logIn" });
      else
        this.$router.push({ name: "home" });
    },

    loadLogIn: function () {
      this.$router.push({ name: "logIn" })
    },

    loadRegistrarUsuario: function () {
      this.$router.push({ name: "registroUsuario" })
    },

    loadRegistrarMedico: function () {
      this.$router.push({ name: "registrarMedico" })
    },

    loadRegistrarPaciente: function () {
      this.$router.push({ name: "registrarPaciente" })
    },

    loadRegistrarFamiliar: function () {
      this.$router.push({ name: "registrarFamiliar" })
    },

    loadHome: function () {
      this.$router.push({ name: "home" });
    },

    logOut: function () {
      localStorage.clear();
      alert("Sesion Cerrada");
      this.verifyAuth();
    },



    completedLogIn: function (data) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("username", data.username);
      localStorage.setItem("token_access", data.token_access);
      localStorage.setItem("token_refresh", data.token_refresh);
      alert("Autenticación Existosa");
      this.verifyAuth();
    },

    completedRegistroUsuario: function (data) {
      alert("Registro de Usuario Exitoso");
      this.completedLogIn(data);
    },

    completedRegistrarMedico: function (data) {
      alert("Registro de Medico Existoso")
    },

    completedRegistrarPaciente: function (data) { },

    completedRegistrarFamiliar: function (data) { }


  },

  created: function () {
    this.verifyAuth()
  }
}
</script>


<style>
header {
  width: 1280px;

  margin: 0 auto;
  background: none;
}

header h1 {
  display: inline-block;
  font-size: 40px;
  font-style: oblique;
  font-weight: 300;
  margin: 0 20px 30px 100px;
  padding-top: 20px;
  padding-bottom: 5px;
  text-align: center;
}

body {
  background: linear-gradient(rgba(120, 148, 188, 0.5), rgba(72, 162, 174, 0.7));
}

.imglogo {
  width: 200px;
  height: 200px;
  margin: 0;
  float: left;
}

main {
  width: 1040px;
  margin: 0 auto;
  background: none;
}

.login {
  float: right;
  padding: 10px;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  font-weight: bolds;
  border: 1px solid black;
  border-radius: 5px;
  margin-right: 20px;
  background: rgba(99, 195, 221, 0.15);
  cursor: pointer;
}

main button {
  width: 150px;
  height: 70px;
  margin-top: 30px;
  margin-right: 10px;
  padding: 15px 0;
  font-size: 15px;
  font-weight: bold;
  color: white;
  background: #48a2ae;
  border: none;
  border-radius: 5px;
  transition: 1s all;
  cursor: pointer;
}


main button:hover,
.logOut:hover {
  background: darkorange;
  transform: scale(1.1);
  /*--rotate(xdeg)*/

}

main textarea {
  width: 500px;
  height: 200px;
  margin-top: 50px;
  padding: 20px;
  background: rgba(99, 195, 221, 0.15);
  color: black;
  font-size: 18px;
  font-weight: bold;
}

.paciente {
  width: 15%;
  float: right;
  margin: 50px 100px 0 0;
  box-shadow: 7px 7px 15px rgba(67, 94, 194, 0.5);
}

footer {
  width: 1040px;
  margin: 0px auto;
}

footer h1 {
  margin-top: 40px;
  text-align: right;
}

footer img {
  width: 100px;
  height: 100px;
  float: right;
  margin-right: 20px;
}

.main-component {
  height: 75vh;
  margin: 0%;
  padding: 0%;
  background: #fdfefe;
}

.botones {
  width: 940px;
  margin: 0px auto;
  display: inline-block;
  
}
</style>
