document.addEventListener("DOMContentLoaded", function() {
	document.querySelector("#Line1").innerHTML = localStorage.getItem("line1");
	document.querySelector("#Line2").innerHTML = localStorage.getItem("line2");
	document.querySelector("#Line3").innerHTML = localStorage.getItem("line3");
	document.querySelector("#Line4").innerHTML = localStorage.getItem("line4");
	document.querySelector("#Line5").innerHTML = localStorage.getItem("line5");
	document.querySelector("#Line6").innerHTML = localStorage.getItem("line6");
	document.querySelector("#Line7").innerHTML = localStorage.getItem("line7");
	document.querySelector("#Line8").innerHTML = localStorage.getItem("line8");
	document.querySelector("#Line9").innerHTML = localStorage.getItem("line9");
	document.querySelector("#Line10").innerHTML = localStorage.getItem("line10");
	document.querySelector("#Line11").innerHTML = localStorage.getItem("line11");
	document.querySelector("#Line12").innerHTML = localStorage.getItem("line12");
	document.querySelector("#Line13").innerHTML = localStorage.getItem("line13");
	document.querySelector("#Line14").innerHTML = localStorage.getItem("line14");
	document.querySelector("#Line15").innerHTML = localStorage.getItem("line15");
	document.querySelector("#Line16").innerHTML = localStorage.getItem("line16");
})

console.log(localStorage.getItem("line1"));
console.log(localStorage.getItem("line2"));


 
 const draggables = document.querySelectorAll(".draggable");
 const containers = document.querySelectorAll(".poem");

 draggables.forEach(draggable => {
 	draggable.addEventListener("dragstart", () => {
 		draggable.classList.add("dragging") 
 	})

 	draggable.addEventListener("dragend", () => {
 		draggable.classList.remove("dragging")
 	})
 })


containers.forEach(container => {
	container.addEventListener("dragover", () => {
		const draggable = document.querySelector(".dragging")
		container.appendChild(draggable)
	})
})

containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault()
    const afterElement = getDragAfterElement(container, e.clientY)
    const draggable = document.querySelector('.dragging')
    if (afterElement == null) {
      container.appendChild(draggable)
    } else {
      container.insertBefore(draggable, afterElement)
    }
  })
})

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}