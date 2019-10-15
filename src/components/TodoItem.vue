<template>
  <div class="todo-item">
    <!-- <input class="todo-item__input" type="checkbox" v-model="data.check"/> -->
    <!-- Отобразить data.todo:
    {{data.todo}}
    Отобразить data:
    {{ data }}-->
    <router-link :to="'/tast-details/' + data.todo.index">✎</router-link>
    <div class="index-block">{{ data.todo.index + 1 }}</div>
    <div class="name-block">{{ data.todo.name }}</div>
    <div class="desc-block">{{ data.todo.desc }}</div>
    <div class="date-block">{{ data.todo.date }}</div>

    <!-- <button class="todo-item__btn" v-if="!data.archive" @click="setArchive">В архив</button> -->
  </div>
</template>

<script>
export default {
  props: ["data", "index"],
  methods: {
    setArchive() {
      this.$store.dispatch("archive", this.index);
    }
  }
};
</script>

<style scoped>
.todo-item {
  height: 50px;
  display: flex;
  width: 100%;
  border-bottom: 1px solid #5e5e5e;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.todo-item:last-child {
  border: none;
}

.name-block,
.desc-block,
.date-block {
}

.index-block {
  width: 10%;
  text-align: left;
}

.name-block {
  width: 25%;
  text-align: left;
}

.desc-block {
  width: 50%;
  text-align: left;
}

.date-block {
  width: 20%;
  text-align: right;
}
</style>
