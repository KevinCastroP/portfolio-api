import { moveElement } from "utilities/move-element";
import { useEffect } from "react";

function useMove(element, callback = () => { }) {
  useEffect(() => {
    if (Boolean(element)) {
      element.current.onmousedown = function (evt) {
        moveElement(evt, (element) => callback(element));
      };

      element.current.ondragstart = function () {
        return false;
      };
    } else {
      throw "useMove hook needs a mandatory element";
    }
  }, []);
}

export { useMove };