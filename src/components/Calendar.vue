<template>
  <div>
    <div class="title_font">品番 00001</div>
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
    />
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrapPlugin from "@fullcalendar/bootstrap";

export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarCustomize: {
        schedulerLicenseKey: "GPL-My-Project-Is-Open-Source",
        plugins: [resourceTimelinePlugin, bootstrapPlugin, interactionPlugin],
        defaultView: "resourceTimelineMonth",
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
      resourceGroupField: "groupId",
      resourceColumns: [{ labelText: "工程", field: "title" }],
      resources: [
        { groupId: "図面作成", id: "1", title: "計画" },
        { groupId: "図面作成", id: "2", title: "実績" },
        { groupId: "金型作成", id: "3", title: "計画" },
        { groupId: "金型作成", id: "4", title: "実績" },
        { groupId: "品確", id: "5", title: "計画" },
        { groupId: "品確", id: "6", title: "実績" },
        { groupId: "輸送", id: "7", title: "計画" },
        { groupId: "輸送", id: "8", title: "実績" },
        { groupId: "PPAP", id: "9", title: "計画" },
        { groupId: "PPAP", id: "10", title: "実績" },
        { groupId: "出荷", id: "11", title: "計画" },
        { groupId: "出荷", id: "12", title: "実績" },
        { groupId: "着日", id: "13", title: "計画" },
        { groupId: "着日", id: "14", title: "実績" }
      ],
      events: [
        {
          end: "2019-11-25T18:18:31",
          id: 9214,
          plan_qty: 200000,
          progress: 0.09,
          resourceId: 1,
          result_qty: 18000,
          start: "2019-11-19T10:50:04",
          status: 1,
          title: 9214
        },
        {
          end: "2019-11-25T18:18:31",
          id: 9214,
          plan_qty: 200000,
          progress: 0.09,
          resourceId: 2,
          result_qty: 18000,
          start: "2019-11-19T10:50:04",
          status: 1,
          title: 9214
        },
        {
          end: "2019-11-28T18:18:31",
          id: 9214,
          plan_qty: 200000,
          progress: 0.09,
          resourceId: 3,
          result_qty: 18000,
          start: "2019-11-25T10:50:04",
          status: 1,
          title: 9214
        },
        {
          end: "2019-11-28T18:18:31",
          id: 9214,
          plan_qty: 200000,
          progress: 0.09,
          resourceId: 4,
          result_qty: 18000,
          start: "2019-11-25T10:50:04",
          status: 1,
          title: 9214
        }
      ]
    };
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
