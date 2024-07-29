# Recursiva Challenge - Superliga

URL: <https://jmr-recursiva-challenge.netlify.app/>

Aplicación creada con Vite + Typescript + TailwindCSS

## Ejecutar el proyecto localmente

```
  git clone https://github.com/JMRodriguez-work/recursiva-challenge
  cd recursiva-challenge
  pnpm install
  pnpm dev
```

Luego ingresamos a: `http://localhost:5173/`

## Challenge

Generar una aplicación web (en el lenguaje que prefiera), que lea el 
contenido del archivo socios.csv y muestre por pantalla la siguiente 
información (se debe proponer como mostrar la información):

- Cantidad total de personas registradas. 
- El promedio de edad de los socios de Racing. 
- Un listado con las 100 primeras personas casadas, con estudios 
Universitarios, ordenadas de menor a mayor según su edad. Por 
cada persona, mostrar: nombre, edad y equipo. 
- Un listado con los 5 nombres más comunes entre los hinchas de River.
- Un listado, ordenado de mayor a menor según la cantidad de 
socios, que enumere, junto con cada equipo, el promedio de edad 
de sus socios, la menor edad registrada y la mayor edad registrada.

## Solución

La aplicación se hizo con React + Typescript y utilizando TailwindCSS para los estilos.
El usuario debe ingresar el archivo socios.csv y cargarlo.

Una vez que el archivo se procesa por defecto se muestra una tabla con los primeros 3 reportes del challenge. Tenemos la opción de cambiar los listados con un select, lo cual nos da la opción de elegir entre los 3 listados del challenge.