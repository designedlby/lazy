window.onload = function() {
  // Get the collection of elements with class "GONOW"
  var collection = document.getElementsByClassName("GONOW");

  // Check if collection exists, otherwise length will be 0
  if (collection !== null) {
    var len = collection.length;

    // Loop through each element in the collection
    for (var i = 0; i < len; i++) {
      collection[i].onclick = function() {
        // Open the YouTube video in window1
        window.open('https://youtu.be/MtjtjXY0bvg?si=5S_yxsiZ16Qtx-Cs', 'window1', 'height=600,width=600,screenX=100,screenY=100');

        // Open the blog post in window2
        window.open('https://hudhud-platform.blogspot.com/2024/11/noon-discount-code.html', 'window2', 'height=800,width=400,screenX=700,screenY=100');
      };
    }
  }
};
