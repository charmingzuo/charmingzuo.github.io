import Vuex, {Store} from 'vuex'
import Vue from "vue";

Vue.use(Vuex)


const _isValidLevel = lv => lv >= 2 && lv <= 30
const _isMinLevel = lv => lv <= 2
const _isMaxLevel = lv => lv >= 30
const _getMaxScore = () => parseInt(localStorage.getItem('MAX_SCORE'), 10) || 0
const _saveMaxScore = score => {
    if (score > _getMaxScore()) {
        localStorage.setItem('MAX_SCORE', score)
    }
}

export const store = new Store({
    state: {
        level: 0,
        maxNum: 0,
        grid: [],
        activeNum: 0,
        step: 'STOP', // START
        start: 0,
        end: 0,
        time: 0,
        maxScore: _getMaxScore(),
    },
    mutations: {
        changeLevel(state, change) {
            if (_isValidLevel(state.level + change)) {
                state.level += change
            }
        },
        setLevel(state, level) {
            if (_isValidLevel(level)) {
                state.level = level
            }
        },
        updateGrid(state) {
            let level = state.level
            let maxNum = level * level
            let nums = new Array(maxNum)
            for (let i = 0; i < maxNum; i++) {
                nums[i] = i + 1
            }
            nums.sort(() => 0.5 - Math.random())

            let grid = new Array(level)
            for (let i = 0; i < level; i++) {
                grid[i] = nums.slice(i * level, (i + 1) * level)
            }
            state.level = level
            state.maxNum = maxNum
            state.grid = grid
        },
        clearGrid(state) {
            state.grid = []
            state.maxNum = 0
        },
        start(state) {
            state.step = 'START'
            state.active = 0
            state.start = Date.now()
            state.end = 0
            state.time = 0
        },
        stop(state) {
            state.step = 'STOP'
            state.active = 0
            state.start = 0
            state.end = 0
            state.time = 0
        },
        active(state, num) {
            if (num === state.activeNum + 1) { // 必须一个个点
                state.activeNum = num
                if (num === state.maxNum) { // 结束
                    state.time = Date.now() - state.start
                    state.step = 'STOP'
                    state.start = 0
                    state.end = 0
                    state.active = 0

                    _saveMaxScore(state.time)
                }
            }
        },
    },
    actions: {
        levelUp({commit, state}) {
            commit('changeLevel', 1)
            commit('clearGrid')
            commit('stop')
            localStorage.setItem('GRID_SIZE', state.level)
        },
        levelDown({commit, state}) {
            commit('changeLevel', -1)
            commit('clearGrid')
            commit('stop')
            localStorage.setItem('GRID_SIZE', state.level)
        },
        reload({commit}) {
            let lv = parseInt(localStorage.getItem('GRID_SIZE'), 10) || 0
            if (lv > 0) {
                commit('setLevel', lv)
            } else {
                commit('setLevel', 4)
            }
        },
        clickNum({commit, state}, {num}) {
            if (state.step === 'START') {
                commit('active', num)
            }
        },
        clickStart({commit}) {
            commit('start')
            commit('updateGrid')
        },
        clickStop({commit}) {
            commit('stop')
        },
    },
    getters: {
        isMinLevel: state => _isMinLevel(state.level),
        isMaxLevel: state => _isMaxLevel(state.level),
        isStarted: state => state.step === 'START',
    },
})