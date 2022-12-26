<template>
    <Logo/>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/posts">Posts</router-link>
  </nav>
</template>

<script>
    import Logo from '@/components/Logo.vue';
    export default {
        components: {
            Logo
        }
    }
</script>