/* YouTube videos load only after a click (partial youtube.html): the preview link is replaced by the player. */
document.addEventListener('click', function (e) {
    var link = e.target.closest ? e.target.closest('.yt-facade-link') : null;
    if (!link || e.ctrlKey || e.metaKey || e.shiftKey) return;
    e.preventDefault();
    var frame = document.createElement('iframe');
    frame.src = link.getAttribute('data-yt-src');
    frame.title = link.getAttribute('data-yt-title');
    frame.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen';
    frame.allowFullscreen = true;
    link.parentNode.replaceChild(frame, link);
    frame.focus();
});
