document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.querySelector('.btn-play-thumbnail');
  const video = document.querySelector('#courseDetailVideo');
  const thumbnail = document.querySelector('#courseDetailThumbnail');
  const rating = document.querySelector('#courseRateThumbnail');

  playButton.addEventListener('click', () => {
    video.classList.remove('hidden');
    thumbnail.classList.add('hidden');
    rating.classList.add('hidden');
    playButton.classList.add('hidden');
    video.play()
  })
});