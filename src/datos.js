import { feriado } from "./colores";
const currentYear = new Date().getFullYear();

export const dataSource = [
  {
    id: 0,
    name: "Inicio de Clases",
    title: "😎 Que comience el juego!",
    desc: "",
    color: feriado.inicio,
    startDate: new Date(currentYear, 2, 14),
    endDate: new Date(currentYear, 2, 14),
  },
  {
    id: 1,
    name: "Fin de Clases",
    title: "👋 Hasta pronto!",
    desc: "",
    color: feriado.inicio,
    startDate: new Date(currentYear, 6, 8),
    endDate: new Date(currentYear, 6, 8),
  },
  {
    id: 2,
    name: "Mesas de Examen",
    title: "Primer llamado",
    desc: "🚨 SIN SUSPENSION 🚨. No olvides inscribirte por sysacad!",
    color: feriado.mesas,
    startDate: new Date(currentYear, 3, 25),
    endDate: new Date(currentYear, 3, 30),
  },
  {
    id: 3,
    name: "Mesas de Examen",
    title: "Segundo llamado",
    desc: "🤙🏾 CON SUSPENSION 🤙🏾. No olvides inscribirte por sysacad!",
    color: feriado.mesas,
    startDate: new Date(currentYear, 5, 6),
    endDate: new Date(currentYear, 5, 11),
  },
  {
    id: 4,
    name: "Receso Invernal",
    title: "🎉 Felices Vacaciones!",
    desc: "Nos vemos pronto!",
    color: feriado.receso,
    startDate: new Date(currentYear, 6, 18),
    endDate: new Date(currentYear, 6, 30),
  },
  {
    id: 5,
    name: "Mesas de Examen",
    title: "Tercer llamado",
    desc: "No olvides inscribirte por sysacad!",
    color: feriado.mesas,
    startDate: new Date(currentYear, 7, 1),
    endDate: new Date(currentYear, 7, 6),
  },
  {
    id: 6,
    name: "Inicio de Clases",
    title: "👻 Que comience el juego nuevamente!",
    desc: "",
    color: feriado.inicio,
    startDate: new Date(currentYear, 7, 8),
    endDate: new Date(currentYear, 7, 8),
  },
  {
    id: 7,
    name: "Mesas de Examen",
    title: "Cuarto llamado",
    desc: "🚨 SIN SUSPENSION 🚨. No olvides inscribirte por sysacad!",
    color: feriado.mesas,
    startDate: new Date(currentYear, 8, 5),
    endDate: new Date(currentYear, 8, 10),
  },
  {
    id: 8,
    name: "Mesas de Examen",
    title: "Quinto llamado",
    desc: "🤙🏾 CON SUSPENSION 🤙🏾. No olvides inscribirte por sysacad!",
    color: feriado.mesas,
    startDate: new Date(currentYear, 9, 3),
    endDate: new Date(currentYear, 9, 6),
  },
  {
    id: 9,
    name: "Mesas de Examen",
    title: "Sexto llamado",
    desc: "🚨 SIN SUSPENSION 🚨. No olvides inscribirte por sysacad!",
    color: feriado.mesas,
    startDate: new Date(currentYear, 10, 7),
    endDate: new Date(currentYear, 10, 12),
  },
  {
    id: 10,
    name: "Fin de Clases",
    title: "🎉 Nos vemos el año que viene! 🎉",
    desc: "",
    color: feriado.inicio,
    startDate: new Date(currentYear, 11, 3),
    endDate: new Date(currentYear, 11, 3),
  },
  {
    id: 11,
    name: "Mesas de Examen",
    title: "Septimo llamado",
    desc: "No olvides inscribirte por sysacad!",
    color: feriado.mesas,
    startDate: new Date(currentYear, 11, 12),
    endDate: new Date(currentYear, 11, 17),
  },
  {
    id: 12,
    name: "Mesas de Examen",
    title: "Octavo llamado",
    desc: "No olvides inscribirte por sysacad!",
    color: feriado.mesas,
    startDate: new Date(2023, 1, 13),
    endDate: new Date(2023, 1, 18),
  },
  {
    id: 13,
    name: "Mesas de Examen",
    title: "Noveno llamado",
    desc: "No olvides inscribirte por sysacad!",
    color: feriado.mesas,
    startDate: new Date(2023, 1, 22),
    endDate: new Date(2023, 1, 25),
  },
  {
    id: 14,
    name: "Mesas de Examen",
    title: "Decimo llamado",
    desc: "No olvides inscribirte por sysacad!",
    color: feriado.mesas,
    startDate: new Date(2023, 1, 27),
    endDate: new Date(2023, 2, 4),
  },
  {
    id: 16,
    name: "Feriado",
    title: "Dia Libre",
    desc: "Hoy se conmemora el Dia Nacional de la Memoria por la Verdad y la Justicia",
    color: feriado.feriado,
    startDate: new Date(currentYear, 2, 24),
    endDate: new Date(currentYear, 2, 24),
  },
  {
    id: 16,
    name: "Feriado",
    title: "Dia Libre",
    desc: "Hoy se conmemora el Dia de los Veteranos y los Caidos en la Guerra de Malvinas",
    color: feriado.feriado,
    startDate: new Date(currentYear, 3, 2),
    endDate: new Date(currentYear, 3, 2),
  },
  {
    id: 17,
    name: "Feriado",
    title: "Dia Libre",
    desc: "Hoy se conmemora Semana Santa",
    color: feriado.feriado,
    startDate: new Date(currentYear, 3, 14),
    endDate: new Date(currentYear, 3, 15),
  },
  {
    id: 18,
    name: "Feriado",
    title: "Dia Libre",
    desc: "Hoy se conmemora el Dia del Docente Tecnologico",
    color: feriado.feriado,
    startDate: new Date(currentYear, 4, 2),
    endDate: new Date(currentYear, 4, 2),
  },
  {
    id: 37,
    name: "Feriado",
    title: "Dia Libre",
    desc: "Hoy se conmemora el Dia del Trabajador",
    color: feriado.feriado,
    startDate: new Date(currentYear, 4, 1),
    endDate: new Date(currentYear, 4, 1),
  },
  {
    id: 19,
    name: "Feriado",
    title: "Dia Libre",
    desc: "Hoy se conmemora el Dia de la Revolucion de Mayo",
    color: feriado.feriado,
    startDate: new Date(currentYear, 4, 25),
    endDate: new Date(currentYear, 4, 25),
  },
  {
    id: 21,
    name: "Feriado",
    title: "Dia Libre",
    desc: "Hoy se conmemora el Paso a la Inmortalidad del General Martin Miguel de Guemes",
    color: feriado.feriado,
    startDate: new Date(currentYear, 5, 17),
    endDate: new Date(currentYear, 5, 17),
  },
  {
    id: 22,
    name: "Feriado",
    title: "Dia Libre",
    desc: "Hoy se conmemora el Paso a la Inmortalidad del General Manuel Belgrano",
    color: feriado.feriado,
    startDate: new Date(currentYear, 5, 20),
    endDate: new Date(currentYear, 5, 20),
  },
  {
    id: 23,
    name: "Feriado",
    title: "Dia Libre",
    desc: "Hoy se conmemora el Dia de la Independencia",
    color: feriado.feriado,
    startDate: new Date(currentYear, 6, 9),
    endDate: new Date(currentYear, 6, 9),
  },
  {
    id: 25,
    name: "Feriado",
    title: "Dia Libre",
    desc: "Hoy se conmemora el Paso a la Inmortalidad del General Jose de San Martin",
    color: feriado.feriado,
    startDate: new Date(currentYear, 7, 15),
    endDate: new Date(currentYear, 7, 15),
  },
  {
    id: 26,
    name: "Feriado",
    title: "Dia Libre",
    desc: "Hoy se conmemora el Dia de la UTN",
    color: feriado.feriado,
    startDate: new Date(currentYear, 7, 19),
    endDate: new Date(currentYear, 7, 19),
  },
  {
    id: 27,
    name: "Feriado",
    title: "Dia Libre",
    desc: "Hoy se conmemora el Dia de San Fernando Rey",
    color: feriado.feriado,
    startDate: new Date(currentYear, 7, 27),
    endDate: new Date(currentYear, 7, 27),
  },
  {
    id: 28,
    name: "Feriado",
    title: "Dia Libre",
    desc: "Hoy se conmemora el Dia del Estudiante. Fuerzas Ingeniero!",
    color: feriado.feriado,
    startDate: new Date(currentYear, 8, 21),
    endDate: new Date(currentYear, 8, 21),
  },
  {
    id: 29,
    name: "Feriado",
    title: "Dia Libre",
    desc: "Feriado con Fines Turisticos",
    color: feriado.feriado,
    startDate: new Date(currentYear, 9, 7),
    endDate: new Date(currentYear, 9, 7),
  },
  {
    id: 30,
    name: "Feriado",
    title: "Dia Libre",
    desc: "Hoy se conmemora es Dia del Respeto a la Diversidad Cultural (12/10)",
    color: feriado.feriado,
    startDate: new Date(currentYear, 9, 10),
    endDate: new Date(currentYear, 9, 10),
  },

  {
    id: 35,
    name: "Feriado",
    title: "Dia Libre",
    desc: "Feriado con Fines Turisticos",
    color: feriado.feriado,
    startDate: new Date(currentYear, 10, 21),
    endDate: new Date(currentYear, 10, 21),
  },
  {
    id: 32,
    name: "Feriado",
    title: "Dia Libre",
    desc: "Hoy se conmemora el Dia de la Inmaculada Concepcion de Maria",
    color: feriado.feriado,
    startDate: new Date(currentYear, 11, 8),
    endDate: new Date(currentYear, 11, 8),
  },
  {
    id: 36,
    name: "Feriado",
    title: "Dia Libre",
    desc: "Hoy se conmemora el Dia de la Soberania Nacional",
    color: feriado.feriado,
    startDate: new Date(currentYear, 10, 20),
    endDate: new Date(currentYear, 10, 20),
  },
  {
    id: 32,
    name: "Feriado",
    title: "Dia Libre",
    desc: "Feriado con Fines Turisticos",
    color: feriado.feriado,
    startDate: new Date(currentYear, 11, 9),
    endDate: new Date(currentYear, 11, 9),
  },
  {
    id: 33,
    name: "Feriado",
    title: "Dia Libre",
    desc: "Carnaval",
    color: feriado.feriado,
    startDate: new Date(2023, 1, 20),
    endDate: new Date(2023, 1, 21),
  },
];
