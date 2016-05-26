(function(global) {
  'use strict'

  const observer = new MutationObserver(() => {
    changeURLTo(imagePreview);
  });
  observer.observe(document.getElementById("_timeLine"), {childList: true});

  function changeURLTo(innerHTML) {
    var elements = document.querySelectorAll(`a[href^="http://giphy.com/"]`);
    Array.apply(null, elements).forEach((element) => {
      element.innerHTML = innerHTML(element.href);
    })
  }

  const imagePreview = (giphyURL) => {
    // URL                                                    -> ID
    // ------------------------------------------------------------------------
    // http://giphy.com/gifs/1041HLFEx4gniE                   -> 1041HLFEx4gniE
    // http://giphy.com/gifs/blake-pines-crouch-JMQ4f0TTCdA2s -> JMQ4f0TTCdA2s
    const fileId = [giphyURL].map((URL) => {
        return URL.split("/")[URL.split("/").length - 1];
      }).map((URL) => {
        return URL.split("-")[URL.split("-").length - 1];
      })[0];
    return `<img class='imagePreview' style='height: 300px' src='https://media.giphy.com/media/${fileId}/giphy.gif'>`;
  }

  changeURLTo(imagePreview);

})(this);
