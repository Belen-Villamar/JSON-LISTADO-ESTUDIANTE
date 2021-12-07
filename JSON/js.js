const bd =[
    {"Id":0,"Apellido":"Apellido: Villamar", "Nombre":"Nombre: Belén", "Semestre": "Semestre: Quinto", 
    "Paralelo":" Paralelo: A", "Direccion":"Direccion: Manta", "Telefono": "Telefono: 0997786150",
    "Correo":"Correo: belen.villamar30@gmail.com"},

    {"Id":1,"Apellido":"Apellido: Vera", "Nombre":"Nombre: Pedro", "Semestre": "Semestre: Quinto", 
    "Paralelo":" Paralelo: B", "Direccion":"Direccion: Manta", "Telefono": "Telefono: 0953049584",
    "Correo":"Correo: pedrovera@gmail.com"},

    {"Id":2,"Apellido":"Apellido: Alarcón", "Nombre":"Nombre: Eber", "Semestre": "Semestre: Cuarto", 
    "Paralelo":" Paralelo: A", "Direccion":"Direccion: Chone", "Telefono": "Telefono: 0934789012",
    "Correo":"Correo: eber123@gmail.com"},

    {"Id":3,"Apellido":"Apellido: Triviño", "Nombre":"Nombre: Nicolle", "Semestre": "Semestre: Primero", 
    "Paralelo":" Paralelo: C", "Direccion":"Direccion: Portoviejo", "Telefono": "Telefono: 0912459847",
    "Correo":"Correo: nicolletriv@gmail.com"},

    {"Id":4,"Apellido":"Apellido: Machuca", "Nombre":"Nombre: Nahomi", "Semestre": "Semestre: Tercero", 
    "Paralelo":" Paralelo: A", "Direccion":"Direccion: Montecristi", "Telefono": "Telefono: 0945607984",
    "Correo":"Correo: nahomim@gmail.com"},

    {"Id":5,"Apellido":"Apellido: Lucas", "Nombre":"Nombre: Caroline", "Semestre": "Semestre: Segundo", 
    "Paralelo":" Paralelo: C", "Direccion":"Direccion: Jipijapa", "Telefono": "Telefono: 0923460796",
    "Correo":"Correo: carolineluc@gmail.com"},
    
    {"Id":6,"Apellido":"Apellido: Santana", "Nombre":"Nombre: María", "Semestre": "Semestre: Sexto", 
    "Paralelo":" Paralelo: B", "Direccion":"Direccion: Flavio Alfaro", "Telefono": "Telefono: 0934069754",
    "Correo":"Correo: mariasantana@gmail.com"},

    {"Id":7,"Apellido":"Apellido: Parraga", "Nombre":"Nombre: Mateo", "Semestre": "Semestre: Octavo", 
    "Paralelo":" Paralelo: A", "Direccion":"Direccion: Manta", "Telefono": "Telefono: 0994567123",
    "Correo":"Correo: mateoparrg@gmail.com"},

    {"Id":8,"Apellido":"Apellido: Echeverría", "Nombre":"Nombre: Nicole", "Semestre": "Semestre: Quinto", 
    "Paralelo":" Paralelo: C", "Direccion":"Direccion: Manta", "Telefono": "Telefono: 0987345829",
    "Correo":"Correo: nicoleecheverria@gmail.com"},
    
    {"Id":9,"Apellido":"Apellido: Murillo", "Nombre":"Nombre: Diego", "Semestre": "Semestre: Octavo", 
    "Paralelo":" Paralelo: B", "Direccion":"Direccion: Jipijapa", "Telefono": "Telefono: 0999832456",
    "Correo":"Correo: diego09@gmail.com"},
]

const estudiantes = document.querySelectorAll('.nom_estudiante');

estudiantes.forEach((estudiante)=>{
    estudiante.addEventListener('click', (nombre)=>{
        let id=nombre.target.getAttribute('estu-id');
        bd.forEach((estudiante)=>{
            if(id == estudiante.Id){
                const verDetalle=nombre.target.parentElement.lastElementChild;
                verDetalle.innerHTML=`
                                    <div class="lista"
                                        <div class="nom">
                                        <h2>Datos del estudiante:</h2>
                                        <h2 class="list-inline-item footer-menu"><a class="nav-link" style="color:#000000" href="inicio.html"> REGRESAR</a></h2>
                                        <p>${estudiante.Nombre}</p>
                                        <p>${estudiante.Apellido}</p>
                                        <p>${estudiante.Correo}</p>
                                        <p>${estudiante.Telefono}</p>
                                        <p>${estudiante.Direccion}</p>
                                        <p>${estudiante.Semestre}</p>
                                        <p>${estudiante.Paralelo}</p>
                                        </div> 
                                    </div>`

            }
        })
    })
})

