````md
# 🏏 BPL Player Option

A responsive **Bangladesh Premier League (BPL) Player Selection** web application built with **React, TypeScript, Vite, and Tailwind CSS**.

Users can explore available BPL players, select players using a virtual coin system, manage their selected squad, and keep their selection saved even after refreshing the browser.

---

## 🚀 Live Demo

🔗 **Live Demo:** bpl-player-option.netlify.app

---

## 📸 Features

- 🏏 Browse available BPL players
- 👤 View player information
- 💰 Virtual coin system
- ➕ Select players
- ❌ Remove selected players
- 📊 Show available and selected player counts
- 🔔 Toast notifications
- 💾 Save selected players with `localStorage`
- 💰 Save coin balance with `localStorage`
- 🔄 Reset selected players and coin balance
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast development with Vite
- 🔷 TypeScript support
- ⏳ Loading state with React Suspense
- 📦 Player data loaded from JSON

---

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify
- JavaScript ES6+

---

## 📂 Project Structure

```text
bpl-player-option/
│
├── public/
│   ├── data.json
│   ├── favicon.svg
│   ├── icons.svg
│   └── logo.png
│
├── src/
│   ├── assets/
│   │
│   ├── component/
│   │   ├── players/
│   │   │   ├── AvaiableCard.tsx
│   │   │   ├── AvaiablePlayers.tsx
│   │   │   ├── SelectedCard.tsx
│   │   │   ├── SelectedPlayerCard.tsx
│   │   │   └── players.tsx
│   │   │
│   │   ├── Banner.tsx
│   │   ├── Footer.tsx
│   │   ├── Subscribe.tsx
│   │   └── navbar.tsx
│   │
│   ├── type/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
````

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Al-aminCodes/bpl-player-option.git
```

### 2. Go to the project directory

```bash
cd bpl-player-option
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will run on the local development server provided by Vite.

---

## 📦 Available Scripts

### Development

```bash
npm run dev
```

Starts the development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Lint

```bash
npm run lint
```

Checks the project for code-quality issues.

### Preview

```bash
npm run preview
```

Previews the production build locally.

---

## 🎮 How the Application Works

### 1. Available Players

The application loads player information from:

```text
public/data.json
```

Players are displayed in reusable player cards.

Each player contains information such as:

* Name
* Image
* Country
* Role
* Price

---

### 2. Coin System

The user starts with a virtual coin balance.

For example:

```tsx
const [coin, setCoin] = useState(5000);
```

When a player is selected, their price is deducted from the user's available coins.

When a player is removed, the player's price is added back.

---

### 3. Player Selection

Users can select players from the available player section.

The selected players are displayed separately.

The application also prevents invalid selections such as selecting the same player multiple times.

---

## 💾 Local Storage

The project uses the browser's `localStorage` API to preserve important application data.

### Saved Data

The following data is stored:

```text
coin
selectedPlayers
```

### Save Coin

```tsx
useEffect(() => {
  localStorage.setItem("coin", String(coin));
}, [coin]);
```

### Save Selected Players

```tsx
useEffect(() => {
  localStorage.setItem(
    "selectedPlayers",
    JSON.stringify(selectedPlayer)
  );
}, [selectedPlayer]);
```

### Restore Data

When the application starts, it checks `localStorage`:

```tsx
const [coin, setCoin] = useState<number>(() => {
  const savedCoin = localStorage.getItem("coin");

  return savedCoin ? Number(savedCoin) : 5000;
});
```

And selected players:

```tsx
const [selectedPlayer, setSelectedPlayer] = useState<IPlayerType[]>(() => {
  const savedPlayers = localStorage.getItem("selectedPlayers");

  return savedPlayers ? JSON.parse(savedPlayers) : [];
});
```

This means the user's selected squad and coin balance remain available after refreshing the browser.

---

## 🔄 Reset Function

The application also provides a reset functionality.

The reset button removes saved data from `localStorage` and restores the initial state.

```tsx
const handleReset = () => {
  localStorage.removeItem("coin");
  localStorage.removeItem("selectedPlayers");

  setCoin(5000);
  setSelectedPlayer([]);
};
```

After clicking **Reset**:

```text
Selected Players → Empty
Coins → 5000
localStorage → Cleared
```

---

## 🔔 Notifications

The application uses **React Toastify** to provide feedback to users.

Notifications are displayed for actions such as:

* ✅ Player successfully selected
* ❌ Player already selected
* 💰 Insufficient coins
* 🗑️ Player removed
* 🔄 Squad reset
* 📧 Successful subscription

---

## 📱 Responsive Design

The application is designed to work across different screen sizes.

### Supported Devices

* 📱 Mobile
* 📲 Tablet
* 💻 Laptop
* 🖥️ Desktop

Tailwind CSS responsive utilities are used to create the responsive layout.

---

## 🧠 React & TypeScript Concepts Practiced

This project demonstrates several important frontend concepts:

### React

* Functional Components
* Props
* `useState`
* `useEffect`
* Event Handling
* Conditional Rendering
* Component Reusability
* React Suspense

### TypeScript

* Interfaces
* Type Aliases
* Typed Props
* Typed State
* Function Types
* Type-safe Components

### JavaScript

* `map()`
* `filter()`
* `find()`
* Array manipulation
* Objects
* JSON
* `localStorage`
* `JSON.stringify()`
* `JSON.parse()`

---

## 🎨 UI Components

### Navbar

Displays:

* Logo
* Navigation
* Available coin balance

### Banner

Displays the main hero section and project introduction.

### Available Players

Displays all available players and allows users to select them.

### Selected Players

Displays the players selected by the user.

### Subscribe

Provides an email subscription section with toast notifications.

### Footer

Contains the application's footer information.

---

## 🔮 Future Improvements

* [ ] Add player search
* [ ] Add player filtering
* [ ] Add player sorting
* [ ] Add team-wise filtering
* [ ] Add player statistics
* [ ] Add player categories
* [ ] Add dark mode
* [ ] Add authentication
* [ ] Connect to a real backend API
* [ ] Add real BPL API integration
* [ ] Add squad limitations
* [ ] Add player details modal
* [ ] Add unit and integration tests

---

## 👨‍💻 Author

### Al-aminCodes

GitHub:

https://github.com/Al-aminCodes

---

## ⭐ Support

If you like this project, please consider giving the repository a ⭐ on GitHub.

---

## ❤️ Built With

**React + TypeScript + Vite + Tailwind CSS**

Made with ❤️ by **Al-aminCodes**

```
```

