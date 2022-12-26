<template>
  <div class="home">
    <Tareas/>
  </div>
</template>

<script>
// @ is an alias to /src
import Tareas from '@/components/Tareas.vue';

export default {
  name: 'HomeView',
  components: {
    Tareas,
  }
}
</script>
