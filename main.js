//              Lesson 1
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
var app = new Vue({
  el: '#app',
  data: {
    name: 'Dog',
    description: 'Its a balck dog',
    imageUrl: 'https://picsum.photos/id/237/200/300',
    isPet: false,
    names: ['cat', 'cow', 'tiger'],
  },
});
