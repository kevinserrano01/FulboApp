# ⚽️ Fulbo App

## 📌 **Documentación Técnica**

### **Introducción del Proyecto**

- **Breve descripción de la aplicación:**
  Fulbo App es una aplicación móvil diseñada para los amantes del fútbol en Salta Capital. Permite a los usuarios buscar canchas, consultar horarios disponibles, reservar canchas, y gestionar su perfil. Todo esto desde una interfaz intuitiva y funcional para dispositivos iOS y Android.

- **Propósito y objetivos del proyecto:**
  El propósito principal de Fulbo App es simplificar el proceso de reservar canchas de fútbol, promoviendo la práctica deportiva. Entre sus objetivos, se encuentran:
  - Proveer una experiencia de usuario fluida para la búsqueda y reserva de canchas.
  - Facilitar la organización de partidos al ofrecer disponibilidad en tiempo real.
  - Ofrecer funcionalidades personalizables, como la edición del perfil del usuario.

### 📌 **Guía de Instalación**

- **Requisitos previos**
  - Node.js (versión 14 o superior)
  - npm (versión 6 o superior)
  - React (versión 17 o superior)
  - React Native 0.74.5
  - Expo 51.0.28

### **Instrucciones de instalación**

1. Clona el repositorio:
   ```bash
   git clone https://github.com/kevinserrano01/FulboApp.git
   cd FulboApp
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia la aplicación:
   ```bash
   npx expo start
   ```

### 📌 **Configuración del entorno**

Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables de entorno:

[`.env`](./.env)

```env
EXPO_PUBLIC_BASE_URL = "https://tu-api-url.com"
EXPO_PUBLIC_BASE_AUTH_URL = "https://tu-api-auth-url.com"
EXPO_PUBLIC_API_KEY = "tu-api-key"
EXPO_PUBLIC_GEOCODING_API_KEY = "tu-google-maps-api-key"
```

### 📌 **Descripción de los módulos**

- **Components**: Contiene los componentes reutilizables de la interfaz, como botones, formularios, y tarjetas para mostrar información de las canchas.
- **Services**: Contiene las funciones para interactuar con las API, como la autenticación, la gestión de reservas, y las búsquedas de canchas.
- **Features**: Cada funcionalidad principal de la aplicación, como el inicio de sesión, las reservas y el perfil del usuario, se encuentra organizada en carpetas separadas.

### 📌 **Guía de Uso:**

- **Ejemplos de uso:**
  1. Registro de Usuario:
  - Ingresa tus datos personales en el formulario de registro y crea tu cuenta.
  2. Reservar una Cancha:
  - Busca una cancha específica usando el buscador.
  - Revisa la disponibilidad en el calendario.
  - Selecciona el día y horario deseado, y confirma tu reserva.
  3. Editar tu Perfil:
  - Accede a la sección "Perfil".
  - Cambia tu foto de perfil o edita tu información personal.

### 📌 **Vista previa de aplicacion**

![Captura de pantalla](./screenshots/preview.png)

### 📌 **Flujos de trabajo:**

#### 1 Registro y Autenticación:

- El usuario crea una cuenta o inicia sesión con credenciales válidas.

#### 2 Gestión de Canchas:

- Los usuarios visualizan las canchas disponibles en un mapa interactivo y filtran por nombre.

#### 3 Reservas:

- Los usuarios seleccionan fecha y hora, revisan la disponibilidad y confirman la reserva.

### 📌 **Documentación de Usuario Final**

#### Manual del Usuario:

#### 1 Inicio de Sesión:

- Ingresa tu correo electrónico y contraseña para acceder a la app.

#### 2 Búsqueda de Canchas:

- Usa el buscador para encontrar canchas por nombre.

#### 3 Reserva:

- Selecciona una cancha, revisa disponibilidad, y realiza tu reserva.

### 📌 **Descripción de funcionalidades:**

- Búsqueda de Canchas: Filtra y encuentra canchas por nombre fácilmente.
- Mapa Interactivo: Consulta la ubicación exacta de cada cancha usando Google Maps.
- Reservas: Revisa horarios y reserva con un solo clic.
- Gestión de Perfil: Edita tu foto de perfil y datos personales.
- Cierre de Sesión: Finaliza tu sesión de manera segura.

### 📌 **Preguntas Frecuentes (FAQs):**

1 ¿Qué pasa si olvido mi contraseña?

- Próximamente se implementará un sistema de recuperación de contraseñas.
  2 ¿Puedo cancelar una reserva?
- Sí, desde la sección "Mis Reservas" puedes gestionar tus reservas activas.
  3 ¿Hay límite de reservas por usuario?
- Actualmente no hay límite, pero las reservas están sujetas a disponibilidad.
