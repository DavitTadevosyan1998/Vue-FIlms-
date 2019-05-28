<template>
    <b-col cols='6'>
        <p>{{ film.Title }}</p>
        <p>{{ film.Released }}</p>
        <p>{{ film.Country }}</p>
        <p>{{ film.Director }}</p>
        <p>{{ film.Genre }}</p>
        <p>{{ film.Runtime }}</p>
        <p>{{ film.Awards }}</p>
        <p>{{ film.Language }}</p>
        <p>{{ film.Actors }}</p>
    </b-col>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name:'ItemsTitleText',
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


