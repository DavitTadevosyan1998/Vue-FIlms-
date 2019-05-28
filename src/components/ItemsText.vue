<template>
  <p>{{film.Plot}}</p>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name:'ItemsText',
    computed:{
        ...mapGetters({
            film: 'getFilm',
        }),
    }
}
</script>

<style scoped>
    p{
        font-size: 13px;
    }
</style>
