<template>
    <div>
        <h3>{{ titulo }} <button v-on:click="$emit('eliminarTarea')">Eliminar</button></h3>
    </div>
</template>

<script>
export default {
    name: 'Tarea',
    props: ['titulo']
}
</script>

<style lang="scss" scoped>
    h3{
        color: $coorporativo;
    }
    button{
        background-color: $boton;
        color: white;
        cursor: pointer;
    }
</style>