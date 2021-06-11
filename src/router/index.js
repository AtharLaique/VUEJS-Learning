import Vue from "vue";
import VueRouter from "vue-router";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
import EventCreate from '../views/EventCreate.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/event/:id",//Step1: add daynamic segment
    name: "EventShow",
    component: EventShow,
    props: true, //Step 5: Enable Props
  },
  {
    path: "/event/create",
    name: "EventCreate",
    component: EventCreate,
  },
];

const router = new VueRouter({
  mode: "history", // Allow browswer to use the history.pushState api for changing the route with out reloading
  base: process.env.BASE_URL,
  routes,
});

export default router;
