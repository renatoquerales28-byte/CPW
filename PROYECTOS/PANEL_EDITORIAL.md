# Centhropy Editorial System (CES) - Documentación Técnica y Operativa

## 1. Estado Actual del Proyecto
- **Versión Actual**: v4.1 (Tactical Core)
- **Estado**: Fase de Implementación Core Completada (V1 Funcional).
- **Última Actualización**: 2026-02-23
- **Ambiente**: Integrado con el Frontend de Centhropy Website.

## 2. Definición del Módulo (CES)
El **Centhropy Editorial System (CES)** es el motor administrativo diseñado bajo una estética "Military Tactical / Premium Minimalist" que permite la gestión dinámica del contenido en frecuencia de la plataforma. Ha sido desarrollado para eliminar la dependencia de modificaciones manuales en el código fuente para actualizaciones diarias.

## 3. Arquitectura del Sistema
### A. Componentes Core
1. **`EditorialPanel.jsx`**: Interfaz principal del centro de mando.
2. **`useEditorial.js`**: Custom hook que centraliza toda la lógica de estado, persistencia (LocalStorage por ahora) y operaciones CRUD.
3. **`AdminLogin.jsx`**: Punto de acceso restringido con clave de frecuencia en `/terminal-x92-core`.
4. **`Navbar.jsx`**: Integración del lado del cliente que consume y renderiza el contenido seleccionado en tiempo real.

### B. Flujo de Datos
- Las publicaciones se crean y almacenan como objetos estructurados.
- Cada publicación puede estar en estado **Activa** o **Inactiva**.
- Los **Slots** del menú modular (01 a 04) actúan como punteros hacia IDs de publicaciones específicas.

## 4. Funcionalidades Implementadas

### Gestión de Contenido (Directorio de Publicaciones)
- **CRUD Operativo**: Creación, lectura, actualización (edición) y eliminación de entradas.
- **Control de Frecuencia**: Activación/Desactivación instantánea de posts mediante toggle visual (Eye/EyeOff).
- **Categorización**: Soporte para "Sala de Prensa", "Anuncios Corporativos" y "Estudios de Impacto".

### Sistema de Assets (Imágenes)
- **Carga Local**: Soporte para subir imágenes directamente desde el equipo mediante conversión Base64.
- **Vínculo por URL**: Soporte tradicional para imágenes alojadas externamente (Unsplash, Cloudinary, etc.).
- **AspectRatio Lock**: Todas las imágenes se ajustan automáticamente a los marcos definidos (`object-cover`) para preservar la integridad visual del sitio.

### Control Modular (Slots del Sistema)
- **Slot 01: Noticia Principal**: Renderizado destacado en el menú.
- **Slot 02: Noticia Secundaria**: Segundo item de noticias en la navegación.
- **Slot 03: Anuncio Corporativo**: Item central del menú modular.
- **Slot 04: Estudios de Impacto**: Columna derecha de casos de éxito.

## 5. Guía de Interfaz (Aesthetic Rules)
- **Fondo**: Pure Black (#000000).
- **Bordes**: High-visibility dividers (white/25) con alineación quirúrgica (Header/Sidebar h: 120px).
- **Tipografía**: Font Funnel / Mono con peso **Medium** (Black eliminado para mayor refinamiento).
- **Micro-animaciones**: Estados de hover tácticos, feedback de vinculación en verde esmeralda y retroalimentación de error en rojo frecuencia.

## 6. Próximos pasos (Roadmap Backend)
1. **Migración a Producción**: Reemplazar `localStorage` por **Supabase** (Auth + Postgres + Storage).
2. **Bucket de Assets**: Implementar el gestor de archivos real en lugar de Base64 para optimizar la carga del sitio.
3. **Roles de Usuario**: Diferenciación entre Admin de Sistema y Editor de Contenido.

---
**Proyecto**: Centhropy Website Core
**Documento Actualizado por**: Antigravity AI
**Rama**: `web`
