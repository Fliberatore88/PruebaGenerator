const usersControllers = {
      darNombre: (req,res) => {
        res.send('Hola estás correctamente')
      },
      nombreEspecifico: (req,res) => {
        res.send('Hola, cómo estás?' + req.params.id)
      }
}


module.exports = usersControllers;