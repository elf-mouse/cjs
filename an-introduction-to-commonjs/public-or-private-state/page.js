function buttonClick(event) {}

var Page = {
  onDomLoaded: function() {
    var ele = document.getElementById('myButton');
    ele.addEventListener('click', buttonClick);
  }
};

module.exports = Page;
