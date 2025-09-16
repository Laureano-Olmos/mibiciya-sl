  const modal = document.getElementById("guiaModal");
  const btn = document.getElementById("guiaBtn");
  const span = document.querySelector(".cerrar");

  btn.onclick = () => modal.style.display = "block";
  span.onclick = () => modal.style.display = "none";
  window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };
  
  document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") modal.style.display = "none";
});