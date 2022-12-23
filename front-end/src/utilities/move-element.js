function moveElement(evt, callback) {

  const target = evt.target;
  const shiftX = evt.clientX - target.getBoundingClientRect().left;
  const shiftY = evt.clientY - target.getBoundingClientRect().top;
  const targetStyle = target.style;
  const parent = target.parentNode;
  const parentValues = {
    top: parent.getBoundingClientRect().top + window.scrollY,
    right: parent.getBoundingClientRect().right,
    bottom: parent.getBoundingClientRect().bottom,
    left: parent.getBoundingClientRect().left,
  };

  //move element to a coordinate
  function moveElementAt(x, y) {
    targetStyle.left = x - shiftX + 'px';
    targetStyle.top = y - shiftY + 'px';
  }

  //is the last function that is called
  function endFunction(x, y) {
    const finalX = x - shiftX - parentValues.left;
    const finalY = y - shiftY - parentValues.top;
    document.removeEventListener('mousemove', onMouseMove);
    parent.append(target);
    targetStyle.boxShadow = 'none';
    targetStyle.zIndex = 1;
    target.onmouseup = null;
    window.oncontextmenu = null;
    targetStyle.left = finalX / parent.offsetWidth * 100 + '%';
    targetStyle.top = finalY / parent.offsetHeight * 100 + '%';
    callback({ element: target, x: targetStyle.left, y: targetStyle.top });
  }

  //moves the element to the mouse position, in case the element leaves the section it sends it to the center
  function onMouseMove(evt) {
    const targetValues = {
      top: target.getBoundingClientRect().top + window.scrollY,
      right: target.getBoundingClientRect().right,
      bottom: target.getBoundingClientRect().bottom,
      left: target.getBoundingClientRect().left,
    };
    if (targetValues.top < parentValues.top || targetValues.bottom > parentValues.bottom || targetValues.left < parentValues.left || targetValues.right > parentValues.right) {
      endFunction(Math.round(parentValues.right / 2), Math.round(parentValues.bottom / 2));
    } else {
      moveElementAt(evt.pageX, evt.pageY);
    }
  }

  targetStyle.boxShadow = '5px 5px 5px #444';
  targetStyle.zIndex = 1000;
  document.body.append(target);
  moveElementAt(evt.pageX, evt.pageY);

  document.addEventListener('mousemove', onMouseMove);
  target.onmouseup = function (evt) {
    endFunction(evt.pageX, evt.pageY);
  };

}

export { moveElement };