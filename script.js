`use strict`;

import { data } from "./data.js";
const $container = document.querySelector(".container");
//!  Як на мене цей метод виглядає краще, якщо нам потрібно виділяти деякі дані, хоча і потребує трохи синтаксису на створення структури тегів в HTML
for (let i = 0; i < data.length; i++) {
  const $item = document.createElement("div");
  $item.className = "item";
  $container.appendChild($item);
  const $language = document.createElement("span");
  $item.appendChild($language);
  const $line = document.createElement("div");
  $line.className = "line";
  $item.appendChild($line);

  const $popularity = document.createElement("span");
  $line.appendChild($popularity);
  const changeInPercentage = 5;
  // * Рішення
  $language.textContent += data[i].language;
  $popularity.textContent += data[i].popularity;
  $line.style.width = `${data[i].popularity * changeInPercentage}%`;
  if (data[i].popularity > 15) {
    $line.classList.add("topOne");
  } else if (data[i].popularity < 1) {
    $line.classList.add("old");
    $item.appendChild($popularity);
  }
}

//! Класика, але мені не сильно подобається виляд коду через InnerHTML в даному випадку
// for (let i = 0; i < data.length; i++) {
//   if (data[i].popularity > 15) {
//     $container.innerHTML += `<div class="item">
//         <span>${data[i].language}</span>
//         <div class="line" style="width:${
//           data[i].popularity * 4
//         }%;background-color: rgb(2, 49, 120)"><span>${
//       data[i].popularity
//     }</span></div>
//       </div> `;
//   } else if (data[i].popularity > 1 && data[i].popularity < 15) {
//     $container.innerHTML += `<div class="item">
//         <span>${data[i].language}</span>
//         <div class="line" style="width:${data[i].popularity * 4}%"><span>${
//       data[i].popularity
//     }</span></div>
//       </div> `;
//   } else {
//     $container.innerHTML += `<div class="item">
//         <span>${data[i].language}</span>
//         <div class="line" style="width:${
//           data[i].popularity * 4
//         }%; background-color: rgb(94, 94, 94)"><span>${
//       data[i].popularity
//     }</span></div>
//       </div> `;
//   }
// }
