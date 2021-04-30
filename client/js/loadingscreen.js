function LoaderDisapears(e){
  let loader = document.getElementById("loader-wrapper");
  loader.style.display = "none";
}

window.addEventListener("load", LoaderDisapears);