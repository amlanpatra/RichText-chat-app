// let arr = [
//   [2, 3],
//   //   [0, 6],
//   //   [2, 10],
//   //   [12, 17],
// ];

// let my_string = "Thisofd";

// let str2 = "";
// var tag = "</Strong>";
// function changeStrong() {
//   if (tag === "<Strong>") {
//     tag = "</Strong>";
//   } else {
//     tag = "<Strong>";
//   }
//   return tag;
// }
// for (let i = 0; i < my_string.length; i++) {
//   str2 +=
//     arr
//       .filter((x) => x.includes(i))
//       .reduce((total) => total + changeStrong(), "") + my_string[i];
// }

// console.log(str2);

// var s = "this is *string*";

// var start = -1;
// var end = -1;
// var replacement = "<Strong>";
// for (var i = 0; i < s.length; i++) {
//   if (s.charAt(i) === "*" && start === -1) {
//     start = i;
//   } else if (s.charAt(i) === "*" && start != -1) {
//     end = i;
//     break;
//   } else if (i === s.length - 1) {
//     end = i;
//   }
// }

// s.substring(0, i) + replacement + this.substring(i + 1);

// italics _text_
// Bold *text*
// Strikethrough ~text~
// numbered 1.
// bulleted
// blockQuote
// CodeSnippet
// CodeBlock

var quill = new Quill("#editor-container", {
  modules: {
    toolbar: [
      [{ header: [3, 2, false] }],
      ["bold", "italic", "strike"],
      ["image", "code-block"],
    ],
  },
  placeholder: "Compose an epic...",
  theme: "snow", // or 'bubble'
});
