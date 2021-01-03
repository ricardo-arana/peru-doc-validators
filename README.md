# peru-doc-validators

## Descripción

Pequeña libreria para la validacion de formatos de número de documentos

## Ejemplo

```javascript
import { Dni } from "peru-doc-validators";

const dni = new Dni("123456", "5");
console.log(dni.isValid); // false
```

## Obtener todos los tipos de documentos

```javascript
import { allTypes } from "peru-doc-validators";
```
