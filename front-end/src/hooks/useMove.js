import { moveElement } from "utilities/move-element";
import { useEffect } from "react";

function useMove(element, callback) {
  useEffect(() => {
    element.current.onmousedown = function (evt) {
      moveElement(evt, (element) => callback(element));
    };

    element.current.ondragstart = function () {
      return false;
    };
  }, []);
}

export { useMove };