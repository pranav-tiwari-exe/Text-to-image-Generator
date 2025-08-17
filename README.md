# Text-to-Image Generator


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



