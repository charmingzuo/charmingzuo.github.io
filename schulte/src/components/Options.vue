<template>
    <div>
        <button @click="levelUp">难度+</button>
        <button @click="levelDown">难度-</button>
        <button @click="clickStart">重置</button>
    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "Options",
        data() {
            return {
                lv: 3,
            }
        },
        methods: {
            ...mapActions(['levelUp', 'levelDown', 'clickStart']),
        },
    }
</script>

<style scoped>
    button {
        width: 3rem;
        height: 1.2rem;
        font-size: .6rem;
        margin: 0 0.2rem;
        border: 1px solid #bbb;
        background: #fff;
    }
</style>