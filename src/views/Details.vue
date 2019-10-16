<template>
  <div class="details">
    <div class="detailst-name" @click="openName" v-if="nameOpened">
      {{ currentToDo.todo.name }}
    </div>
    <div class="detailst-name" v-on:keyup.enter="closeName" v-if="!nameOpened">
      <input class="detailst-name__input" v-on:keyup.enter="changeStoreName" v-model="name" />
    </div>
    <div class="detailst-desc" @click="openDesc" v-if="descOpened">
      {{ currentToDo.todo.desc }}
    </div>
    <div class="detailst-desc" v-on:keyup.enter="closeDesc" v-if="!descOpened">
      <input class="detailst-name__input" v-on:keyup.enter="changeStoredesc" v-model="desc" />
    </div>
    <div class="detailst-date">
      {{ currentToDo.todo.date }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'tast-details',
  props: {
    id: {
      type: String
    }
  },
  data() {
    return {
      nameOpened: true,
      descOpened: true,
      name: '',
      desc: '',
    }
  },
  computed: {
    todos() {
      return this.$store.getters.getTodos;
    },
    currentToDo () {
      return this.todos.find(item => item.todo.id === parseInt(this.id))
    }
  },
  methods: {
    openName() {
      this.nameOpened = false;
    },
    closeName() {
      this.nameOpened = true;
    },
    openDesc() {
      this.descOpened = false;
    },
    closeDesc() {
      this.descOpened = true;
    },
    changeStoreName() {
      if(this.name != '') { 
        this.$store.dispatch("setName", { name : this.name, id : this.id });
      }
    },
    changeStoredesc() {
      if(this.desc != '') { 
        this.$store.dispatch("setDesc", { desc : this.desc, id : this.id });
      }
    }    
  }
}
</script>

<style scoped lang="scss">

.details {
  cursor: pointer;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
}

.detailst-name,.detailst-desc,.detailst-date {
  width: 100%;
  border: 1px solid #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
}

.detailst-name:hover,.detailst-desc:hover {
  background: #f8f9fa;
}

.detailst-name {
  height: 20vh;
}

.detailst-name__input {
  width: 100%;
  height: 100%;
  outline: none;
  border: 1px solid #e5e5e5;
  padding: 0 10px;
}

.detailst-desc {
  height: 40vh;
}

.detailst-date {
  height: 10vh;
}

</style>



