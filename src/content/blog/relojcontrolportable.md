---
id: 202604202
fecha: 20-04-2026
titulo: "Control de asistencia"
---

Esta semana desarrollé un prototipo de sistema de control de asistencia "portable", este proyecto es una versión bastante simplificada del sistema que desarrollé para el departamento de educación, el cual cuenta con generación de reportes, cálculo de horas trabajadas y horas extras. Sin embargo surgió la necesidad de tener un sistema que pudiera ser ocupado por personas externas por lo cual desarrollé este prototipo.

Para poder ocupar el sistema se necesitan dos archivos, uno de configuración que sigue el siguiente formato:


        [
          {
            "id": "9999",
            "rut": "12.345.678-9",
            "nombreCompleto": "Juan Rodríguez",
            "nombres": "Juan",
            "apellidos": "Rodríguez"
          }
        ]

Y otro de asistencias, que es el que entrega el dispositivo de asistencia, el cual puede ser obtenido con un pendrive.

De momento no se pueden generar o editar archivos de configuración dentro de la misma página, pero es algo que tengo pensado para más adelante.

La página esta hecha básicamente en React. Encuentro que es importante mencionar que ninguna información se guarda en servidores, todo funciona de manera local en el navegador.
