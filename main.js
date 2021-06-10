// -> Here we are creating instance of Vue object.
// -> 'el' property reffers to the element in the dom.
// -> 'data' property is reffer to data that we want to pass to our dom element.
// -> To display data in dom elemnt we use {{}} that are called experession.
// -> we can use expression for condtions as well.
var app = new Vue({
  el: '#app',
  data: {
    name: 'Athar Laique',
    description: 'I ma a web developer',
  },
});
