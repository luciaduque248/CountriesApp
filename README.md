# 🌍 Country Explorer

**Desarrollado por Sara Lucía Duque Parra – Frontend Developer**

Aplicación interactiva para explorar países del mundo, con filtros por nombre y región, diseño responsivo y soporte para tema oscuro. Construida con **Next.js 15**, **React 19**, **TypeScript** y **TailwindCSS**.

---

## 📸 Pantallazos

### 🖥️ PC

- **Dark Mode**
  ![PC_DarkMode](./screenshots/PC_DarkMode.png)
- **Light Mode**
  ![PC_LightMode](./screenshots/PC_LightMode.png)

### 📱 Móvil

- **Dark Mode**
  ![Mobile_DarkMode](./screenshots/Mobile_DarkMode.png)
- **Light Mode**
  ![Mobile_LightMode](./screenshots/Mobile_LightMode.png)

---

## 🔧 Generalidades de la solución

El desarrollo del proyecto se llevó a cabo utilizando **Next.js 14 con la App Router**, haciendo uso de los componentes como `page.tsx` y `layout.tsx` para definir la estructura de navegación. A continuación, se describen las generalidades de cómo se resolvió el reto:

- Se integró la API de [restcountries.com](https://restcountries.com/) para obtener todos los datos de los países.
- Se implementó una **búsqueda por nombre** y **filtrado por región**, permitiendo una experiencia de usuario fluida y precisa.
- Se realizó navegación dinámica mediante `app/country/[code]/page.tsx`, permitiendo ver el detalle de cada país por su código.
- Se utilizó `shadcn/ui` y `lucide-react` para crear una interfaz moderna, accesible y con diseño responsivo.
- Se incorporó la tipografía **Nunito Sans** desde Google Fonts, siguiendo una paleta de colores basada en HSL.

### 🌙 Soporte de Dark Mode

- Se usó el paquete `next-themes` para detectar y alternar entre temas claro y oscuro.
- Se aplicaron clases condicionales de Tailwind (`dark:`) para cambiar los estilos según el tema actual, respetando el sistema del usuario.

### 🧪 Pruebas Unitarias

- Se configuró Jest y Testing Library para realizar pruebas de componentes clave como `CountryCard`, `SearchInput` y `RegionFilter`.
- Se añadieron mocks y casos de prueba que aseguran la correcta renderización, interactividad y respuesta de los componentes.


---
El proyecto sigue una arquitectura **modular basada en componentes reutilizables**, combinada con las capacidades del **App Router de Next.js** para definir rutas y layouts a nivel de archivo. La estructura se organizó bajo `src/` y prioriza claridad, separación de responsabilidades y facilidad de mantenimiento. Las principales decisiones arquitectónicas fueron:

- Uso de `app/` como entrada principal del sistema, aprovechando `layout.tsx` para envoltura global (temas, tipografía, estructura).
- División en capas claras:
  - `components/`: componentes visuales y funcionales reutilizables.
  - `lib/`: funciones auxiliares para consumo de APIs y utilidades.
  - `types/`: definición de tipos TypeScript para mantener tipado seguro.
  - `tests/`: pruebas unitarias separadas por componente.
- Implementación de rutas dinámicas como `country/[code]/page.tsx` para navegación basada en datos desde la API.
- Adopción de TailwindCSS + shadcn/ui para diseño consistente y componentes estilizados sin perder flexibilidad.

Esta arquitectura permite escalar la aplicación fácilmente, probar de forma aislada y mantener una experiencia de usuario sólida en cualquier dispositivo.

---

## 📁 Estructura del proyecto

La siguiente estructura se encuentra organizada bajo la carpeta principal `src/`, siguiendo principios de modularidad y separación de responsabilidades:

```bash
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── country/
│       └── [code]/
│           └── page.tsx
│
├── components/
│   ├── CountryCard.tsx
│   ├── Header.tsx
│   ├── RegionFilter.tsx
│   ├── SearchInput.tsx
│   ├── ThemeToggle.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── dropdown-menu.tsx
│       └── input.tsx
│
├── lib/
│   ├── api.ts
│   └── utils.ts
│
├── styles/
│   └── globals.css
│
├── tests/
│   ├── CountryCard.test.tsx
│   ├── RegionFilter.test.tsx
│   ├── SearchInput.test.tsx
│   └── global.d.ts
│
└── types/
    └── country.ts

```

---

## 🛠️ Tecnologías utilizadas

- [Next.js 15.3.5](https://nextjs.org/) – Framework de React para renderizado híbrido (SSR/SSG), rutas tipo file-system y optimización automática del rendimiento.
- [React 19.1.0](https://react.dev/) – Librería para construir interfaces de usuario reactivas y basadas en componentes.
- [TypeScript 5.8.3](https://www.typescriptlang.org/) – Superset de JavaScript con tipado estático que mejora la escalabilidad y mantenibilidad del código.
- [TailwindCSS](https://tailwindcss.com/) – Framework de utilidades CSS para aplicar estilos de forma rápida, consistente y totalmente personalizable.
- [shadcn/ui](https://ui.shadcn.com/) – Librería de componentes accesibles construidos sobre Radix UI, pensada para trabajar con TailwindCSS.
- [Font Awesome React 0.2.2](https://fontawesome.com/) – Iconografía vectorial popular, utilizada para mejorar la experiencia visual.
- [Lucide React 0.525.0](https://lucide.dev/) – Colección moderna de íconos open source con diseño minimalista.
- [next-themes 0.4.6](https://github.com/pacocoursey/next-themes) – Gestión de temas (dark/light) con persistencia automática y soporte para SSR.
- [Jest](https://jestjs.io/) – Framework de pruebas robusto para JavaScript y TypeScript, ideal para pruebas unitarias.
- [React Testing Library 16.3.0](https://testing-library.com/) – Testing centrado en el comportamiento del usuario y no en los detalles de implementación.
- [Radix UI](https://www.radix-ui.com/) – Sistema de componentes accesibles sin estilos por defecto, usado como base para el filtro de región (`DropdownMenu`).


---

## 🧪 Pruebas

Se incluyeron pruebas unitarias ubicadas en `src/tests/` para validar el comportamiento de los componentes clave:

- ✅ `CountryCard.test.tsx`: Verifica que se renderice la información del país.
- ✅ `SearchInput.test.tsx`: Asegura el correcto renderizado del input y el placeholder.
- ✅ `RegionFilter.test.tsx`: Simula la interacción con el dropdown y verifica llamadas a `onChange`.

Para ejecutar las pruebas:

```bash
npm run test

