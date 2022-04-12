const addbtn = document.querySelector(".add-note");
const notefield = document.querySelector(".input-note");
const note = document.querySelector(".note");
let closebtn = document.querySelectorAll(".close");
const sec2 = document.querySelectorAll(".section--2");
updateNotes();

addbtn.addEventListener("click", function (e) {
  const notes = localStorage.getItem("notes");
  if (notefield.value === "") alert("Enter something to add Note😅😅");
  else {
    if (notes === null) {
      noteobj = [];
    } else {
      noteobj = JSON.parse(notes);
    }
    noteobj.push(notefield.value);
    localStorage.setItem("notes", JSON.stringify(noteobj));

    console.log(noteobj);

    updateNotes();
  }

  notefield.value = "";
});

function updateNotes() {
  const notes = localStorage.getItem("notes");
  if (notes === null) {
    noteobj = [];
  } else {
    noteobj = JSON.parse(notes);
  }
  let html = ``;
  noteobj.forEach((el, i) => {
    html += `
      <div class="b">
    <div class="section--2 note--${i + 1}">
    <div class="notes">
    <p class="content">${el}
    </p>
    <button id = ${i} onclick="deleteNote(this.id)" class="close">&times;</button>
    </div>
    </div>
    </div>
          `;
  });
  if (noteobj.length === 0) {
    note.innerHTML = "Add note to show here...";
  } else {
    note.innerHTML = html;
  }
}

function deleteNote(index) {
  console.log(index);

  const notes = localStorage.getItem("notes");
  if (notes === null) {
    noteobj = [];
  } else {
    noteobj = JSON.parse(notes);
  }
  noteobj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(noteobj));
  updateNotes();
}
