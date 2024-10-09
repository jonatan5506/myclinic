1º  npx tsc --init - Inicializa o types
2º npm i @types/express --save-dev - instalado no types
3º npm i -D ts-node-dev

Instalar ambos
4º npm install prisma --save-dev
5º npm install @prisma/client 
6º npx prisma init

criar banco no Docker
7º docker run --name nomeDoContainer -e MYSQL_ALLOW_EMPTY_PASSWORD=yes -d mysql
8º url com allowPublicKeyRetrieval  = mysql://root:admin@localhost:3306/myclinic?allowPublicKeyRetrieval=true&useSSL=false
 - comando para criar a migration no prisma: npx prisma migrate dev
9º Seeds são para criar usuários padrão
10º Melhorar Seeds são para criar usuários padrão


//ERROS
1º Futuramente configurar cors pois fora do localhost retorna o erro:
Uncaught runtime errors:
×
ERROR
Cannot read properties of undefined (reading 'data')
TypeError: Cannot read properties of undefined (reading 'data')
    at logar (http://localhost:3000/static/js/bundle.js:1904:29)
    at async handleLogar (http://localhost:3000/static/js/bundle.js:1400:22)