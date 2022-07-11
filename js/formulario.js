const listaProvincias = document.querySelector("#slt-provincias");
const listaCiudades = document.querySelector("#slt-ciudades");
const listaCiudades1 = document.querySelector("#slt-ciudades1");

let distribucion = "/js/colombia-json.js";
let provincias;

//const listaDistritos = document.querySelector('#slt-distritos');

let provinciaSeleccionada;
let ciudadSeleccionada;

const mostrarProvincias = () => {
  distribucion.provincias.forEach((provincia) => {
    listaProvincias.options.add(new Option(provincia.departamento));
  });
};
const mostrarCiudades = (nombreProvincia) => {
  listaCiudades.innerHTML = "";
  listaCiudades.options.add(new Option("-- Seleccione una ciudad --"));
  distribucion.provincias.forEach((provincia) => {
    if (provinciaSeleccionada == provincia.departamento) {
      provincia.departamento.forEach((ciudades) => {
        listaCiudades.options.add(new Option(provinciaSeleccionada.ciudades));
      });
    }
  });
};

const mostrarCiudades1 = (nombreProvincia) => {
  //listaCiudades1.innerHTML = "";
  listaCiudades1.options.add(new Option(provincia.departamento[0].ciudades));
  // distribucion.provincias.forEach((provincia) => {
  //   if (provinciaSeleccionada == provincia.departamento) {
  //     provincia.departamento.forEach((ciudades) => {
  //       listaCiudades1.options.add(new Option(provinciaSeleccionada.ciudades));
  //     });
  //   }
  //});
};

// const mostrarDistritos = (nombreCiudad) => {
//     listaDistritos.innerHTML = '';
//     listaDistritos.options.add(new Option('-- Seleccione un distrito --'));
//     distribucion.provincias.forEach(provincia => {
//         if (provinciaSeleccionada == provincia.ciudades) {
//             provincia.cantones.forEach(canton => {
//                 if (ciudadSeleccionada == canton.ciudades) {
//                     canton.distritos.forEach(distrito => {
//                         listaDistritos.options.add(new Option(distrito.ciudades));
//                     });
//                 }
//             });
//         }
//     });
// };

mostrarProvincias();

listaProvincias.addEventListener("change", () => {
  provinciaSeleccionada = listaProvincias.value;
  mostrarCiudades(provinciaSeleccionada);
});

listaCiudades.addEventListener("change", () => {
  ciudadSeleccionada = listaCiudades.value;
  mostrarDistritos(ciudadSeleccionada);
});
