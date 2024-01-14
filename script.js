let main = document.querySelector("#main");
let cursor = document.querySelector(".cursor");
console.log(cursor);
main.addEventListener("mousemove", function(dets) {
	// console.log(dets.x);
	// console.log(dets.y);
	cursor.style.left = dets.x+"px";
	cursor.style.top = dets.y+"px";
});
