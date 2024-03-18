document.addEventListener("DOMContentLoaded", function() {
    // Find all images with the 'white-background' class
    var images = document.querySelectorAll('img.white-background');
  
    // For each image, find the parent <td> or <th> and apply the white background style
    images.forEach(function(img) {
      var parentCell = img.closest('td, th');
      if (parentCell) {
        parentCell.style.backgroundColor = 'white';
      }
    });
  });
