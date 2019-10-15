<template>
  <div class="details">
    <!-- <pre>
      {{ todos }}
    </pre> -->

    <!-- {{currentToDo.todo.name}} -->
    <!-- {{ todos[1] }}  -->
    <div class="detailst-name" @click="openName" v-if="nameOpened">
      {{ currentToDo.todo.name }}
    </div>
    <div class="detailst-name" v-on:keyup.enter="closeName" v-if="!nameOpened">
      <input class="detailst-name__input" v-model="name" />
    </div>

    <div class="detailst-desc">
      {{ currentToDo.todo.desc }}
    </div>

    <div class="detailst-date">
      {{ currentToDo.todo.date }}
    </div>
   
  </div>

</template>


  <!-- <div class="wrapper">

    <div class="top-block">

      <div class="left-block">
        <h4 class="top-block__caption"  v-if="visibleCaption" @click.prevent="hideCaption">{{text}}</h4>
        <div class="category-block" v-if="!visibleCaption">
          <input v-model.lazy="text" class="category-block__input" type="text" />
          <button href="#" @click.prevent="onClick" class="category-block__btn">Отправить</button>
        </div>
      </div>
    </div>
  </div> -->

<!-- </template>












  </div>
</template> -->

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
      name: '',


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
      console.log("change openName");
      this.nameOpened = false;
    },
    closeName() {
      this.nameOpened = true;
      this.$store.dispatch('addTodo', {name: this.name, desc: this.descVal, date: this.dateNew});
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

.detailst-name {
  height: 20vh;
}

.detailst-name__input {
  width: 100%;
  height: 100%;
  outline: none;
  border: 1px solid #e5e5e5;
}

.detailst-desc {
  height: 40vh;
}

.detailst-date {
  height: 10vh;
}


// .wrapper {
//     // TOP
//     .top-block {
//         display: flex;
//         width: 60%;
//         .left-block {
//             padding: 30px;
//             width: 30%;
//             display: flex;
//             align-items: center;
//             background: #f8f9fa;
//             border: 1px solid #d3d9df;
//             color: #212529;
//             margin-left: 15px;
//             &:hover {
//                 color: #212529;
//                 background-color: #dae0e5;
//                 border-color: #d3d9df;
//                 cursor: pointer;
//             &__caption {
//                 // background: #f8f9fa;
//                 // border-color: #f8f9fa;
//                 // color: #212529;
//                 // width: 30%;
//                 // display: block;
//                 // cursor: pointer;
//                 // padding: 1.2em;
//             }
//             .category-block {
//                 &__input {
    
//                 }
//                 &__btn {
    
//                 }
//             }
//         }
//         .add-field {
//             padding: 30px;
//             display: flex;  
//             flex-direction: row;
//             margin-left: 15px;
//             background: #f8f9fa;
//             border: 1px solid #d3d9df;
//             color: #212529;
//             width: 85%;
//             display: block;
//             cursor: pointer;
//             padding: 1.2em;
//             display: flex;
//             align-items: center;
//             border-radius: 50px;

//             &:hover {
//                 color: #212529;
//                 background-color: #dae0e5;
//                 border-color: #d3d9df;
//                 cursor: pointer;
//             }
//             &__icon {
//                 padding-left: 10px;
//                 font-size: 20px;
//             }
//             &__caption {
//                 padding-left: 10px;
//             }
//         }
//     }


//     }

//     // PROJECT
//     .add-project {
//         padding: 30px;
//         width: 10%;
//         &__icon {
//             font-size: 100px;
//             color: #28a745;
//         }
//         &:hover {
//             cursor: pointer;
//         }
//     }
// }

// body {
//     font-family: Arial !important;
// }

</style>



