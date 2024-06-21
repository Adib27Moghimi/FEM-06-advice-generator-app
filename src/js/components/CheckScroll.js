"use strict";

// Check scroll function
export default function CheckScroll(element) {
  element.classList.toggle(
    "overflow-y-scroll",
    element.scrollHeight > element.clientHeight
  );
}
