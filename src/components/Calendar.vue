<template>
  <div>
    <button @click="save" class="btn btn-primary">保存</button>
    <div class="title_font">{{events[0].itemName}}</div>
    <FullCalendar
      :plugins="calendarCustomize.plugins"
      :events="events"
      :defaultView="calendarCustomize.defaultView"
      :schedulerLicenseKey="calendarCustomize.schedulerLicenseKey"
      :resourceGroupField="resourceGroupField"
      :resourceColumns="resourceColumns"
      :nowIndicator="true"
      :height="calendarCustomize.height"
      :header="header"
      :resources="resources"
      :slotLabelFormat="slotLabelFormat"
      resourceAreaWidth="10%"
      slotWidth="45"
      :slotDuration="calendarCustomize.slotDuration"
      locale="en"
      editable="true"
      selectable="true"
      @select="select"
      @eventDrop="eventDrop"
      @eventResize="eventResize"
      :visibleRange="visibleRange"
    />
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrapPlugin from "@fullcalendar/bootstrap";
// import { mapState } from "vuex";
import store from "../store.js";
import axios from "axios";

import moment from "moment";
moment.locale("ja");

export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarCustomize: {
        schedulerLicenseKey: "GPL-My-Project-Is-Open-Source",
        plugins: [resourceTimelinePlugin, bootstrapPlugin, interactionPlugin],
        defaultView: "resourceTimeline",
        height: "auto",
        slotDuration: { days: 1 },
        events: []
      },
      header: {
        left: "title",
        center: "",
        right: ""
      },
      slotLabelFormat: [
        { month: "long", year: "numeric" },
        { weekday: "short" },
        { day: "numeric" }
      ],
      visibleRange: { start: "2019-11-20", end: "2020-05-01" },
      resourceGroupField: "groupId",
      resourceColumns: [{ labelText: "工程", field: "title" }],
      resources: [
        { groupId: "図面作成", id: "1", title: "計画", eventColor: "#6fc2d0" },
        { groupId: "図面作成", id: "2", title: "実績", eventColor: "#ff8246" },
        { groupId: "金型作成", id: "3", title: "計画", eventColor: "#6fc2d0" },
        { groupId: "金型作成", id: "4", title: "実績", eventColor: "#ff8246" },
        { groupId: "品確", id: "5", title: "計画", eventColor: "#6fc2d0" },
        { groupId: "品確", id: "6", title: "実績", eventColor: "#ff8246" },
        { groupId: "輸送", id: "7", title: "計画", eventColor: "#6fc2d0" },
        { groupId: "輸送", id: "8", title: "実績", eventColor: "#ff8246" },
        { groupId: "PPAP", id: "9", title: "計画", eventColor: "#6fc2d0" },
        { groupId: "PPAP", id: "10", title: "実績", eventColor: "#ff8246" },
        { groupId: "出荷", id: "11", title: "計画", eventColor: "#6fc2d0" },
        { groupId: "出荷", id: "12", title: "実績", eventColor: "#ff8246" },
        { groupId: "着日", id: "13", title: "計画", eventColor: "#6fc2d0" },
        { groupId: "着日", id: "14", title: "実績", eventColor: "#ff8246" }
      ],
      events: ""
    };
  },
  methods: {
    select(selectioninfo) {
      if (confirm("追加しますか?")) {
        this.events.push({
          title: moment(selectioninfo.end).diff(selectioninfo.start, "days"),
          start: selectioninfo.start,
          end: selectioninfo.end,
          resourceId: selectioninfo.resource.id
        });
      }
    },
    eventDrop(info) {
      if (!confirm("変更しても構いませんか?")) {
        info.revert();
      } else {
        store.commit("drop", info);
        // store.state.flow1.push({
        //   title: moment(info.event.end).diff(info.event.start, "days") + 1,
        //   start: info.event.start,
        //   end: info.event.end,
        //   resourceId: info.event._def.resourceIds[0]
      }
    },
    eventResize(info) {
      if (!confirm("変更しても構いませんか?")) {
        info.revert();
      } else {
        store.commit("resize", info);
      }
    },
    save: function() {
      axios.post("http://127.0.0.1:5000/api", this.events);
    }
  },
  async created() {
    await store.dispatch("getItems");
    this.events = store.state.items.items;
  }
};
</script>

<style lang="scss">
@import "~@fullcalendar/core/main.css";
@import "~@fullcalendar/timeline/main.css";
@import "~@fullcalendar/resource-timeline/main.css";
@import "~@fullcalendar/bootstrap/main.css";

div {
  &.title_font {
    font-size: 30px;
  }
}
.fc-sun {
  background-color: #eeeeee;
}
.fc-sat {
  background-color: #eeeeee;
}
.fc-cell-content {
  background-color: #ffffff;
}
</style>
