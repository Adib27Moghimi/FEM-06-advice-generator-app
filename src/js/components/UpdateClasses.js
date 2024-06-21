"use strict";

// Utility function to update classes
export default function UpdateClasses(element, classesToRemove, classesToAdd) {
  element.classList.remove(...classesToRemove);
  element.classList.add(...classesToAdd);
}
