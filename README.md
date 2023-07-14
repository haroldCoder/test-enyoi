# test-enyoi

## Requisitos previos

Asegúrate de tener instalado [Node.js](https://nodejs.org) en tu sistema.

## Configuración inicial

1. Clona este repositorio en tu máquina local.
2. Abre una terminal y navega hasta la carpeta del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

```bash
npm install
npm run dev
```

## DATABASE 
CREATE TABLE pqrs(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    IDE INT NOT NULL,
    Tipo VARCHAR(3),
    Nombre VARCHAR(30) NOT NULL,
    Apellidos VARCHAR(30) NOT NULL,
    Numero BIGINT(12) NOT NULL,
    Tel INT,
    Email VARCHAR(50) NOT NULL,
    Titulo VARCHAR(100) NOT NULL,
    Ticket VARCHAR(50) NOT NULL,
    Content_ticket TEXT NOT NULL,
    Estado VARCHAR(8) NOT NULL CHECK (Estado IN ('abierto', 'cerrado'))
).
