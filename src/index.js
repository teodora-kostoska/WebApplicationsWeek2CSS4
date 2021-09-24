import "./styles.css";

document.getElementById("add-comment").addEventListener("click", addComment);
document
  .getElementById("remove-comments")
  .addEventListener("click", removeComments);

function addComment() {
  var text = document.getElementById("textbox").value;
  var rating = document.getElementById("rating").value;
  var ratingvalue = "";
  for (var i = 0; rating > i; i++) {
    if (rating == 1) {
      ratingvalue = "*";
    } else if (rating == 2) {
      ratingvalue = "* *";
    } else if (rating == 3) {
      ratingvalue = "* * *";
    } else {
      ratingvalue = "* * * *";
    }
  }
  var ul = document.getElementById("unordered");
  var div2 = document.createElement("div");
  div2.className = "comment";
  var divrating = document.createElement("div");
  divrating.className = "comment-rating";
  var divtext = document.createElement("div");
  divtext.className = "comment-text";
  var button = document.createElement("button");
  button.innerText = "Remove comment";
  button.className = "element-removal";
  button.style.visibility = "hidden";
  button.onclick = function () {
    ul.removeChild(div2);
  };
  divrating.appendChild(document.createTextNode(ratingvalue));
  divtext.appendChild(document.createTextNode(text));
  div2.appendChild(divrating);
  div2.appendChild(divtext);
  div2.appendChild(button);
  ul.appendChild(div2);
}
function removeComments() {
  var button = document.getElementsByClassName("element-removal");
  var buttonlength = button.length;
  for (var i = 0; i < buttonlength; i++) {
    button[i].style.visibility = "visible";
  }
}
