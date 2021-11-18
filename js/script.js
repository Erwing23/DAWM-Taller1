/*
  1. Realice una petición asincrónica al unir las constantes URL y RECURSO

  2. Extraiga y reemplace en la plantilla por los valores correspondientes del JSON del segundo elemento con 
  el título "Grave of the Fireflies":

  {{title}} por title
  {{image}} por image
  {{description}} por description, los primeros 70 caracteres y seguido por '...'
  {{original_title}} por original_title

  Utilice como referencia el sitio https://ghibliapi.herokuapp.com/#tag/Films para identificar mejor 
  la estructura del JSON.

  3. Agregue el nuevo valor al inicio del elemento div con identificador "list"
 */



let peticion = () => {

  const URL = 'http://ghibliapi.herokuapp.com/'
const RECURSO = "films"
let plantilla = `
<div class="product product-container">
  <div class="inner-product">
    <div class="figure-image">
      <a href="single.html"><img src="{{image}}" alt="{{title}}"></a>
    </div>
    <h3 class="product-title"><a href="#">{{title}}</a></h3>
    <small class="price">{{original_title}}</small>
    <p>{{description}}</p>
    <a href="cart.html" class="button">Watch it</a>
    <a href="#" class="button muted">Read Details</a>
  </div>
</div> <!-- .product -->`
  
  
fetch(URL+RECURSO)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    firefly = data[1];
    console.log(firefly);
    plantilla = plantilla.replaceAll("{{title}}", firefly["title"]);
    plantilla = plantilla.replace("{{image}}", firefly["image"]);
    
    plantilla = plantilla.replace("{{description}}",firefly["description"].slice(0,69).concat("..."));
    plantilla = plantilla.replace("{{original_title}}", firefly["original_title"]);
    console.log(plantilla);
    lists = document.querySelector("#list");
    lists.innerHTML = plantilla +  lists.innerHTML;
   
    /*
  
  let entries = xml.getElementsByTagName("entry");
  console.log(entries);
  for(let entry of entries){
    let plantilla = `
        <div class="col-lg-4 col-md-6 content-item">
          <span>{{title}}</span>
          <h4>{{published}}</h4>
          <p>{{summary}}</p>
        </div>
      `
    let titulo = entry.querySelector(`title`);
    let published = entry.querySelector("published");
    let date = new Date(Date.parse(published.innerHTML));
    
    let sumary = entry.querySelector("summary");
    plantilla =plantilla.replace("{{title}}", titulo.innerHTML);
    plantilla =plantilla.replace("{{published}}", date.toLocaleString('en-US', opciones));
    plantilla =plantilla.replace("{{summary}}", sumary.innerHTML);
    console.log(plantilla);
    document.getElementById("books").innerHTML += plantilla;
    
  }*/
  
  
  })
  .catch(console.error);



}


//do after all document is loaded https://stackoverflow.com/questions/588040/window-onload-vs-document-onload

document.addEventListener("DOMContentLoaded", function(event) {
  peticion();
})