# Proyecto Final Backend Node.js – API REST con Firebase, Express y JWT

Este proyecto implementa una **API REST completa** para administrar productos almacenados en **Cloud Firestore**, cumpliendo las consignas del Proyecto Final del curso de Node.js.

Incluye autenticación mediante **JWT**, manejo de errores, arquitectura en capas y protección de rutas.

---

## 🚀 Tecnologías principales
- **Node.js + Express**
- **Firebase Admin (Firestore)**
- **JWT (jsonwebtoken)**
- **dotenv**
- **CORS + body‑parser**

---

## 📂 Arquitectura del proyecto
Estructura basada en capas para mantener un código ordenado y escalable:

```

src/
├── config/          -> configuración de Firebase
├── routes/          -> rutas Express (auth y products)
├── controllers/     -> lógica para cada endpoint
├── services/        -> validaciones y reglas de negocio
├── models/          -> acceso a Firestore
├── middlewares/     -> auth + manejo de errores
└── index.js         -> servidor principal

```

---

## 🔐 Autenticación
- Login en `/auth/login`.
- Verifica credenciales básicas (mock o reales según el curso).
- Genera un **Bearer Token JWT**.
- Rutas protegidas usan middleware: `authenticate`.

---

## 🗃️ Conexión a Firebase
- Proyecto creado en Firebase Console.
- Se usa únicamente **firebase-admin** (backend).
- Variables de entorno cargadas desde `.env`.
- Ejemplo en `.env.example`:

```

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY="clave con saltos de línea en formato string"
PORT=3000
JWT_SECRET=

```

---

## 📦 Endpoints de Productos
Todos bajo `/api/products`.

### GET `/api/products`
Devuelve todos los productos.

### GET `/api/products/:id`
Devuelve un producto por ID.

### POST `/api/products/create` (protegido)
Crea un nuevo producto.

### DELETE `/api/products/:id` (protegido)
Elimina un producto.

*Opcional: PUT/PATCH, no requerido por la consigna.*

---

## 🧠 Lógica principal
### Servicios
- Validan los datos de entrada.
- Definen defaults (categoría, descripción, createdAt, etc.).
- Lanzan errores con `{ status, message }`.

### Modelos
- Conexión directa a Firestore.
- Métodos CRUD usando:
  - `collection()`
  - `doc()`
  - `get()`
  - `add()`
  - `delete()`
  - `update()`

---

## ❗ Manejo de errores
Middlewares incluidos:

- `notFound` → 404 para rutas inexistentes.
- `errorHandler` → captura errores y responde con `status` y `message`.

Los controladores usan `try/catch` y delegan errores con `next(err)`.

---

## 🔒 Códigos de estado usados
- **200** → OK
- **201** → Creado (POST)
- **400** → Datos inválidos
- **401** → Token inválido / no provisto
- **403** → Acceso denegado (si el token es válido pero no autorizado)
- **404** → Ruta o recurso inexistente
- **500** → Error interno

---

## 📝 Scripts útiles
Desde `package.json`:

```

"dev": "node --watch src/index.js",
"prod": "node src/index.js"

```

Corrección automática de recargas con `--watch`.

---

## ✔️ Estado del proyecto
Todas las consignas del proyecto final fueron cumplidas:
- Arquitectura modular
- Firebase conectado
- CRUD completo
- JWT funcionando
- Middlewares implementados
- Manejo de errores correcto

---

## 📌 Comentarios finales
El proyecto quedó limpio, modular y fácil de extender (por ejemplo, para agregar PUT, validaciones extra o roles de usuario).



