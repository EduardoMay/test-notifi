let aut = document.querySelector("#aut");
let not = document.querySelector("#notificacion");
let ver = document.querySelector("#ver");
let cerrar = document.querySelector("#cerrar");
let notificacion;

aut.addEventListener("click", () => {
    Notification.requestPermission();
});

ver.addEventListener("click", () => {
    console.log(Notification.permission);
});

not.addEventListener("click", () => {
    notificacion = new Notification("Hola Mundo!", {
        body: 'Texto descriptivo',
        // icon: "",
        // image: '',
    });

    notificacion.onclick = () => {
        console.log("click")
    };

    notificacion.addEventListener("close", () => {
        console.log("closed");
    })
});
