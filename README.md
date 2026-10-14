# React - MVP Physical Activity Tracker

🌐 **English** | [Português (BR)](README.pt-BR.md)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

## 🌐 About
Project developed while studying React.
**MVP** is a physical activity tracker focused on three disciplines: **Jiu-Jitsu**, **Gym** and **Running**. The app lets you log new workouts with fields specific to each discipline, built with reusable components, custom hooks and separate pages.

The goal is to evolve it into a complete application, with user accounts, personal data stored in the cloud and dashboards to track training progress.

> 🚧 Project under development.

> [!IMPORTANT]
> **Before running the application:**
>
> 1. Clone the repository:
>    ```bash
>    git clone https://github.com/lucasSperafico/MVP.git
>    ```
> 2. Enter the project folder:
>    ```bash
>    cd MVP
>    ```
> 3. Install the dependencies:
>    ```bash
>    npm install
>    ```
> 4. Start the development server:
>    ```bash
>    npm run dev
>    ```
> 5. Open in your browser:
>    ```bash
>    localhost:5173/
>    ```

---

## 📚 Features

### 1. New Workout:
Dedicated page to log a new physical activity.

### 2. Discipline-Specific Content:
Each discipline (Jiu-Jitsu, Gym and Running) has its own component with the fields relevant to that type of workout.

### 3. Light/Dark Theme:
Theme switching through the custom `useTheme` hook.

---

## 🗺️ Roadmap

Features planned for upcoming versions:

- [ ] User **authentication** with Firebase Authentication
- [ ] Cloud **database** with Firebase
- [ ] Per-user **personal data** (profile, measurements, goals), protected by access rules
- [ ] **Workout history** by discipline
- [ ] **Dashboards** with charts and progress statistics
- [ ] And other improvements along the way

---

## 🛠️ Technologies and Tools

### In use
- **React 19**
    - **Hooks** (including custom hooks)
    - **Component-based architecture**
- **Vite**
    - **@vitejs/plugin-react**
- **NPM**
    - **Oxlint**
- **JavaScript (ES Modules)**
- **HTML5 & CSS3**

### Planned
- **Firebase**
    - **Authentication**
    - **Database**

---

## 📜 Available Scripts

- `npm run dev` - starts the development server
- `npm run build` - creates the production build
- `npm run preview` - builds and opens a local preview
- `npm run lint` - runs the linter
