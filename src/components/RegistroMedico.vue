<template>
    <header>
        <h1>REGISTRO DE MÉDICOS</h1>
    </header>

    <main>
        <img src="image/logo.PNG" alt="Logo">
        <form>
            <fieldset>
                <div>
                    <label for="user">Usuario:</label>
                    <input type="text" id="user" required>
                </div>
                <div>
                    <label for="especialidad">Especialidad:</label>
                    <input type="text" id="especialidad" required>
                </div>
                <div>
                    <label for="registro">N° Registro:</label>
                    <input type="text" id="registro" required>
                </div>


                <input type="submit" value="Registrar médico" class="enviar">
            </fieldset>
        </form>
    </main>

</template>

<style scoped>
header {
    display: inline-block;
    background-color: blanchedalmond;

}

header h1 {
    font-size: 30px;
    font-style: oblique;
    font-weight: 100;
    padding-top: 40px;
    padding-bottom: 25px;
    text-align: center;
}

main img {
    position: relative;
    left: 190px;
    height: 100px;
    width: 100px;
}


body {
    /*background: url(Imagenes/patron2.jpg);*/
    background: mintcream;
}

main {
    width: 480px;
    margin: 20px auto;
    border: 4px solid rgba(120, 148, 188, 0.8);
    ;
    border-radius: 10px;
    padding: 15px 5px 30px 10px;
    background: rgba(120, 148, 188, 0.5);

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
    font-size: 15px;
    display: inline-block;
    width: 130px;
}

form div input,
form select {
    padding: 3px;
    border-radius: 5px;
    margin: 0 20px;
    width: 230px;
    font-size: 15px;
    background: mintcream;
}

.enviar {
    position: relative;
    left: 72px;
    width: 70%;
    margin-top: 30px;
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

.enviar:hover {
    background: darkorange;
    transform: scale(1.1);
    /*--rotate(xdeg)*/

}
</style>