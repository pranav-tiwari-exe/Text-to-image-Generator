# Text-to-Image Generator
![Project: Text-to-Image Generator](https://img.shields.io/badge/Text--to--Image%20Generator-Project-green?style=for-the-badge)
![Status](https://img.shields.io/badge/status-Completed-green)


---

<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" style="margin-right: 50px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" style="margin-right: 50px;"/>
  <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3269842/express-icon-md.png" alt="express" width="40" height="40" style="margin-right: 50px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40" style="margin-right: 50px;"/>
  <img src="https://www.pngrepo.com/png/354431/180/tailwindcss-icon.png" alt="tailwind" width="40" height="40" style="margin-right: 50px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" style="margin-right: 50px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" style="margin-right: 50px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
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



