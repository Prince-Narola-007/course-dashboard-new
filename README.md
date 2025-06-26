# 🎓 Course Dashboard

A responsive and interactive course dashboard built using **Next.js**, **TypeScript**, and **Bootstrap**. The app showcases a grid of course cards with features like favorite toggle, JSON file download, filtering, sorting, search, and theme switching (dark/light mode).

---

## 🚀 Live Demo

👉 [Visit deployed site](https://course-dashboard-prince.netlify.app/)

---

## 📦 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Bootstrap 5, custom CSS
- **Icons**: React Icons
- **State Management**: React hooks (`useState`, `useEffect`)

---

## 📸 Features

### ✅ Core Functionalities
- Responsive grid layout for course cards
- Card includes:
  - Course image/thumbnail
  - Semester badge
  - Title and Course Code
  - Status badge (Open/Closed)
  - Action icons:
    - View Summary (Modal)
    - Download course as JSON
    - Add to Cart
    - Favorite toggle
- Three-dot menu (planned)

### 🎛 Dashboard Controls
- 🔍 Search bar (with clear button)
- 🎚 Sort dropdown (`title`, `code`) with reset option
- 🟢 Filter by status (`Open`, `Closed`, `All`) with reset option
- 🌗 Dark/Light mode toggle using Bootstrap theme classes

### 📡 API Integration
- Fetches mock course data from [MockAPI](https://mockapi.io/)
- Handles loading state with spinner
- Optimistic updates for favorite toggle

---

## 🛠 Setup Instructions

### 🔧 Clone & Install

```bash
git clone https://github.com/your-username/course-dashboard.git
cd course-dashboard
npm install
