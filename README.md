# Grupo 7 Frameworks e Interoperabilidad

Este es el repositorio del Backend hecho en Strapi

## Integrantes
| Nombre           | Legajo   | Email                                 | Github                                                                                                                              |
| :--------------  | :------- | :------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------- |
| Lautaro Gonzalez | FAI 2950 | lautaro.gonzalez@est.fi.uncoma.edu.ar | [![github](https://img.shields.io/badge/github-121013?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Vintuwu) |
| Valentin Camusso | FAI 3208 | valentin.camusso@est.fi.uncoma.edu.ar | [![github](https://img.shields.io/badge/github-121013?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Camuss0) |

## Requisitos
- Navegador web moderno.<br>
- [Git](https://git-scm.com)<br>
- [Node.js](https://nodejs.org/en) v20+

## Pasos para la instalación
1. Copiar el repositorio con `git clone https://github.com/Vintuwu/FITp2.git`
2. Instalar las dependencias del proyecto con `npm install`
3. Copiar y renombrar el archivo `.env.local.example` por `.env.local` y configurar la base de datos (MySQL)
4. Ejecutar el comando `npm run strapi import -- -f strapiExport.tar.gz`
5. Correr el proyecto con `npm run develop`
6. Registrarse en Strapi
7. Ir a "settings"
   1. Ir a "API Tokens"
   2. Completamos los datos requeridos, y en "Token duration" en "Unlimited" y "Token type" en "Read-only"
   3. Guardar y copiar el "API Token"
8. Instalar el repositorio de Frontend: [Repositorio Frontend](https://github.com/Vintuwu/FITp2-frontend)
