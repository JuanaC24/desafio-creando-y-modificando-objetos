function Paciente(nombre, apellido, edad, historiaMedica) {
    var _nombre = nombre;
    var _apellido = apellido;
    var _edad = edad;
    var _historiaMedica = historiaMedica;

    // Getters
    Object.defineProperty(this, "nombre", {
        get: function() { return _nombre; },
        set: function(nombre) { _nombre = nombre; }
    });

    Object.defineProperty(this, "apellido", {
        get: function() { return _apellido; },
        set: function(apellido) { _apellido = apellido; }
    });

    Object.defineProperty(this, "edad", {
        get: function() { return _edad; },
        set: function(edad) { _edad = edad; }
    });

    Object.defineProperty(this, "historiaMedica", {
        get: function() { return _historiaMedica; },
        set: function(historiaMedica) { _historiaMedica = historiaMedica; }
    });
}
function GestionPacientes() {
    this.pacientes = [];
}
// Método para agregar un paciente
GestionPacientes.prototype.agregarPaciente = function(paciente) {
    this.pacientes.push(paciente);
}

// Método para mostrar todos los pacientes
GestionPacientes.prototype.mostrarTodosLosPacientes = function() {
    this.pacientes.forEach(function(paciente) {
        console.log(`Nombre: ${paciente.nombre}, Apellido: ${paciente.apellido}, Edad: ${paciente.edad}, Historia Médica: ${paciente.historiaMedica}`);
    });
}

// Método para buscar pacientes por nombre
GestionPacientes.prototype.buscarPacientePorNombre = function(nombre) {
    const resultado = this.pacientes.filter(function(paciente) {
        return paciente.nombre.toLowerCase() === nombre.toLowerCase();
    });

    if (resultado.length > 0) {
        resultado.forEach(function(paciente) {
            console.log(`Nombre: ${paciente.nombre}, Apellido: ${paciente.apellido}, Edad: ${paciente.edad}, Historia Médica: ${paciente.historiaMedica}`);
        });
    } else {
        console.log("Paciente no encontrado.");
    }
}
var gestionPacientes = new GestionPacientes();

// Creando e instanciando pacientes
var paciente1 = new Paciente("Juan", "Pérez", 30, "Historia 1");
var paciente2 = new Paciente("Ana", "Gomez", 25, "Historia 2");
var paciente3 = new Paciente("Luis", "Martinez", 28, "Historia 3");

// Agregando pacientes a la gestión
gestionPacientes.agregarPaciente(paciente1);
gestionPacientes.agregarPaciente(paciente2);
gestionPacientes.agregarPaciente(paciente3);

// Mostrando todos los pacientes
console.log("Todos los pacientes:");
gestionPacientes.mostrarTodosLosPacientes();

// Búsqueda de un paciente por nombre
console.log("\nBúsqueda de paciente por nombre 'Ana':");
gestionPacientes.buscarPacientePorNombre("Ana");
