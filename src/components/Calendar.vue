<template>
  <FullCalendar
    :schedulerLicenseKey="calendarCustomize.schedulerLicenseKey"
    :plugins="calendarCustomize.plugins"
    :defaultView="calendarCustomize.defaultView"
    :height="calendarCustomize.height"
    :resources="calendarCustomize.events"
    :slotDuration="calendarCustomize.slotDuration"
  />
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";

export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarCustomize: {
        schedulerLicenseKey: "GPL-My-Project-Is-Open-Source",
        plugins: [resourceTimelinePlugin],
        defaultView: "resourceTimelineDay",
        height: "auto",
        slotDuration: { days: 1 },
        resources:
          "https://fullcalendar.io/demo-resources.json?with-nesting&with-colors",
        // Resourcesごとのイベントのデモデータ
        events:
          "https://fullcalendar.io/demo-events.json?single-day&for-resource-timeline"
      }
    };
  }
};
</script>

<style lang="scss">
@import "~@fullcalendar/core/main.css";
@import "~@fullcalendar/timeline/main.css";
@import "~@fullcalendar/resource-timeline/main.css";
</style>
