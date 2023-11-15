// Récupération du modal
var modal = document.getElementById("myModal");

// Récupération des images et insertion dans le modal
var images = document.querySelectorAll('.card-header img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

images.forEach(img => {
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
});

// Récupération de l'élément <span> qui ferme le modal
var span = document.getElementsByClassName("close")[0];

// Quand l'utilisateur clique sur <span> (x), fermer le modal
span.onclick = function() { 
  modal.style.display = "none";
}
