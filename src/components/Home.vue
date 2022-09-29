<template>
    <div>
        <h1>!Bienvenido <span> {{username}}</span>!</h1>
    </div>
    <main>
        <div class="botonesRegistro">

        </div><br>
        <div v-if="loaded" class="search">
            <table class="tablapaciente">
                <thead>
                    <tr>
                        <td>Tipo Identificación</td>
                        <td>ID</td>
                        <td>Nombre</td>
                        <td>Apellido</td>
                        <td>Télefono</td>
                        <td>Genero</td>
                        <td>Correo Electronico</td>
                        <td>Usuario</td>
                        <td>Rol</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{tipoIdentificacion}}</td>
                        <td>{{id}}</td>
                        <td>{{nombre}}</td>
                        <td>{{apellidos}}</td>
                        <td>{{telefono}}</td>
                        <td>{{genero}}</td>
                        <td>{{correoElectronico}}</td>
                        <td>{{username}}</td>
                        <td>{{rol}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>

</template>

<script>
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export default {
    name: "home",

    data: function () {
        return {
            tipoIdentificacion: "",
            id: "",
            nombre: "",
            apellidos: "",
            telefono: "",
            genero: "",
            correoElectronico: "",
            username: "",
            rol: "",
            loaded: false,
        }
    },

    methods: {
        getData: async function () {
            if (localStorage.getItem("token_access") === null || localStorage.getItem("token_refresh") === null) {
                this.$emit('logOut');
                return;
            }

            await this.verifyToken();
            let token = localStorage.getItem("token_access");
            let id = jwt_decode(token).user_id.toString();
            axios.get(`https://hospital-dd-2.herokuapp.com/usuario/${id}`,

                { headers: { 'Authorization': `Bearer ${token}` } })
                .then((result) => {
                    this.tipoIdentificacion = result.data.tipoIdentificacion;
                    this.id = result.data.id;
                    this.nombre = result.data.nombre;
                    this.apellidos = result.data.apellidos;
                    this.telefono = result.data.telefono;
                    this.genero = result.data.genero;
                    this.correoElectronico = result.data.correoElectronico;
                    this.username = result.data.username;
                    this.rol = result.data.rol;
                    this.loaded = true;
                })

                .catch((error) => {
                    this.$emit('logOut');
                    console.log(error);
                });
        },

        verifyToken: function () {
            return axios.post("https://hospital-dd-2.herokuapp.com/refresh/", { refresh: localStorage.getItem("token_refresh") }, { headers: {} })
                .then((result) => {
                    localStorage.setItem("token_access", result.data.access);
                })
                .catch(() => {
                    this.$emit('logOut');
                });
        }
    },

    created: async function () {
        this.getData();
    },
}

</script>

<style scoped>
header {
    width: 1280px;

    margin: 0 auto;

}

header h1 {
    display: inline-block;
    /*display: inline-block;  
    position: relative;
    top: -90px;
    left: 200px;*/
    font-size: 40px;
    font-style: oblique;
    font-weight: 300;
    margin: 0 20px 30px 100px;
    padding-top: 20px;
    padding-bottom: 5px;
    text-align: center;

}

.botonesRegistro h1 {
    font-size: 18px;
    margin-left: 40%;
}

.botonesRegistro {

    padding: 15px;

}

body {
    /*background: mintcream;*/
    /*background-image: url(Imagenes/fondo.jpg); */
    /*background: url(Imagenes/background.png)*/
    background: mintcream;
}

.imglogo {
    width: 200px;
    height: 200px;
    margin: 0;
    float: left;
}

/*
header img{
    position: relative;
    left: 300px;
    top: 0px;
    width: 200px;
    height: 200px;
}*/
main {
    width: 1040px;
    margin: 0 auto;

}

.login {
    /*
    position: relative;
    left: 500px;
    top: 30px;*/
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

main a {
    /*
    position: relative;    
    top: 30px;*/
    float: left;
    margin-top: 30px;
    margin-left: 20px;
    padding: 10px;
    text-transform: uppercase;
    text-decoration: none;
    color: black;
    background: rgba(99, 195, 221, 0.15);
    font-weight: bolds;
    border: 1px solid black;
    border-radius: 5px;

    cursor: pointer;
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

.paciente,
.logOut {
    width: 15%;
    float: right;
    margin: 50px 100px 0 0;
    box-shadow: 7px 7px 15px rgba(67, 94, 194, 0.5);
}

.enviar,
.logOut {
    width: 15%;
    margin-top: 30px;
    margin-right: 10px;
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

.logOut {

    float: right;
}

.enviar:hover,
.logOut:hover {
    background: darkorange;
    transform: scale(1.1);
    /*--rotate(xdeg)*/

}

.search input {
    display: inline;
    padding: 10px;
    width: 300px;
    margin-left: 30px;
    border: 1px solid gray;
    border-radius: 5px;
}

.searchimg {
    width: 45px;
    height: 30px;
}

.searchButton {
    margin-top: 2.5px;
    margin-left: -60px;
    background: none;
    border: none;
    position: fixed;
    width: 40px;
    height: 40px;
    transition: 1s;
    border-radius: 20px;
}

.searchButton:hover {
    transform: scale(1.25);
}

.tablapaciente,
.tablapaciente tr,
.tablapaciente td {
    border: 1px solid rgba(0, 0, 0, 0.4);
    padding: 10px;
    text-align: center;
    margin: 20px 30px;
}

thead {

    background-color: #48a2ae;
    color: white;
    font-weight: bold;
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
</style>