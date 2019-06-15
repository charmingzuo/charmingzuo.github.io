<template>
    <div id="app">
        <div class="toolbar">
            <div class="labels">
                <div class="label">
                    难度 <span>{{level}}x{{level}}</span>
                </div>
                <div class="label">
                    我的最高记录 <span>{{maxScore}}</span>
                </div>
            </div>
            <div class="buttons">
                <button @click="levelUp" :disabled="isMaxLevel()">难度+</button>
                <button @click="levelDown" :disabled="isMinLevel()">难度-</button>
                <button @click="clickStart">{{isStarted() ? '复位':'开始'}}</button>
                <button @click="clickStop" :disabled="!isStarted()">终止</button>
            </div>
        </div>
        <grid v-if="isStarted()" :viewSize="viewSize"/>
        <div v-else-if="isSuccess()" class="info">
            <div>恭喜过关</div>
            <div>本次时间: {{timeStr}}</div>
        </div>
        <div v-else class="info">请点击「开始」</div>
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
            ...mapGetters(['isMinLevel', 'isMaxLevel', 'isStarted', 'isSuccess']),
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
        font-size: .4rem;
        margin-bottom: 1rem;
    }

    .labels {
        display: flex;
        flex-direction: row;
        margin-bottom: .3rem;
    }

    .label {
        text-align: left;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .label:first-child {
        width: 30%;
    }

    .label > span {
        font-size: .8rem;
        margin-left: .2rem;
    }

    .buttons {
        display: flex;
        flex-direction: row;
    }

    .buttons button {
        flex: 1;
        width: 2rem;
        height: 1.1rem;
        font-size: .4rem;
        border: 1px solid #bbb;
        background: #fff;
        margin-right: 0.2rem;
    }

    .info {
        font-size: .6rem;
        padding-top: 2rem;
    }
</style>
