
//referenciamos a los elementos del DOM
//const inputBuscar = document.getElementById('buscar')
//const celdas = document.getElementsByTagName('td')

const obtenerDatos = async () => {
  try {
    let res = await axios.get("https://api.covid19api.com/summary")
    console.log(res);
    let data = await res.data
    console.log(data);
    let body =""
    
    data.Countries.forEach(element => {
      console.log(element);
      body += `<tr>
                  <td>${element.CountryCode}</td>
                  <td>${element.Country}</td>
                  <td>${element.TotalConfirmed}</td>
                  <td>${element.TotalDeaths}</td>
               </tr>`
    });
  document.getElementById('body').innerHTML = body
     
  } catch (error) {
    console.log(error);
  }
}
obtenerDatos() 

      const searchInput = document.getElementById("buscar");
      const celdas = document.querySelectorAll("tbody tr td");
      searchInput.addEventListener("keyup",  (e) =>  {
        const q = e.target.value.toLowerCase();
        console.log(q)
        celdas.forEach((row) => {
          row.querySelector("td").textContent.toLowerCase().startsWith(q)
            ? (row.style.display = "table-row")
            : (row.style.display = "none");
        })
        });
  
// //Búsqueda
// inputBuscar.addEventListener('keyup', (e)=>{
//     let texto = e.target.value
//    //console.log(texto)
//     let er = new RegExp(texto, "i")

//     for(let i=0; i<celdas.length; i++) {
//         let valor = celdas[i]
        
//         //console.log(valor)
//         if(er.test(valor.innerText)){
//             valor.classList.remove("ocultar")
//         }else{
//            // console.log(valor)
//             valor.classList.add("ocultar")
//         }
//       } 
  
// })


