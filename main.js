//             Lesson 1
// -> Here we are creating instance of Vue object.
// -> 'el' property reffers to the element in the dom.
// -> 'data' property is reffer to data that we want to pass to our dom element.
// -> To display data in dom elemnt we use {{}} that are called experession.
// -> we can use expression for condtions as well.

//              v-bind
// -> v-bind is use to daynamically bind expression/data with attribute.
// -> v-bind:src="imageUrl" / :src="imageUrl" is syntax to use with attribute.
// -> Here src is attribute an attribute and imageUrl is an expression/data.
// -> Whenever the data property imageUrl change the src attribute will update.
// -> For detail watch https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding.

//            Conditional Rendering
// -> v-if, v-else-if and v-else we use for putt the condtion.

//            Rendring List
// -> v-for we use for rendering arry list of items.
// -> We will also use key for each list item.

//            Event Binding
// -> For click event binding we use @click.
// -> We define event binding functions in methods property.

// ->         Computed
// -> A computed property is used to declaratively describe a value that depends
//    on other values. When you data-bind to a computed property inside the
//    template, Vue knows when to update the DOM when any of the values depended
//    upon by the computed property has changed. This can be very powerful and
//    makes your code more declarative, data-driven and thus easier to maintain.

//          Component
// -> We can split our app in components.
// -> For detail visit https://www.vuemastery.com/courses/intro-to-vue-js/components/
Vue.component('Navbar', {
  props: ['name'],
  template: `<div>
  <div class="nav-bar">
    <span>{{name}}</span>
  </div>
  <div class="pet">
  <div class="pet-image">
    <img :src="imageUrl" alt="" />
  </div>
  <div class="pet-info">
    <h1>{{ name }}</h1>
    <span>{{ title }}</span>
    <p v-if="isPet">{{ description }}</p>
    <p v-else>Its a pet</p>
    <ul v-for="(name, index) in names" :key="index">
      <li>{{ name }}</li>
    </ul>
    <button @click="count +=1">+</button>
    <span>{{ count }}</span>
    <button @click="handleCount()">-</button>
  </div>
</div>
  </div>
  `,
  data() {
    return {
      name: 'Dog',
      description: 'Its a balck dog',
      imageUrl: 'https://picsum.photos/id/237/200/300',
      isPet: false,
      names: ['cat', 'cow', 'tiger'],
      count: 0,
    };
  },
  methods: {
    handleCount() {
      const { count } = this;
      if (count > 0) {
        this.count -= 1;
      }
    },
  },
  computed: {
    title() {
      const { count, name } = this;
      return `${name} ${count}`;
    },
  },
});

var app = new Vue({
  el: '#app',
});
