<template>

        <h1 class="titulo-principal">REGISTRO DE USUARIOS</h1>

    <main>
        <img src="/image/logo.PNG" alt="">
        <form v-on:submit.prevent="processRegistroUsuario">

            <div>
                <label for="T_ID">Tipo ID:</label>
                <input type="text" v-model="user.tipoIdentificacion" id="T_ID" required
                    placeholder="C.C   T.T   P.P   C.E">
            </div>
            <div>
                <label for="user">N° Identificación:</label>
                <input type="text" v-model="user.id" id="user" required placeholder="N° Identificacion">
            </div>

            <div>
                <label for="name">Nombres:</label>
                <input type="text" v-model="user.nombre" id="name" required placeholder="Nombre">
            </div>
            <div>
                <label for="lastname">Apellidos:</label>
                <input type="text" v-model="user.apellidos" id="lastname" required placeholder="Apellidos">
            </div>
            <div>
                <label for="telefono">Teléfono:</label>
                <input type="tel" v-model="user.telefono" id="telefono" required placeholder="311 234 5678">
            </div>
            <div>
                <label for="genero">Género:</label>
                <select v-model="user.genero" id="genero">
                    <option value="Femenino">Femenino</option>
                    <option value="Masculino">Masculino</option>
                    <option value="No binario">No binario</option>
                </select>
            </div>
            <div>
                <label for="email">e-mail:</label>
                <input type="email" v-model="user.correoElectronico" id="email" required
                    placeholder="email@dominio.com">
            </div>
            <div>
                <label for="pass">Usuario:</label>
                <input type="text" v-model="user.username" id="pass" required placeholder="Usuario">
            </div>
            <div>
                <label for="passa">Contraseña:</label>
                <input type="password" v-model="user.password" id="passa" required placeholder="***********">
            </div>
            <div>
                <label for="rol">Rol:</label>
                <select v-model="user.rol" id="rol">
                    <option value="paciente">Paciente</option>
                    <option value="médico">Médico</option>
                    <option value="familiar">Familiar</option>
                </select>
            </div>

            <button>Volver</button>

            <button type="submit" class="enviar">Registrar Usuario</button>

        </form>
    </main>

</template>

<script>
import axios from 'axios';

export default {
    data: function () {
        return {
            user: {
                tipoIdentificacion: "",
                id: "",
                nombre: "",
                apellidos: "",
                telefono: "",
                genero: "",
                correoElectronico: "",
                username: "",
                password: "",
                rol: "",
            }
        }
    },

    methods: {
        processRegistroUsuario: function () {
            axios.post(
                "https://hospital-dd-2.herokuapp.com/usuario/",
                this.user,
                { headers: {} }
            )
                .then((result) => {
                    let dataSignUp = {
                        username: this.user.username,
                        token_acess: result.data.access,
                        token_refresh: result.data.refresh
                    }

                    this.$emit('completedRegistroUsuario', dataSignUp)
                })
                .catch((error) => {
                    console.log(error)
                    alert("Error: Fallo en el registro");
                });
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
    /*background: url(Imagenes/patron2.jpg);*/
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
    /*--rotate(xdeg)*/
}
</style>