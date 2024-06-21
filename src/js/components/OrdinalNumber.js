"use strict";

// Function to convert integers in ordinal numbers
export default function OrdinalNumber(integer1UP) {
  return `${integer1UP}${
    ["th", "st", "nd", "rd"][
      (integer1UP % 100 > 10 && integer1UP % 100 < 14) || integer1UP % 10 > 3
        ? 0
        : integer1UP % 10
    ]
  }`;
}
