"use strict";

// Function to get JASON file
export default async function GetJason(url, errorMsg = "Something went wrong") {
  const randomAdvice = await fetch(url);
  if (!randomAdvice.ok) throw new Error(`${errorMsg} (${randomAdvice.status})`);
  const { slip } = await randomAdvice.json();
  return slip;
}
