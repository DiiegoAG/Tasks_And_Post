<template>
    <div>
        <h4>Título:</h4>
        <p>{{ singlePost.title }}</p>
        <h4>Descripción:</h4>
        <p>{{ singlePost.body }}</p>
    </div>
</template>

<script>
import postService from '@/services/postService';

export default {
    data() {
        return {
            singlePost: []
        }
    },
    created() {
        postService.getOne(this.$route.params.id).then(res => {
            this.singlePost = res.data;
        })
    },
}
</script>