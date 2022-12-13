# City Archive Ng guía de instalación

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 13.0.4.

## Construir el proyecto

Ejecute `ng build` para construir el proyecto. Los artefactos generados se almacenan el la carpeta `dist/`. Si va a desplegar el proyecto en un ambiente de producción actualice la url del **API** en `./src/environments/environment.prod.ts`

## Despliegue

Copie la carpeta `./dist` para la carpeta de proyectos de su servidor web de preferencia.

> El proyecto por defecto toma `/` como la url base. Para utilizarlo como un subdirectorio dentro de un dominio construya el proyecto utilizando el argumento `--base-href SUBDIRECTORIO`. Para más detalles vea la [documentacion oficial](https://angular.io/guide/deployment#the-base-tag)
