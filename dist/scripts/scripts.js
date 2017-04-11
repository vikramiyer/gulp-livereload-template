var src = "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4";
//var src = "http://www.tools4movies.com/trailers/1012/Despicable%20Me%202.mp4";
var video = document.getElementById('example_video');
var source = document.createElement('source');
source.setAttribute('src', src);
video.appendChild(source);

// setTimeout(function() {  
//    video.pause();
//    source.setAttribute('src', 'http://www.tools4movies.com/trailers/1012/Despicable%20Me%202.mp4'); 
//    video.load();
//    video.play();
// }, 3000);
