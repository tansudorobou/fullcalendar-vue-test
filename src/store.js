import Vue from 'vue'
import Vuex from 'vuex'
import moment from "moment"
import 'es6-promise/auto'
Vue.use(Vuex)

// var resourceids = ["null", "flow1", "flow2", "mold1", "mold2"]

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        empty: {
        },
        flow1: {
            start: "2019-11-19T10:50:04",
            end: "2019-11-25T18:18:31",
            resourceId: "1",
            title: 9214
        },
        flow2: {
            start: "2019-11-19T10:50:04",
            end: "2019-11-25T18:18:31",
            resourceId: "2",
            title: 9214
        },
        mold1: {
            start: "2019-11-25T10:50:04",
            end: "2019-11-28T18:18:31",
            resourceId: 3,
            id: 9214,
            status: 1,
            title: 9214
        },
        mold2: {
            start: "2019-11-25T10:50:04",
            end: "2019-11-28T18:18:31",
            resourceId: 4,
            id: 9214,
            status: 1,
            title: 9214
        }
    },
    mutations: {
        drop(state, info) {
            state.flow1.start = info.event.start
            state.flow1.end = info.event.end
            state.flow1.title = moment(info.event.end).diff(info.event.start, "days") + 1
            state.flow1.resourceId = info.event._def.resourceIds[0]
        }
    }
})