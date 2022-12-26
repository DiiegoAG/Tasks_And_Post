<template>
    <div>
        <h1>Tareas</h1>
        <input type="text" v-on:keyup.enter="agregarTarea" v-model="nuevaTarea" placeholder="Añadir Tarea">
        <input type="button" v-on:click="agregarTarea" value="Añadir">
        <br>
        <br>
        <input type="search" placeholder="Filtrar Tarea por Título" v-model="filtroTareas">
        <Tarea 
            v-for="tarea, $index in tareasFiltradas" 
            :key="tarea.id"
            :titulo="tarea.title"
            @eliminarTarea="eliminarTarea($index)">
        </Tarea>
    </div>
</template>

<script>
    import Tarea from '@/components/Tarea.vue'
    import todoService from '@/services/todoService';
    export default {
        name: 'Tareas',
        components: {
            Tarea,
        },
        created (){
            todoService.get().then(tareas => this.tareas = tareas.data)
        },
        data(){
            return{
                tareas: [],
                nuevaTarea: '',
                filtroTareas: ''
            }
        },
        computed: {
            tareasFiltradas(){
                return this.tareas.filter(tarea => {
                    return tarea.title.includes(this.filtroTareas)
                })
            }
        },
        methods: {
            agregarTarea(){
                this.tareas.unshift({title: this.nuevaTarea});
                this.nuevaTarea = '';
            },
            eliminarTarea(indice) {
                this.tareas.splice(indice, 1);
            }
        },
    }
</script>