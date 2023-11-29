function obtenerListaUsuarios(){
    var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLs'));

    if(listaUsuarios == null){
        listaUsuarios =[
            ['1','wiver','gironda','wiver@gmail.com','wiver123','2000-09-20','1'],
            ['2','wilson','wironda','wilson@gmail.com','wilson123','2000-09-14','2']
        ]
    }
    return listaUsuarios;
}
function validarCredenciales(pCorreo , pContrasenna){
    var listaUsuarios = obtenerListaUsuarios();
    var bAcceso = false;

    for(var i = 0; i < listaUsuarios.length; i++){
        if(pCorreo == listaUsuarios[i][3] && pContrasenna == listaUsuarios[i][4]){
            bAcceso = true;
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i][1]+''+listaUsuarios[i][2]);
            sessionStorage.setItem('rolUsuarioActivo', listaUsuarios[i][6]);
        }
    }
    return bAcceso;
}