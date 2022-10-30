function moveElement(evt, callback) {
  const target = evt.target;
  const parent = target.parentNode;
  const parentValues = {
    top: parent.getBoundingClientRect().top + window.scrollY,
    right: parent.getBoundingClientRect().right,
    bottom: parent.getBoundingClientRect().bottom,
    left: parent.getBoundingClientRect().left,
  };

  const targetStyle = target.style;
  targetStyle.boxShadow = '5px 5px 5px #444';
  targetStyle.zIndex = 1000;

  document.body.append(target);
  moveElementAt(evt.pageX, evt.pageY);

  document.addEventListener('mousemove', onMouseMove);

  target.onmouseup = function (evt) {
    document.removeEventListener('mousemove', onMouseMove);
    parent.append(target);
    targetStyle.boxShadow = 'none';
    if (evt.pageY < parentValues.top || evt.pageY > parentValues.bottom || evt.pageX < parentValues.left || evt.pageX > parentValues.right) {
      moveElementAt(parentValues.right / 2 - target.offsetWidth / 2, parentValues.bottom / 2 - target.offsetHeight / 2);
      callback(target, Math.round(target.getBoundingClientRect().top + window.scrollY), Math.round(target.getBoundingClientRect().left), false);
    } else {
      moveElementAt(evt.pageX - parentValues.left, evt.pageY - parentValues.top);
      callback(target, Math.round(target.getBoundingClientRect().top + window.scrollY), Math.round(target.getBoundingClientRect().left), true);
    }
    targetStyle.zIndex = 1;
    target.onmouseup = null;

  };

  function moveElementAt(x, y) {
    targetStyle.left = x - target.offsetWidth / 2 + 'px';
    targetStyle.top = y - target.offsetHeight / 2 + 'px';
  }

  function onMouseMove(evt) {
    moveElementAt(evt.pageX, evt.pageY);
  }
}

export { moveElement };