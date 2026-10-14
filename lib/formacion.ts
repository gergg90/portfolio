// Datos de la carrera. Pensum oficial: unihumboldt.edu.ve (Ingeniería en Informática, 10 semestres).
export const UNIVERSITY = "Universidad Alejandro de Humboldt";
export const DEGREE = "Ingeniería en Informática";
export const PENSUM_URL = "https://www.unihumboldt.edu.ve/Inform%C3%A1tica";

export const TOTAL_SEMESTERS = 10;
// Semestre que se está cursando ahora.
export const CURRENT_SEMESTER = 1;
// Semestres ya aprobados. Añadir el número al terminar cada uno.
export const completedSemesters: number[] = [];

// Materias del semestre en curso, tal como aparecen en el pensum.
export const currentSubjects: string[] = [
  "Lógica",
  "Matemática I",
  "Formación Cultural",
  "Computación I",
  "Ambiente y Desarrollo Sostenible",
  "Metodología de la Investigación I",
  "Inglés I",
  "Lenguaje y Comunicación",
];

// Materias de semestres posteriores afines a redes y seguridad.
export const upcomingHighlights: { name: string; semester: number }[] = [
  { name: "Sistemas Operativos I", semester: 4 },
  { name: "Sistemas Operativos II", semester: 6 },
  { name: "Redes I", semester: 8 },
  { name: "Auditoría de Sistemas", semester: 8 },
  { name: "Redes II", semester: 9 },
  { name: "Teleprocesos y Teleinformática", semester: 10 },
];
