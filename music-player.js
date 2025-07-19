/*
 * Lavellune Music Player
 * Handles background music for each mood
 */

document.addEventListener("DOMContentLoaded", () => {
  const tracks = {
    calm: { name: "Gentle Calm", src: "assets/calm.mp3" },
    relax: { name: "Soft Relax", src: "assets/relax.mp3" },
    motivate: { name: "Motivation Boost", src: "assets/motivate.mp3" },
    energize: { name: "Energize Vibes", src: "assets/energized.mp3" },
    reflect: { name: "Reflective Mood", src: "assets/reflect.mp3" },
    focus: { name: "Deep Focus", src: "assets/focus.mp3" }
  };

  const mood = document.body.dataset.mood || "calm";
  const audio = document.getElementById("moodAudio");
  const btn = document.getElementById("toggleAudio");
  const icon = btn?.querySelector("i");
  const pulse = btn?.querySelector(".pulse-dot");
  const trackName = document.getElementById("trackName");

  if (tracks[mood] && audio && btn && trackName) {
    audio.src = tracks[mood].src;
    trackName.textContent = tracks[mood].name;

    btn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        icon?.classList.replace("fa-play", "fa-pause");
        pulse?.classList.add("playing");
      } else {
        audio.pause();
        icon?.classList.replace("fa-pause", "fa-play");
        pulse?.classList.remove("playing");
      }
    });
  }
});