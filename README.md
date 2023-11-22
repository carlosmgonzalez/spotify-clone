# Descripción en español de mi Proyecto de Clon de Spotify

He tenido el increíble desafío de crear un clon de Spotify desde cero, sin recurrir a tutoriales, lo cual ha sido una experiencia verdaderamente gratificante. Este proyecto se ha desarrollado utilizando varias tecnologías que me han permitido construir tanto el frontend como el backend de manera integral.

En el frontend, he empleado el poderoso framework Astro junto con componentes de React para estructurar la interfaz de usuario. El diseño ha sido estilizado meticulosamente con Tailwind CSS y CSS Modules, lo que ha permitido lograr una apariencia estética y funcional.

Por otro lado, en el backend, he implementado una arquitectura sólida que aprovecha las capacidades del propio framework Astro para crear endpoints. Estos endpoints se conectan a una base de datos PostgreSQL que construí desde cero, definiendo tablas y relaciones entre ellas utilizando el ORM Prisma para facilitar la interacción con la base de datos desde el backend.

Una de las características destacadas es la capacidad de reproducir música, detenerla, avanzar o retroceder en la reproducción, ajustar el volumen y manipular la barra de reproducción. Todo esto se gestiona con precisión utilizando el estado global manejado por Zustand, lo que garantiza una experiencia fluida y sin interrupciones para el usuario.

Además, he aplicado la arquitectura de "Islas", donde gran parte del contenido se ejecuta y renderiza en el servidor, ofreciendo así un rendimiento óptimo al devolver HTML y CSS que se re-renderiza en el cliente. Sin embargo, ciertos sectores de la página se ejecutan y actualizan dinámicamente en el cliente, proporcionando una experiencia interactiva y ágil.

Este proyecto representa un hito importante en mi aprendizaje y desarrollo como programador, demostrando mi capacidad para trabajar de manera independiente y crear soluciones completas y robustas. Estoy emocionado por seguir explorando y mejorando este proyecto y espero poder compartir más avances pronto.

# English Description of My Spotify Clone Project:

I've taken on the incredible challenge of building a Spotify clone from scratch, without relying on tutorials, which has been a truly rewarding experience. This project has been developed using various technologies that have allowed me to build both the frontend and backend comprehensively.

On the frontend, I've employed the powerful Astro framework along with React components to structure the user interface. The design has been meticulously styled using Tailwind CSS and CSS Modules, resulting in an aesthetic and functional appearance.

On the backend, I've implemented a robust architecture that leverages the capabilities of the Astro framework itself to create endpoints. These endpoints connect to a PostgreSQL database that I built from scratch, defining tables and relationships between them using the Prisma ORM to facilitate interaction with the database from the backend.

One of the standout features is the ability to play music, stop it, skip forward or backward in the playback, adjust the volume, and manipulate the playback bar. All of this is precisely managed using global state handled by Zustand, ensuring a smooth and uninterrupted experience for the user.

Furthermore, I've applied the "Islands" architecture, where a significant portion of the content runs and renders on the server, offering optimal performance by returning HTML and CSS that is re-rendered on the client. However, certain sections of the page execute and dynamically update on the client, providing an interactive and agile experience.

This project represents a significant milestone in my learning and development as a programmer, showcasing my ability to work independently and create comprehensive and robust solutions. I'm excited to continue exploring and improving this project and look forward to sharing more progress soon.


# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
