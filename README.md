# React Portfolio

A modern, responsive portfolio website built with React and Vite. This project showcases your skills, experience, resume, and contact information with a clean and customizable design. Easily deployable to GitHub Pages.

---

## 🚀 Features

- Responsive design suitable for all devices
- Animated sections using `framer-motion`
- Styled with `styled-components`
- Easy resume download and profile image support
- Simple configuration for your own content
- Deployable to GitHub Pages with a single command

---

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [styled-components](https://styled-components.com/)
- [framer-motion](https://www.framer.com/motion/)
- [emailjs-com](https://www.emailjs.com/) (for contact forms, if used)
- [gh-pages](https://www.npmjs.com/package/gh-pages) (for deployment)

---

## 🧑‍💻 Getting Started

### 1. Clone the Repository

```sh
git clone [https://github.com/suryahj/My_page.git]
cd React_portfolio
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Development Server

```sh
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) to view your site.

---

## ⚙️ Configuration & Customization

### 1. Add Your Profile Picture

- Place your profile image (e.g., `myImage.jpg`) in the `public/` folder.
- The image will automatically appear as a background on the right side of the start page.

### 2. Add Your Resume

- Place your resume file (e.g., `My_CV.pdf`) in the `public/` folder.
- The "Download Resume" button will allow users to download it.

### 3. Customize Content

- Edit `src/components/Hero.jsx` and other components in `src/components/` to update your name, about section, skills, experience, projects, and contact details.

### 4. Change Theme & Styles

- Modify styles in `src/components/Hero.css` or respective component CSS files.
- Adjust colors, fonts, and layout as you like.

### 5. (Optional) Configure Contact Form

- If using a contact form with `emailjs-com`, set up your [EmailJS](https://www.emailjs.com/) account and update the service ID, template ID, and user ID in the corresponding component.

---

## 🌐 Deployment (GitHub Pages)

### 1. Set the `base` in `vite.config.js`

```js
export default defineConfig({
  base: "/React_portfolio/", // Use your repository name
  plugins: [react()],
});
```

### 2. Add Deployment Scripts

In your `package.json`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

### 3. Deploy

```sh
npm run deploy
```

### 4. Configure GitHub Pages

- Go to your repository settings on GitHub.
- Under "Pages", set the source to the `gh-pages` branch and `/ (root)` folder.

Your site will be live at `https://your-username.github.io/React_portfolio/`.

---

## 📝 How to Copy/Use for Your Portfolio

1. Fork or clone this repository.
2. Replace the content in the components with your own details.
3. Add your image and resume to the `public/` folder.
4. Update the site configuration as described above.
5. Deploy with `npm run deploy`.

---

## 📄 License

This project is open source under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Inspired by modern portfolio templates and the React/Vite community.

---
