<template>
  <div class="create">
    <div class="form-group">
      <label>品番入力</label>
      <input class="form-control" v-model="item" placeholder="品番を入力してください" />
    </div>
    <div class="form-group">
      <label>開始時間入力</label>
      <input class="form-control" type="date" v-model="start_date" placeholder="品番を入力してください" />
    </div>
    <button class="btn btn-primary">作成</button>
  </div>
</template>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap.scss";
</style>

<script>
import moment from "moment";
export default {
  name: "Create",
  data() {
    return {
      item: [],
      start_date: moment().format("YYYY-MM-DD")
    };
  }
};
</script>


