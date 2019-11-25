<template>
  <div>
    <div class="title_font">00001{{events}}</div>
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
      resourceAreaWidth="15%"
      :slotDuration="calendarCustomize.slotDuration"
      locale="ja"
      editable="true"
      selectable="true"
      @select="addData"
      :visibleRange="visibleRange"
    />
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrapPlugin from "@fullcalendar/bootstrap";

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
        right:
          "today prev, next resourceTimelineYear,resourceTimelineMonth,resourceTimelineWeek,resourceTimelineDay"
      },
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
      events: [
        {
          start: "2019-11-19T10:50:04",
          end: "2019-11-25T18:18:31",
          id: 9214,
          resourceId: 1,
          status: 1,
          title: 9214
        },
        {
          start: "2019-11-19T10:50:04",
          end: "2019-11-25T18:18:31",
          resourceId: 2,
          id: 9214,
          plan_qty: 200000,
          progress: 0.09,
          result_qty: 18000,
          status: 1,
          title: 9214
        },
        {
          start: "2019-11-25T10:50:04",
          end: "2019-11-28T18:18:31",
          resourceId: 3,
          id: 9214,
          plan_qty: 200000,
          progress: 0.09,
          result_qty: 18000,
          status: 1,
          title: 9214
        },
        {
          start: "2019-11-25T10:50:04",
          end: "2019-11-28T18:18:31",
          resourceId: 4,
          id: 9214,
          plan_qty: 200000,
          progress: 0.09,
          result_qty: 18000,
          status: 1,
          title: 9214
        }
      ]
    };
  },
  methods: {
    addData(arg) {
      this.events.push({
        title: 9999,
        start: arg.start,
        end: arg.end,
        resourceId: 3
      });
    }
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
</style>
