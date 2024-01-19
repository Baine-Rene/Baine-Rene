document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.getElementById("cursor");

  document.addEventListener("mousemove", function (e) {
    const x = e.clientX - cursor.offsetWidth / 2;
    const y = e.clientY - cursor.offsetHeight / 2;

    cursor.style.transform = `translate(${x}px, ${y}px)`;
  });
});