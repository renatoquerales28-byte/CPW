# Centhropy Editorial System (CES) - Plan de Proyecto

## 1. Contexto del Proyecto
El sitio web de Centhropy requiere una herramienta de gestión administrativa robusta pero minimalista que permita al equipo editorial gestionar el contenido dinámico de la plataforma sin necesidad de tocar el código fuente. El foco principal es la gestión de noticias y la curación visual del menú desplegable principal (modular).

## 2. Objetivos Principales
- **Centralización**: Gestionar "Sala de Prensa" y "Estudios de Impacto" desde un solo lugar.
- **Control Visual**: Permitir la actualización de "Slots" específicos en el menú (Últimas Noticias, Anuncio Corporativo, Estudio de Impacto destacado).
- **UX de Copiar-Pegar**: La interfaz debe facilitar la integración de artículos existentes en Medium u otras plataformas mediante la captura de metadatos manuales de forma rápida.

## 3. Requerimientos Técnicos (Stack Sugerido)
- **Frontend**: React (Vite) + Tailwind CSS + Lucide React (Integrado en el proyecto actual).
- **Base de Datos & Auth**: **Supabase** (Recomendado por su facilidad de configuración y sistema de autenticación listo para usar) o Firebase.
- **Almacenamiento (Assets)**: **Supabase Storage** para la gestión de imágenes de alta resolución (Blog/Noticias).
- **Estado Global**: React Context o TanStack Query para el fetching de datos.
- **Hosting**: Vercel o Netlify (conectado al repositorio actual).

## 4. Requerimientos de GUI (Interfaz Gráfica)
La estética debe seguir el ADN de Centhropy: **"Military Tactical / Premium Minimalist"**.
- **Dark Mode**: Fondo negro puro (#000000) o gris táctico muy oscuro con acentos blancos y bordes de 0.1px.
- **Layout**: Sidebar lateral izquierda para navegación y área central de formularios/listas.
- **Componentes**: 
  - Cards tácticas con estados de hover animados.
  - Inputs minimalistas con tipografía monoespaciada para datos técnicos.
  - Previsualización en tiempo real de cómo se verá el elemento en la web.

## 5. Requerimientos Funcionales

### A. Gestor de Sala de Prensa
- **CRUD Completo**: Crear, Leer, Actualizar y Eliminar items (Noticias/Casos de Éxito).
- **Categorización**: Asignación de categorías (Blockchain, Retail, AI, etc.).
- **Manejo de Imágenes**: 
  - Subida directa de archivos (Drag & Drop) a la base de datos de assets.
  - Soporte para pegado de URLs externas de imágenes optimizadas.
  - Previsualización automática antes de publicar.

### B. Manager de Slots (Menú Modular)
Esta es la parte más crítica. El administrador podrá gestionar los 3 "Slots" del menú desplegable:
1. **Slot : Últimas Noticias**: Seleccionar qué noticia de la base de datos aparece en la primera posición del menú.
2. **Slot : Anuncio Corporativo**: Seleccionar el item que ocupa el slot central.
3. **Slot : Estudios de Impacto**: Elegir qué caso de éxito se destaca en la columna derecha del menú.

## 6. Modelo de Datos (Esquema Sugerido)
```json
{
  "id": "uuid",
  "type": "news | impact_study",
  "title": "string",
  "subtitle": "string",
  "category": "string",
  "image_url": "string",
  "medium_url": "string",
  "date": "timestamp",
  "is_featured": "boolean (Slot allocation)",
  "slot_position": "1 | 2 | 3 | null"
}
```

## 7. Plan de Acción (Fases)

### Fase 1: Infraestructura (Semana 1)
- Configuración de proyecto en Supabase.
- Creación de tablas (`posts`, `slots`).
- Configuración de **Buckets de Almacenamiento** para imágenes.
- Implementación de Login administrativo (Ruta protegida `/admin`).

### Fase 2: CRUD Sala de Prensa (Semana 2)
- Desarrollo de formularios de entrada de datos.
- Galería de gestión de noticias actuales.
- Integración del frontend del sitio web con la base de datos (reemplazar JSON estático).

### Fase 3: Lógica de Slots & Menú (Semana 3)
- Interfaz de "Drag & Drop" o selección para asignar noticias a los slots del menú.
- Refactorización del `Navbar.jsx` para leer los slots desde la base de datos.

### Fase 4: Pulido & Seguridad (Semana 4)
- Optimización de carga de imágenes (WebP).
- Auditoría de seguridad en las reglas de la base de datos.
- Pruebas de usuario.

---
**Documento generado para:** Centhropy Development Team
**Ubicación:** /PROYECTOS/PANEL_EDITORIAL.md
**Estado:** Pendiente de Ejecución
