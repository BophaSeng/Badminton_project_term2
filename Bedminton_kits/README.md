# 🏸 BadminKits

> A Badminton Court Booking & Equipment Shop — built with ReactJS

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?style=flat&logo=reactrouter)
![LocalStorage](https://img.shields.io/badge/Storage-LocalStorage-F7DF1E?style=flat)

---

## 📌 Project Overview

**BadminKits** is a ReactJS web application that allows users to book badminton courts and shop for equipment. It features a full role-based system with separate **User** and **Admin** interfaces, data persistence using **LocalStorage**, and clean routing with **React Router DOM**.

---

## ✨ Features

| # | Feature | Side |
|---|---------|------|
| 1 | Authentication (Login & Register) | Both |
| 2 | Court Booking (date & time slot) | User |
| 3 | Equipment Shop + Cart | User |
| 4 | Profile Management | User |
| 5 | Search & Filter | User |
| 6 | Admin Dashboard (stats) | Admin |
| 7 | Court & Product CRUD Management | Admin |

---

## 🗂️ Project Structure

```
src/
├── components/          # Shared UI (Navbar, AdminSidebar)
├── context/
│   └── AuthContext.jsx  # Global login state
├── pages/
│   ├── Login.jsx        # Login & Register (URL params)
│   ├── user/            # Home, Shop, Cart, Booking, Profile
│   └── admin/           # Dashboard, ManageCourts, ManageProducts, ManageBookings
├── routes/
│   └── AppRoutes.jsx    # All routes + PrivateRoute protection
├── utils/
│   └── storage.js       # LocalStorage helper (shared utility)
├── App.jsx
└── main.jsx
```

---

## 💾 LocalStorage Keys

| Key | Data Stored |
|-----|-------------|
| `bk_user` | Current logged-in user |
| `bk_users` | All registered accounts |
| `bk_cart` | User's cart items |
| `bk_bookings` | All court bookings |
| `bk_courts` | Available courts list |
| `bk_products` | Equipment products |

---

##  Getting Started(How to run)

### Prerequisites

- Node.js v18+
- npm v9+

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/BophaSeng/Badminton_project_term2.git

# 2. Navigate into the project
cd Badminton_project_term2

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open your browser at `http://localhost:5173`

---

## 👥 Team Members & Task Division

| Member | Name | Role | Pages |
|--------|------|------|-------|
| M1 | **Seng Chansreybopha** | Foundation + Auth | Project setup, AuthContext, AppRoutes, Login/Register, Navbar |
| M2 | **Yuth Molika** | User Side | Home, Shop, Cart, Booking, Profile |
| M3 | **Rinn Layheang** | Admin Side | Dashboard, ManageCourts, ManageProducts, ManageBookings, AdminSidebar |

---

##  Git Workflow

We use a **branch-per-member** strategy to avoid conflicts:

```
main                  ← stable base (Member 1 manages)
feature/user-pages    ← Member 2's branch
feature/admin-pages   ← Member 3's branch
```

**Workflow for each member:**
```bash
# Work on your branch
git checkout feature/your-branch

# Stage and commit
git add .
git commit -m "add Shop page"

# Push to GitHub
git push origin feature/your-branch

# Then open a Pull Request on GitHub → merge into main
```

---

## 📅 3-Week Timeline

| Week | Focus | Status |
|------|-------|--------|
| Week 1 | Project setup, folder structure, Auth, UI skeleton, placeholder pages | ✅ Done |
| Week 2 | Full feature pages with LocalStorage CRUD operations | 🔄 In Progress |
| Week 3 | Bug fixes, feature integration, UI polish, final review | 📋 Planned |

---

## 🧠 Tech Stack

- **ReactJS 18** — UI library
- **Vite 5** — Build tool & dev server
- **React Router DOM v6** — Client-side routing
- **LocalStorage API** — Data persistence (no backend)
- **CSS Modules / Inline Styles** — Styling

---

## 📄 License

This project was created for academic purposes as part of a ReactJS Frontend course — Term 2.
