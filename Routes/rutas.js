//ESTE ARCHIVO ESTABLECE LAS RUTAS O ENDPOINTS DE CADA SERVICIO OFRECIDO POR MI API
import express from 'express'

import { ControladorHabitacion } from '../Controllers/ControladorHabitacion.js'
let controladorHabitacion=new ControladorHabitacion() //usando el controlador

export let rutas=express.Router()

rutas.get('/hoteles/habitaciones',controladorHabitacion.buscarHabitaciones)
rutas.get('/hoteles/habitacion/:idHabitacion',controladorHabitacion.buscarHabitacionPorId)
rutas.post('/hoteles/habitacion',controladorHabitacion.registrarHabitacion)
rutas.put('/hoteles/habitacion/:idHabitacion',controladorHabitacion.editarHabitacion)

// rutas.get('/hoteles/reservas',controladorReserva.buscarReservas)
// rutas.get('/hoteles/reserva/:idReserva',controladorReserva.buscarReservaPorId)
// rutas.post('/hoteles/reserva',controladorReserva.registrarReserva)
// rutas.put('/hoteles/reserva/:idReserva',controladorReserva.editarReserva)
// rutas.delete('/hoteles/reserva/:idReserva',controladorReserva.eliminarReserva)