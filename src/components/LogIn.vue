<template>


    <h1 class="titulo-principal" >VERIFICA TU IDENTIDAD</h1>


    <main>
        <img src="/image/logo.PNG" alt="Logo">
        <form v-on:submit.prevent="processLogInUser">

                <div>
                    <label for="user">Usuario:</label>
                    <input type="text" v-model="user.username" id="user" required placeholder="Usuario">
                </div>
                <div>
                    <label for="contraseña">Contraseña:</label>
                    <input type="password" v-model="user.password" id="Contraseña" required placeholder="Contraseña">
                </div>

                <button>Volver</button>

                <button type="submit" class="enviar">Iniciar Sesión</button>

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
.titulo-principal {
    font-size: 30px;
    font-style: oblique;
    font-weight: 100;
    padding-top: 50px;
    padding-bottom: 25px;
    text-align: center;
    text-shadow: 7px 7px 15px rgba(67, 94, 194, 0.5);
}

main img {
    position: relative;
    left: 140px;
    height: 200px;
    width: 200px;
}

body {
    background: linear-gradient(rgba(120, 148, 188, 0.5), rgba(72, 162, 174, 0.7));
}

main {
    width: 480px;
    margin: 20px auto;
    border: 4px solid rgba(120, 148, 188, 0.8);
    ;
    border-radius: 10px;
    padding: 15px 5px 30px 10px;
    background: rgba(120, 148, 188, 0.3);
}

form div {
    margin: 0 0 0 40px;
    justify-items: left;
    padding: 10px;
}

.date {
    margin-right: -6px;
    display: inline;
}

form label {
    font-size: 17px;
    display: inline-block;
    width: 130px;
}

form div input,
form select {
    padding-top: 6px;
    border-radius: 5px;
    margin: 0 20px;
    width: 230px;
    font-size: 15px;
    background: mintcream;
}

main button {
    width: 40%;
    margin: 30px 30px 0 15px;
    padding: 15px 0;
    font-size: 18px;
    font-weight: bold;
    color: white;
    background: #48a2ae;
    border: none;
    border-radius: 5px;
    transition: 1s all;
    cursor: pointer;
}

main button:hover {
    background: darkorange;
    transform: scale(1.1);
}
</style>