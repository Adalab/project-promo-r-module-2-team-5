//------- (PLANTEAMIENTO DEMO YARA)-----

//** Llamar en constantes a:
// 1) todos los elementos input del html
// 2) todos los elementos del preview donde se imprimirá la info de estos inputs
// 3) Variables vacías que vayan a recoger el valor de los inputs

//** Añadirle un evento a cada elemento input para que escuche lo que escribe la usuaria
//dentro de ese input y lo refleje en la tarjeta del preview.

// ---EVENTO PARA ESCRIBIR EL INPUT EN LOS PARRAFOS DE NOMBRE Y JOB
// jobInput.addeventlistener('input', () =>
// const value = jobInput.value;
//    if (value === '') {
//       previewjob.innerhtml = 'front end developer' // el valor por defecto
//    }
//    else {
//        previewjob.innerhtml = value;
//    }
// )

// ---EVENTO PARA ESCRIBIR EL INPUT EN EL ENLACE DE LOS ICONITOS DE ABAJO:
//Lo mismo de antes pero cambiando esto:
//previewjob.href = `mailto:${value}`;

//---OTROS CASOS:
//Imagen: src
//Teléfono: tel: ${value};

///-----------

///***SE PUEDE HACER LO MISMO CON FUNCIONES PARA REDUCIR CÓDIGO
//updatePreview: actualizará la tarjeta con los datos que tenga
// aquí dentro metemos todos los if anteriores:
//if (value === '') {
//       previewjob.innerhtml = 'front end developer' // el valor por defecto
//    }
//    else {
//        previewjob.innerhtml = value;
//    }
// y seguimos el castillo de ifs metiendo mas if para cada input en concreto ^^ (nombre, el href, el mailto, el tel)

//-----------
//*** PARA REDUCIR TODAVÍA MÁS CÓDIGO
// Aplicarle un evento a todo el formulario de tipo input
// Y le aplicamos event.target para que reconozca sobre qué hijo he escrito.
//form.addeventlistener('input', (event) => {
//  const childName = event.target.name; //name del input que es como su id para identificarlo y traerlo
//  const valueChild = event.target.value; //del input en cuestion sacamos su value
//castillo de ifs con cada caso específico de input. Siempre ifs porque no queremos que descarte sino que revise todos los casos
//  if (childName === 'name') {
//   name; //de donde sale este name??  = valueChild;
// }
//Y así con todos los inputs. El código se lee así:
// 1. si el name del event.target es "name", ergo, confirmamos que el input sobre el que estamos trabajando es el input de name (Acabamos de reconocer en que input estamos)
// 2. entonces dentro de variables (declaradas en el global como vacías y posteriormente utilizadas en las funciones y eventos) guardamos el valuechild de cada input, que es el value de cada input en concreto, dentro de esa variable.

//Una vez ya he guardado todos los values de los inputs dentro de variables, que es necesario (tambien se puede hacer para cada input en concreto, de esta forma simplemente ahorramos código) puedo llamar a la funcion que tirará de estas variables en las que he guardado los values. [necesario que tenga el valor de estas variables porque sino la función no funcionará]
// });

//------IMPORTANTE
// Se pueden almacenar todas las constantes o variables dentro de un objeto
