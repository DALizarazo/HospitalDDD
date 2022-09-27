<template>
    <header>
        <h1>REGISTRO DE USUARIOS</h1>
    </header>

    <main>
        <img src="/image/logo.PNG" alt="">
        <form v-on:submit.prevent="processRegistroUsuario">
            <fieldset>
                <div>
                    <label for="T_ID">Tipo ID:</label>
                    <input type="text" v-model="user.tipoIdentificacion" id="T_ID" required placeholder="C.C   T.T   P.P   C.E">
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
                    <input type="email" v-model="user.correoElectronico" id="email" required placeholder="email@dominio.com">
                </div>
                <div>
                    <label for="pass">Usuario:</label>
                    <input type="text" v-model="user.username" id="pass" required placeholder="Usuario">
                </div>
                <div>
                    <label for="pass">Contraseña:</label>
                    <input type="password" v-model="user.pasword" id="pass" required placeholder="***********">
                </div>
                <div>
                    <label for="rol">Rol:</label>
                    <select v-model="user.rol" id="rol">
                        <option value="paciente">Paciente</option>
                        <option value="médico">Médico</option>
                        <option value="familiar">Familiar</option>
                    </select>
                </div>
                
                <button type="submit" class="enviar">Registrar Usuario</button>
            </fieldset>
        </form>
    </main>

</template>

<script>
import axios from 'axios';

export default {
    data: function() {
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
        processRegistroUsuario: function() {
            axios.post (
                "https://hospital-dd-2.herokuapp.com/usuario/",
                this.user,
                {headers: {}}
            )
            .then((result) => {
                let dataSignUp = {
                    username: this.user.username,
                    token_acess: result.data.access,
                    token_refresh: result.data.refresh,
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
body {
    background: rgba(173, 232, 244, 0.3);
}

main {
    box-sizing: border-box;
    margin: auto auto;

}

form {

    margin: 10% 30%;
    width: 40%;
    height: 60%;
    background-color: rgba(69, 124, 158, 0.3);
    border: 3px solid rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
}

form h2 {
    text-align: center;
    font-family: 'Playfair Display', serif;
    font-size: 20px;
}

form label {
    position: relative;
    left: 10%;
}

form input {

    position: absolute;
    left: 45%;
}

form button {
    position: relative;
    left: 40%;
    width: 120px;
}

.selectG {
    position: relative;
    left: 26%;
}

.selectRol {
    position: relative;
    left: 31%;
}
</style>