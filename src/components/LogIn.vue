<template>

    <header>
        <h1>VERIFICA TU IDENTIDAD</h1>
    </header>

    <main>
        <img src="/image/logo.PNG" alt="Logo">
        <form v-on:submit.prevent="processLogInUser">
            <fieldset>
                <div>
                    <label for="user">Usuario:</label>
                    <input type="text" v-model="user.username" id="user" required placeholder="Usuario">
                </div>
                <div>
                    <label for="contraseña">Contraseña:</label>
                    <input type="password" v-model="user.password" id="Contraseña" required placeholder="Contraseña">
                </div>

                <button type="submit" class="enviar">Iniciar Sesión</button>
            </fieldset>
        </form>
    </main>
</template>
<script>
import axios from 'axios';

export default {

    data: function () {
        return {
            user: {
                username: "",
                password: ""
            }
        }
    },

    methods: {
        processLogInUser: function () {
            axios.post(
                "https://hospital-dd-2.herokuapp.com/login/",
                this.user,
                { headers: {} }
            )
                .then((result) => {
                    let dataLogIn = {
                        username: this.user.username,
                        token_access: result.data.access,
                        token_refresh: result.data.refresh,
                    }

                    
                    this.$emit('completedLogIn', dataLogIn)
                    
                })
                .catch((error) => {
                    if (error.response.status == "401")
                        alert("ERROR 401: Credenciales Incorrectas.");
                })
        }
    }
}
</script>


<style scoped>
body {
    background: rgba(173, 232, 244, 0.3);
}

header {
  width: 1280px;

  margin: 0 auto;
  background-color: blanchedalmond;
}

main {
    box-sizing: border-box;
    margin: auto auto;

}

form {

    margin: 10% 30%;
    width: 30%;
    height: 60%;
    background-color: rgba(69, 124, 158, 0.3);
    border: 3px solid rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>