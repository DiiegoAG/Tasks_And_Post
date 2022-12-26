<template>
  <div class="about">
    <h1>Post Publicados</h1>
    <div id="contenedor" v-for="post in posts" :key="post.id">
      <div>
        <router-link :to="'posts/' + post.id"><p class="titulo">{{post.title}}</p></router-link>
        <p>{{post.body}}</p>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
import postService from '@/services/postService';
  export default{
    name: 'Posts',
    created(){
      postService.get().then(posts => this.posts = posts.data);
    },
    data (){
      return {
        posts: []
      }
    },
    methods: {
      infoPost (id){
        postService.getOne(id).then(resp => alert('titulo: ' + resp.data.title + '\nbody: ' + resp.data.body)).catch(error => console.error(error));
      }
    }
  }
</script>

<style scoped>
  .titulo{
    font-weight: 600;
  }
</style>