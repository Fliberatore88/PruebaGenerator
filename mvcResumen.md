## Arquitectura de carpetas y archivos
- Public (archivos estaticos, con express en el app.js se lo agregamos con app.use(express.static(path.join(__dirname, 'public')));  Recordar que hay que tener requerido el express, path y también la variable app = express() )
- bin por el momento se crea y va el www y nada más
- Controllers (donde van los controladores, normalmente va la entidad como puede ser productosControllers o mainControllers o userControllers, etc )
- routes (carpeta para las rutas.)
- views (vistas y dentro una subcarpeta 'partials' para ese código reciclable como el header, footer, etc. )

## Sistema de ruteo
#### Recurso es en este caso similar a la entidad, y es para hacer los subgrupos en los que dividiríamos el proyecto, como puede ser productos, users,  main (para todo el resto que no encajaría en algo en particular)
- En el modulo routes Guarda por cada recurso que administra los pedidos de las rutas.

- el app.js también debe tener app.set('view engine', 'ejs'); para EJS

- El app.js debe tener 1 variable por cada recurso y además el app.use por cada recurso. 
## APP.JS

#### Ejemplo: 
const rutasProductos = require('.routes/productos');
const rutasMain = require('.routes/main');
app.use('/productos', rutasProductos) (primero es cuando en el navegador vayan a /productos y la segunda parte es la varaible creada)

#### En el archivo de rutas hay que requerir express y también crear la variable router utilizando el .Router() ADEMAS HAY QUE REQUERIR con una variable al controlador para después en las rutas poder utilizar ese archivo y los métodos del objeto literal
- También en este archivo se definen todas las rutas posibles dentro
#### Ejemplo con productos
- const express = require('express');
- const router = express.Router(); (este Router va con la R mayúscula)
- const productosController = require ('../controllers/productosController')

router.get ('/', (req,res) => { 
  CODIGO que normalmente va a ser ir al controllador con una variable previamente creada en el controlador y el método que va a utilizar para ésta ruta en particular
})
#### sigo con ejemplos en el router de productos, ahora le agrego el código que normalmente va al controller.
router.get('/detalle/:id', productosController.detalleProductos)
- En la "practica" va el router.get, dentro va la ruta de la que queremos manejar y después en forma de callback la variable 
productosController.FUNCION-DEL-OBJETO-LITERAL-QUE-NECESITEMOS
### Por último de routes acordarse que al final del archivo va el module.exports = router


## CONTROLLERS
- Es un archivo .js, dentro tiene 1 (o más pero por el momento digamos 1) objeto literal con métodos (funciones) dentro 
- Pensar que este es el que maneja realmente la petición ACA ES DONDE VA LA FUNCION con (req,res) ya no va ni en el app ni en la ruta. el App y la ruta quedaron solamente para decir a dónde tiene que ir y que callback usa y NADA MAS RESPECTO A ESTE TEMA.

#### ejemplo de un controller 

const productosController = {
  index: (req,res) => { 
    res.render('nombredelavista')
  } 
  detalleProducto: (req,res) => {
    res.render ('productos')
  }
}

#### Por último, acá cuando se hace el render, además de pasar la vista se puede pasar un objeto literal que sería con lo que hacemos dinámica la vista y después usamos las etiquetas de EJS 

const productosController = {
  index: (req,res) => { 
    res.render('nombredelavista')
  } 
  detalleProducto: (req,res) => {
    res.render ('productos', { productos: productos })
  }
}
- IMPORTANTE: Acordarse en el controller también se hace el module.exports (en este caso module.exports = productosController;)


