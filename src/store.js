import Vue from 'vue'
import Vuex from 'vuex'
import moment from "moment"
import axios from "axios"
import 'es6-promise/auto'
Vue.use(Vuex)

// var resourceids = ["null", "flow1", "flow2", "mold1", "mold2"]

export default new Vuex.Store({
    state: {
        items: "",
        // items: [
        //     {},
        //     {
        //         start: "2019-11-19T10:50:04",
        //         end: "2019-11-25T18:18:31",
        //         resourceId: "1",
        //         title: 9214
        //     },
        //     {
        //         start: "2019-11-19T10:50:04",
        //         end: "2019-11-25T18:18:31",
        //         resourceId: "2",
        //         title: 9214
        //     },
        //     {
        //         start: "2019-11-25T10:50:04",
        //         end: "2019-11-28T18:18:31",
        //         resourceId: 3,
        //         id: 9214,
        //         status: 1,
        //         title: 9214
        //     },
        //     {
        //         start: "2019-11-25T10:50:04",
        //         end: "2019-11-28T18:18:31",
        //         resourceId: 4,
        //         id: 9214,
        //         status: 1,
        //         title: 9214
        //     }
        // ]
    },
    mutations: {
        drop(state, info) {
            state.items.items[info.event._def.resourceIds[0]].start = info.event.start
            state.items.items[info.event._def.resourceIds[0]].end = info.event.end
            state.items.items[info.event._def.resourceIds[0]].title = moment(info.event.end).diff(info.event.start, "days") + 1
            state.items.items[info.event._def.resourceIds[0]].resourceId = info.event._def.resourceIds[0]
        },
        resize(state, info) {
            state.items.items[info.event._def.resourceIds[0]].start = info.event.start
            state.items.items[info.event._def.resourceIds[0]].end = info.event.end
            state.items.items[info.event._def.resourceIds[0]].title = moment(info.event.end).diff(info.event.start, "days") + 1
            state.items.items[info.event._def.resourceIds[0]].resourceId = info.event._def.resourceIds[0]
        },
        getItems(state, api) {
            state.items = api;
        }
    },
    getters: {
        getresourceId: (state) => (resourceId) => {
            return state.items.find(item => item.resourceId == resourceId)
        }
    },
    actions: {
        async getItems(context) {
            const payload = { items: "" };
            await axios
                .get("http://127.0.0.1:5000/")
                .then(response => { payload.items = response });
            context.commit("getItems", payload.items.data);
        }

    }
})