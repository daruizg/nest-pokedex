<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clone el repositorio
2. Ejecutar

```bash
$ npm install
```

3. Tener NestJS CLI instalado

```bash
$ npm i -g @nestjs/cli
```

4. Levantar la base de datos con Docker

```bash
$ docker compose up -d
```

5. Clonar el archivo ```.env.template``` y renombrarlo a ```.env```

6. Llenar las varialbes de entorno definidas en el archivo ```.env```

7. Levantar app

```bash
$ npm run start:dev
```

8. Reconstruir la base de datos con datos de prueba

```bash
$ http://localhost:3000/api/seed
```

## Stack

- NestJS
- MongoDB
