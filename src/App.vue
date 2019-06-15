<template>
    <div id="app">
        <div class="toolbar">
            <div class="labels">
                <div class="label">
                    难度: {{level}}x{{level}}~{{activeNum}}
                </div>
                <div class="label">
                    我的记录: {{maxScore}}
                </div>
                <div class="label">
                    本次时间: {{timeStr}}
                </div>
            </div>
            <div class="buttons">
                <button @click="levelUp" :disabled="isMaxLevel()">难度+</button>
                <button @click="levelDown" :disabled="isMinLevel()">难度-</button>
                <button @click="clickStart">{{isStarted() ? '复位':'开始'}}</button>
                <button @click="clickStop" :disabled="!isStarted()">终止</button>
            </div>
        </div>
        <grid :viewSize="viewSize"/>
    </div>
</template>

<script>
    import Grid from './components/Grid.vue'
    import {mapActions, mapGetters, mapState} from "vuex";
    import {store} from "./store";
    import {timeStr} from "./utils/time";

    export default {
        name: 'app',
        components: {
            Grid
        },
        store: store,
        data() {
            return {
                viewSize: 0,
            }
        },
        created() {
            this.reload()
        },
        mounted() {
            this.resize()
        },
        computed: {
            ...mapState(['level', 'step', 'activeNum']),
            ...mapState({
                timeStr: (state) => {
                    return state.time ? timeStr(state.time) : '-'
                },
                maxScore: (state) => {
                    return state.maxScore ? timeStr(state.maxScore) : '-'
                },
            }),
        },
        methods: {
            ...mapActions(['levelUp', 'levelDown', 'clickStart', 'clickStop']),
            ...mapGetters(['isMinLevel', 'isMaxLevel', 'isStarted']),
            resize() {
                let windowWidth = document.documentElement.clientWidth || window.innerWidth || document.body.clientWidth
                this.viewSize = windowWidth * .8
            },
            reload() {
                this.$store.dispatch('reload')
            },
        },
    }
</script>

<style>
    html, body {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        overflow: hidden;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.2rem;
    }

    #app {
        text-align: center;
        margin: 0;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 6%;
    }

    .toolbar {
        width: 100%;
        display: flex;
        flex-direction: row;
        font-size: .4rem;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
        text-align: left;
    }

    button {
        width: 1.8rem;
        height: 1.1rem;
        font-size: .4rem;
        margin: 0 0.1rem;
        border: 1px solid #bbb;
        background: #fff;
    }
</style>
