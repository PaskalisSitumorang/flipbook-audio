let currentPage = 1;
const totalPages = 8;
const audioPlayer = document.getElementById("audio-player");

function showPage(pageNumber) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.classList.remove("active");
  });

  const current = document.querySelector(`.page[data-page="${pageNumber}"]`);
  if (current) {
    current.classList.add("active");
  }
}

// Navigasi
function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
}

// Mainkan audio
function playAudio(pageNumber) {
  audioPlayer.src = `audio/Halaman ${pageNumber}.mp3`;
  audioPlayer.play();
}

document.addEventListener("DOMContentLoaded", () => {
  showPage(currentPage);

  // Tambahkan tombol navigasi
  const flipbook = document.getElementById("flipbook");

  const prevBtn = document.createElement("button");
  prevBtn.id = "prev";
  prevBtn.className = "nav-button";
  prevBtn.innerText = "⟨";
  prevBtn.onclick = prevPage;
  flipbook.appendChild(prevBtn);

  const nextBtn = document.createElement("button");
  nextBtn.id = "next";
  nextBtn.className = "nav-button";
  nextBtn.innerText = "⟩";
  nextBtn.onclick = nextPage;
  flipbook.appendChild(nextBtn);
});
