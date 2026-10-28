# Sistema de Gestión de Productos

Aplicación en JavaScript para la gestión de productos, proveedores, clientes y técnicos, con cifrado de datos para comunicación segura con el servidor.

## Estructura de Datos

### Roles del Sistema

| ID | Rol |
|----|-----|
| 1 | Proveedor |
| 2 | Cliente |
| 3 | Técnico |

### Tipos de Producto

| ID | Tipo |
|----|------|
| 1 | Tecnológico |
| 2 | Hogar |
| 3 | Cuidado Personal |

### Variables Globales

| Variable | Descripción |
|----------|-------------|
| `productos` | Array de productos registrados |
| `proveedor` | Array de proveedores |
| `cliente` | Array de clientes |
| `tecnico` | Array de técnicos |

## Cifrado de Datos

El proyecto utiliza un esquema de cifrado **XOR + Base64** para proteger los datos enviados al servidor.

### Flujo de Cifrado
   
