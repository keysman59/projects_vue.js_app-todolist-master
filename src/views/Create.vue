<template>
  <div class="create">

    <!-- {{ new Date().getFullYear() }}

    {{ new Date().getMonth() }} -->

    <h3 class="create__caption">Новая задача:</h3>
    <input
      class="create__input"
      placeholder="Название задачи"
      type="text"
      v-model.trim="$v.nameVal.$model"
      @keydown.enter="addTodo
    "
    >
    <div
      class="error"
      v-if="!$v.nameVal.minLength"
    >Название должно содержать не меньше {{$v.nameVal .$params.minLength.min}} символов.</div>
    <div
      class="error"
      v-if="!$v.nameVal.maxLength"
    >Название должно содержать не больше {{$v.nameVal .$params.maxLength.max}} символов.</div>
    <h3 class="create__caption">Описание задачи:</h3>
    <textarea
      type="text"
      class="create__text-area"
      placeholder="Описание задачи"
      v-model.trim="$v.descVal.$model"
      @keydown.enter="addTodo"
    ></textarea>
    <div
      class="error"
      v-if="!$v.descVal.minLength"
    >Описание должно содержать не меньше {{$v.descVal.$params.minLength.min}} символов.</div>
    <div
      class="error"
      v-if="!$v.descVal.maxLength"
    >Описание должно содержать не больше {{$v.descVal.$params.maxLength.max}} символов.</div>
    <h3 class="create__caption">Крайний срок:</h3>

    <date-picker
      v-model="date"
      lang="ru"
      type="date"
      format="YYYY-MM-dd"
      v-model.trim="$v.dateVal.$model"
    ></date-picker>

    <!-- <button class="create__btn" @click="addTodo" :disabled="$v.$invalid">Добавить</button> -->
    <button class="create__btn" @click="addTodo" :disabled="$v.$invalid">Добавить</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import TodoList from '@/components/TodoList';
import DatePicker from "vue2-datepicker";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
// import moment from 'moment';

export default {
  name: "home",
  components: {
    // TodoList,
    DatePicker
  },
  data() {
    return {
      nameVal: "",
      descVal: "",
      dateVal: ""
    };
  },
  validations: {
    nameVal: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(40)
    },
    descVal: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(2048)
    },
    dateVal: {
      required
    }
  },
  computed: {
    dateNew() {
      this.date = new Date(this.dateVal);
      return this.date.toLocaleDateString();
    }
  },
  methods: {
    addTodo() {
      console.log("this.date:");
      console.log(this.dateVal);
      this.$store.dispatch("addTodo", {
        id: this.$store.getters.getTodos.length,
        name: this.nameVal,
        desc: this.descVal,
        date: this.dateNew
      });
      this.nameVal = "";
      this.descVal = "";
      this.dateVal = "";
    }
  }
};
</script>

<style scoped>
.create {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.create__caption {
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 24px;
  letter-spacing: 0.25px;
}

.create__input {
  width: 40%;
  padding: 19px 18px 19px 16px;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ede;
  outline: none;
}

.create__text-area {
  width: 40%;
  height: 160px;
  border-radius: 2px;
  background: white;
  resize: none;
  overflow: auto;
  outline: none;
  padding: 19px 18px 19px 16px;
  border: none;
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.25px;
  color: #000;
  border: 1px solid #ede;
}

.create__btn {
  margin-top: 15px;
  padding: 12px 40px;
    /* color: #FFFFFF; */
  /* background: #8071F3; */
  border: none;
  cursor: pointer;
  outline: none;
}

.error {
  color: #EB5757;
  margin-top: 4px;
}

/* .create__btn {
  margin-top: 30px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  display: block;
  text-align: center;
  letter-spacing: 1.35px;
  text-transform: uppercase;
  color: #FFFFFF;
  background: #8071F3;
  border-radius: 4px;
  border: none;
  padding: 16px 34px;
  width: 40%;
  cursor: pointer;
} */
</style>