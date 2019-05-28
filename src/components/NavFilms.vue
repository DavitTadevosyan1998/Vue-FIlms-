<template>
    <div>
        <b-navbar toggleable="lg" type="dark" style="background-color:#343434">
            <b-navbar-brand :to="{name:'home'}" >Vue Films</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item :to="{name:'home'}" :class="{active : filter == 'films'}" @click="filter = 'films'">Films</b-nav-item>
                    <b-nav-item :class="{active : filter == 'new'}" @click="filter = 'new'">New Films</b-nav-item>
                    <b-nav-item :class="{active : filter == 'top'}" @click="filter = 'top'">TOP-250</b-nav-item>
                    <b-nav-item :class="{active : filter == 'series'}" @click="filter = 'series'">TV series</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name:'NavFilms',
    data(){
        return{
            filter:'films'
        }
    },
}
</script>

<style>
    .active{
        color: #fff;
    }
</style>

