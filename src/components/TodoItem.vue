<template>
  <div class="todo-item">
    <!-- <input class="todo-item__input" type="checkbox" v-model="data.check"/> -->
    <!-- Отобразить data.todo:
    {{data.todo}}-->
    <!-- Отобразить data:
    <pre> 
    {{ data }}
    </pre>
    {{ data }} : {{ index }}-->
    <router-link :to="'/tast-details/' + data.todo.id">✎</router-link>
    <div class="index-block">{{ data.todo.id + 1 }}</div>
    <div class="archive__btn-block" v-if="!data.archive">
      <button class="todo-item__btn" @click="setArchive">в архив</button>
    </div>
    <div class="archive__btn-block">
      <button class="todo-item__btn" v-if="data.archive" @click="setTask">к выполнению</button>
    </div>

    <div class="name-block">{{ data.todo.name }}</div>
    <div class="desc-block">{{ data.todo.desc | truncate(data.todo.desc.length, '...') }}</div>
    <div class="date-block">{{ data.todo.date }}</div>
  </div>
</template>

<script>
export default {
  props: ["data", "index"],
  methods: {
    setArchive() {
      this.$store.dispatch("archive", this.index);
    },
    setTask() {
      this.$store.dispatch("task", this.index);
    }
  },
  filters: {
    truncate(text, length, suffix) {
      console.log(length);
      if (length > 60) {
        return text.substring(0, 65) + suffix;
      } else {
        return text;
      }
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
  width: 3%;
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
  width: 13%;
  text-align: right;
}

.archive__btn-block {
  width: 10%;
}

.todo-item__btn {
}
</style>
