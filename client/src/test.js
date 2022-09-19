// TODO: using embedded tag formatting with start and last index

let arr = [
  [0, 4],
  [8, 12],
  //   [2, 10],
  //   [12, 17],
];

function formatStr(tagOpen, tagClose, arr, str) {
  let finalStr = "";
  str = str + " ";
  var tag = tagClose;
  function changeStrong() {
    if (tag === "<Strong>") {
      tag = tagOpen;
    } else {
      tag = tagClose;
    }
    return tag;
  }

  for (let i = 0; i < str.length; i++) {
    finalStr +=
      arr
        .filter((x) => x.includes(i))
        .reduce((total) => total + changeStrong(), "") + str[i];
  }

  console.log(finalStr); //TODO: comment this
  return finalStr;
}

let my_string = "This is gold";
formatStr("<Strong>", "</Strong>", arr, my_string);
formatStr("<i>", "</i>", arr, my_string);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// TODO: using whatsapp formatting
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
