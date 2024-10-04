import prismaClient from "../../src/db";

async function SeedCriarUsuarioTipo() {
    await prismaClient.usuario_Tipo.createMany({
        data:[
            {usuario_tipo:"administrador",parametro_edit_config:true},
            {usuario_tipo:"medico",parametro_edit_config:false},
            {usuario_tipo:"recepcionista",parametro_edit_config:true},
        ]
    })
}

SeedCriarUsuarioTipo();