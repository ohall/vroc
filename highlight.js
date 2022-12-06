/* global AFRAME */
AFRAME.registerComponent('display', {
  init: function () {
    console.log( 'init display' );
    const displayEls = this.displayEls = document.querySelectorAll('.display');
    this.onClick = this.onClick.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.reset = this.reset.bind(this);

    for (var i = 0; i < displayEls.length; ++i) {
      displayEls[i].addEventListener('mouseenter', this.onMouseEnter);
      displayEls[i].addEventListener('mouseleave', this.onMouseLeave);
      displayEls[i].addEventListener('click', this.onClick);
    }
  },

  onClick: function (evt) {
    console.log( evt.target.id );
    evt.target.pause();
    evt.target.setAttribute('material', 'color', '#046de7');
    this.el.addState('clicked');
    // evt.target.object3D.scale.set(1.2, 1.2, 1.2);
  },

  onMouseEnter: function (evt) {
    console.log( 'onMouseEnter' );
    var displayEls = this.displayEls;
    evt.target.setAttribute('material', 'color', '#046de7');
    for (var i = 0; i < displayEls.length; ++i) {
      if (evt.target === displayEls[i]) { continue; }
      displayEls[i].setAttribute('material', 'color', 'white');
    }
  },

  onMouseLeave: function (evt) {
    console.log( 'onMouseLeave' );
    if (this.el.is('clicked')) { return; }
    evt.target.setAttribute('material', 'color', 'white');
  },

  reset: function () {
    var displayEls = this.displayEls;
    for (var i = 0; i < displayEls.length; ++i) {
      this.el.removeState('clicked');
      displayEls[i].play();
      displayEls[i].emit('mouseleave');
    }
  }
});
