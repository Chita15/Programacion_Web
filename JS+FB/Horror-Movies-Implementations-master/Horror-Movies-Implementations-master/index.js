
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
 import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js"
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional

 var firebaseConfig = {
  //Se realiza la inserción de la BD creada en Firebase [ ESTE FRAGMENTO ES EDITABLE ]
  apiKey: "AIzaSyATOIA1_DdjZzBQB6r27_ekhUE1xr2WgMY",
  authDomain: "chitaprueba1.firebaseapp.com",
  databaseURL: "https://chitaprueba1-default-rtdb.firebaseio.com",
  projectId: "chitaprueba1",
  storageBucket: "chitaprueba1.appspot.com",
  messagingSenderId: "1088885199531",
  appId: "1:1088885199531:web:7783641322842522e35dee",
  measurementId: "G-2X6XV0FKTH"
 };

async function FetchHorrorData(horrorNumer){

const response = await fetch(`data.json`);
const data = await response.json();
console.log(data);

return data;
}
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 async function updateHorrorCard(horrorNumer)
{

  //Variables para el contenido de la ficha técnica  
   const horrorData = await(FetchHorrorData(horrorNumer));
   const name = horrorData[horrorNumer].name;
   const year = horrorData[horrorNumer].yearReleased;
   const director = horrorData[horrorNumer].director;
   const languge = horrorData[horrorNumer].language;
   const Guion = horrorData[horrorNumer].Guion;
   const Duracion = horrorData[horrorNumer].Duracion;
   const Clasificacion = horrorData[horrorNumer].Clasificacion;
   const Trailer = horrorData[horrorNumer].Trailer;


   //Asignaciones de contenido
   document.getElementById("horror-name").textContent = name;
   document.getElementById("YearR").textContent = year;
   document.getElementById("directorR").textContent = director;
   document.getElementById("languageR").textContent= languge;
   document.getElementById("GuionP").textContent= Guion;
   document.getElementById("DuracionP").textContent= Duracion;
   document.getElementById("ClasificacionP").textContent= Clasificacion;
   document.getElementById("TrailerP").textContent= Trailer;

   
   function writeUserData(name, year, director, languge, Guion, Duracion, Clasificacion, Trailer) {
   const db = getDatabase(app);
   set(ref(db, 'Peliculas/' + name), {
   fechaA: year ,
   direct: director,
   lang : languge,
   guionp : Guion,
   durap : Duracion,
   clasip : Clasificacion,
   trap : Trailer
 });
}
let pelicula = {
    name: name,
    year: year,
    director: director,
    languge: languge,
    Guion: Guion,
    Duracion: Duracion,
    Clasificacion: Clasificacion,
    Trailer: Trailer

}

writeUserData(name, year,director,languge, Guion, Duracion, Clasificacion, Trailer);

printRow(pelicula);


}

document.getElementById('InsertRandom').addEventListener('click',function(){
const horrorNumer = Math.floor(Math.random() * 10) + 1;
updateHorrorCard(horrorNumer);
});

function printRow(pelicula){
   
   
   var table = document.getElementById("Table1"); 

   //creamos un nuevo elemento en la tabla en la ultima posicion
   var row = table.insertRow(-1);

   //Insertamos cada una de las celdas/columnas del registro
   var cell1 = row.insertCell(0);
   var cell2 = row.insertCell(1);
   var cell3 = row.insertCell(2);
   var cell4 = row.insertCell(3);
   var cell5 = row.insertCell(4);
   var cell6 = row.insertCell(5);
   var cell7 = row.insertCell(6);
   var cell8 = row.insertCell(7);
   var cell9 = row.insertCell(8);
   var cell10 = row.insertCell(9);
   
   //Agregamos la informacion a cada una de las columnas del registro
   cell1.innerHTML = pelicula.name;
   cell2.innerHTML = pelicula.year; 
   cell3.innerHTML = pelicula.director;
   cell4.innerHTML = pelicula.languge; 
   cell5.innerHTML = pelicula.Guion;
   cell6.innerHTML = pelicula.Duracion;
   cell7.innerHTML = pelicula.Clasificacion;
   cell8.innerHTML = pelicula.Trailer

}