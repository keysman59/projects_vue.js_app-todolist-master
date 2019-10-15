import Vue from "vue";
import Router from "vue-router";
import Create from "./views/Create.vue";
import TaskList from "./views/TaskList.vue";
import Details from "./views/Details.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "create",
      component: Create
    },
    {
      path: "/list",
      name: "list",
      component: TaskList
    },
    {
      path: "/tast-details/:id",
      name: "tast-details",
      props: true,
      component: Details
    }
  ]
});
