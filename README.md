# Sanplast

**Sanplast** is a lightweight and modern web application for managing and displaying plastic product data. It uses [Astro](https://astro.build/) as a fast, content-driven frontend framework and connects to a headless CMS for data retrieval.

---

## 🚀 Features

- **Static-first frontend** built with Astro
- **Read-only API** consumption from Strapi
- Clean UI for displaying structured product data
- Fully decoupled and scalable architecture

---

## 🧭 Architecture

| Layer     | Technology      | Description                     |
|-----------|------------------|---------------------------------|
| Frontend  | **Astro**        | Static site generator (SSG/SSR) |
| Backend   | **Strapi**       | Headless CMS & REST API         |
| Database  | **PostgreSQL**   | Data storage via Strapi         |

> ℹ️ **Originally**, the backend was implemented using Laravel. Later, the project transitioned to **Strapi** to accelerate development and simplify content management through a visual admin interface.

> 🔒 **Note:** The frontend is fully **read-only**, consuming published content via API.

---

## 🧩 Content Structure

- **Products** (nombre, modelo, tipo, descripción)
- **Types** (e.g. tanque, caño, accesorio)
- **Images** and relations
- Only **published** entries are shown in the frontend

---

## 📈 Future Improvements

- Optional GraphQL integration
- Static site generation for public catalog
- Frontend search and filtering


---

## 🙋 Contact

**Author**: Ricardo Voegeli  
GitHub: [@risuiar](https://github.com/risuiar)

---

**Sanplast** — lightweight, structured, and open.
