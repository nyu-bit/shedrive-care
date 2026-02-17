# 🚗 SheDrive Care - Assets

## ✅ Status Actual del Hero

- ✅ **Estructura HTML completa** (layout 2 columnas)
- ✅ **CSS con grid layout responsive**  
- ✅ **Placeholder SVG funcionando**
- ⏳ **Necesita imagen real profesional**

## 📁 Estructura de Archivos

```
/assets/
├── hero-mechanic.svg     ← Placeholder temporal (ACTIVO)
├── hero-mechanic.jpg     ← Imagen real (PENDIENTE)
└── README.md            ← Este archivo
```

## 🎯 Siguiente Paso: Agregar Imagen Real

### 1. Descargar Imagen Profesional

**Criterios obligatorios:**
- ✅ Mecánica femenina profesional en uniforme limpio
- ✅ Trabajando en sistema de frenos automotriz
- ✅ Expresión confiada y competente (no sonrisia forzada)
- ✅ Iluminación natural, profesional
- ✅ Fondo de garaje moderno/minimalista
- ✅ Estética premium de startup
- ✅ No sexualizada, completamente respetuosa

### 2. Especificaciones Técnicas

| Propiedad | Valor |
|-----------|--------|
| **Formato** | JPG optimizado |
| **Dimensiones** | 1200x800px mínimo |
| **Aspecto Ratio** | 3:2 o 4:3 |
| **Peso máximo** | 500KB |
| **Calidad** | Alta pero optimizada para web |
| **Nombre del archivo** | `hero-mechanic.jpg` |

### 3. Fuentes Recomendadas

**Gratuitas:**
- [Unsplash](https://unsplash.com) - Búsqueda: "female mechanic professional"
- [Pexels](https://pexels.com) - Búsqueda: "woman automotive technician"

**Premium:**
- Shutterstock 
- Getty Images

### 4. Términos de Búsqueda

```
"female mechanic professional"
"woman automotive technician" 
"professional car brake service"
"female auto mechanic working"
"woman engineer car garage"
"automotive service female professional"
```

### 5. Implementar la Imagen

#### Paso 1: Agregar archivo
1. Coloca la imagen descargada en `/assets/`
2. Asegúrate de que se llame exactamente: `hero-mechanic.jpg`

#### Paso 2: Actualizar HTML
En `/index.html`, línea 64, cambiar:

```html
<!-- CAMBIAR ESTA LÍNEA: -->
<img src="assets/hero-mechanic.svg" alt="Professional female mechanic working on car brakes - Replace with hero-mechanic.jpg" loading="eager">

<!-- POR ESTA: -->
<img src="assets/hero-mechanic.jpg" alt="Professional female mechanic working on car brakes" loading="eager">
```

¡Y listo! El hero tendrá la imagen real profesional.

## 🎨 Diseño Actual

**Layout implementado:**
- ✅ Grid 2 columnas (50% texto / 50% imagen)  
- ✅ Responsive (mobile stack)
- ✅ Overlay sutil violeta
- ✅ Texto limpio sin emojis
- ✅ CTAs profesionales
- ✅ Estilo WordPress premium

**Funcionalidades:**
- ✅ `object-fit: cover` automático
- ✅ Overlay con gradiente violeta
- ✅ Responsive breakpoints
- ✅ Alt text optimizado
- ✅ Loading optimizado

No necesitas cambiar CSS - solo agregar la imagen real y el diseño estará completo.