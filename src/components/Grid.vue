<template>
    <div class="grid">
        <table cellpadding="0"
               cellspacing="0"
               :style="{width: viewSize+'px', height: viewSize+'px', fontSize: 4 / level + 'rem'}">
            <tr v-for="(row,i) in grid"
                :key="i"
                :style="{height: 100 / level + '%'}">
                <td v-for="(num, j) in row"
                    :key="j"
                    :style="{width: 100 / level + '%'}"
                    :class="{active: activeNum === num}">
                    <div @click="clickNum({num})">{{num}}</div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import {mapActions, mapState} from "vuex";

    export default {
        name: 'grid',
        props: {
            viewSize: {
                type: Number,
                default: 0,
            },
        },
        computed: mapState({
            level: 'level',
            maxNum: 'maxNum',
            grid: 'grid',
            activeNum: 'activeNum',
        }),
        methods: {
            ...mapActions(['clickNum']),
        },
    }
</script>

<style scoped>
    table {
        width: 100%;
        font-size: 1rem;
    }

    td {
        border: 1px solid #bbb;
    }

    td > div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    td.active > div {
        animation: fade 0.3s;
    }

    @keyframes fade {
        0% {
            background: #fff;
        }
        50% {
            background: #c5f7fc;
        }
        100% {
            background: #fff;
        }
    }
</style>
