let disctance;
let checkDistance = true
export default function circle() {
  if (checkDistance) {
    disctance = localStorage.getItem("size");
    checkDistance = false;
  } else {
    Math.floor(disctance) == 3 ? (disctance = 0) : (disctance += 1.5);
  }
  document
    .getElementById("circle")
    .animate(
      { transform: `translateX(${disctance}em)` },
      { duration: 500, fill: "forwards" }
    );
}
