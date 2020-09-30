"use strict";
//ボタンを取得
const button = document.getElementById("button");
button.addEventListener("click", function () {
  console.log("押した");
  //videoを取得
  const newVideo = document.createElement("video");
  video.src = "cave.mp4";
  video.setAttribute("controls", "");
  document.body.appendChild(video);
});

// //videoを取得
// const newVideo = document.createElement("video");
// video.src = "send.mp4";
// video.setAttribute("controls", "");
// document.body.appendChild(video);
