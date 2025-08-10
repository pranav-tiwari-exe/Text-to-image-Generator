# Text-to-Image Generator

---

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-?logo=react&style=for-the-badge" />
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-?logo=node.js&style=for-the-badge" />
  <img alt="Express" src="https://img.shields.io/badge/Express-?logo=express&style=for-the-badge" />
  <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-?logo=mongodb&style=for-the-badge" />
  <img alt="Tailwind" src="https://img.shields.io/badge/TailwindCSS-?logo=tailwindcss&style=for-the-badge" />
  <img alt="Framer Motion" src="https://img.shields.io/badge/Framer%20Motion-?logo=framer&style=for-the-badge" />
  <img alt="Axios" src="https://img.shields.io/badge/Axios-?logo=axios&style=for-the-badge" />
  <img alt="JWT" src="https://img.shields.io/badge/JWT-?logo=jsonwebtokens&style=for-the-badge" />
  <img alt="bcrypt" src="https://img.shields.io/badge/bcrypt-?logo=bcrypt&style=for-the-badge" />
</p>

---

## Overview
Text-to-Image Generator is a full-stack project that lets users convert text prompts into images. The repository contains a React-based frontend and a Node/Express backend, together providing user authentication, protected endpoints, prompt submission, and image preview/download capabilities. The app is built to support local or third-party image generation providers.

---

## Key Features
- User registration & login (JWT)
- Protected API endpoints for authenticated image generation
- Prompt input, generate, preview, and download images
- Responsive UI with Tailwind + Framer Motion
- In-app toast notifications and status feedback

---

## Tech Stack
- Frontend: React, Tailwind CSS, Framer Motion, react-toastify, axios  
- Backend: Node.js, Express, MongoDB (Mongoose), bcrypt, jsonwebtoken  
- Optional: Third-party image generation provider integration

---


## Auth Flow
1. Register → server returns JWT + user object.  
2. Client stores token (e.g., `localStorage.setItem('token', token)`).  
3. Client sends `Authorization: Bearer <token>` header for protected requests.  
4. Server middleware verifies token and attaches user info (e.g., `req.user = { userId: decoded.id }`).



