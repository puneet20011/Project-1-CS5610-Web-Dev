//Interesting use of javascript to add some flair to the movement of the website
//Limit the number of trails that can be spawned at any single moment.
//The timer is not enough, CPU usage spikes when rendering the trails

document.addEventListener("mousemove", (e) => {
  const trail = document.createElement("div");
  trail.classList.add("trail");
  document.body.appendChild(trail);

  // Position the trail element at the cursor
  trail.style.left = e.pageX + "px";
  trail.style.top = e.pageY + "px";

  // Animate fade out and shrink
  setTimeout(() => {
    trail.style.opacity = 0;
    trail.style.transform = "scale(0)";
  }, 50);

  // Remove element after fade animation
  setTimeout(() => trail.remove(), 500);
});



