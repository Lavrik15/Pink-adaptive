var breakpoint = 700;
input.placeholder = "123";
var place = input.placeholder;
  viewportWidth = window.innerWidth;
if (viewportWidth > breakpoint) {
  alert( 'атрибут:' + input.getAttribute('placeholder') );
  alert( 'свойство:' + place );
};
