<template>
    <div id="filmsItem">
        <b-container>
            <div id="body"> 
                <img class="imgLogo" src="./../assets/col-1-head.jpeg" alt="">
                <b-row class="items">
                    <b-col class="item text-center" cols='4'>
                        <img class="imgItem" :src="film.Poster">
                    </b-col>
                    <items-title></items-title>
                    <items-title-text></items-title-text>    
                </b-row>    
            </div>
        </b-container>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import ItemsTitle from './ItemsTitle';
import ItemsTitleText from './ItemsTitleText'
import ItemsText from './ItemsText'

export default {
    name:'ItemsData',
    components:{
        ItemsTitle,
        ItemsText,
        ItemsTitleText
    },
    data(){
        return{
            show: false,
        }
    },
    created(){
        this.loadFilm(this.$route.params.id);
    },
    methods:{
        ...mapActions(['loadFilm']),
    },
    computed:{
        ...mapGetters({
            film: 'getFilm',
        }),
    }
}
</script>

<style scoped>
    h3{
        font-size: 20px;
        font-family: Tahoma, Verdana, sans-serif;
    }
    iframe{
        width: 100%;
    }
    button{
        font-family: Tahoma, Verdana, sans-serif;
    }
</style>

