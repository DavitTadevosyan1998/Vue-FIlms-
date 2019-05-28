<template>
    <div id="filmsItem">
        <b-container>
            <div id="body"> 
                <img class="imgLogo" src="./../assets/col-1-head.jpeg" alt="">
                <div style="margin-bottom: 20px" class="text-center">
                    <h3>Search Films</h3>
                    <input  type="text" v-model="text">
                    <b-button style="margin-top: -5px; margin-left: 10px;" variant="outline-success" @click="save">Submit</b-button>
                </div>
                <b-row class="text-center items">
                    <b-col v-for="(film,key) in films" :key="'films_'+key" class="item" cols='4' sm="4" md="4" lg="4" xl="4">
                        <router-link :to="{name:'itemsData', params:{id:film.imdbID}}">
                            <img class="imgItem" :src="film.Poster" alt="Not Found"> 
                            <p>{{ film.Title }}</p>
                        </router-link>
                    </b-col>
                </b-row>
            </div>
        </b-container>
    </div>
</template>


<script>
import {mapGetters, mapActions} from 'vuex';

export default {
    name:'FilmsItem',
    watch:{
        "films":{
            handler:function(newVal) {
                console.log(newVal);
            },
            deep:true
        }
    },
    data(){
        return{
            text:''
        }
    },
    created(){
        this.loadFilms('Films');
        console.log(this.films[2])
    },
    methods:{
        ...mapActions(['loadFilms']),
        save(){
            this.loadFilms(this.text);
        }
    },
    computed:{
        ...mapGetters({
            films: 'getFilms',
        }),
    }
}
</script>

<style>
    #filmsItem{
        padding: 120px;
    }

    #body{
        background-color: #fff;
        width: 80%;
        height: 100%;
        margin: 0 auto;
    }

    input{
        border-radius: 5px;
        padding: 5px 5px 5px 5px;
    }

    .items{
        padding: 45px;
    }

    .item{
        margin-bottom: 25px;
    }

    img{
        width: 100%;
    }

    .imgItem{
        height: 300px;
    }

    p{
        margin: 22px auto;
        font-size: 20px;
        font-family: Tahoma, Verdana, Segoe, sans-serif;
    }
</style>
