## Iniciar Proyecto desde Cero

```shell
$ npm init -y
```

## Instalar Jest

```shell
$ npm i jest --save-dev
```

## Agregar el siguiente extracto en el archivo ***package.json***

```json
{
    ...
    "scripts": "jest --watchAll"
    ...
}
```

## Iniciar los test

```shell
$ npm run test
```