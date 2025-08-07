/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #ffffff;
  color: #222;
  line-height: 1.6;
}

/* Navbar */
header {
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 999;
}

.navbar {
  max-width: 1200px;
  margin: auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  text-decoration: none;
  color: #444;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #007bff;
}

/* Container */
.container {
  max-width: 800px;
  margin: 3rem auto;
  text-align: center;
  padding: 0 1.5rem;
}

.profile-pic {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #f1f1f1;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
}

.nickname {
  font-weight: normal;
  color: #777;
}

.bio {
  font-size: 1.1rem;
  color: #555;
  max-width: 600px;
  margin: 1rem auto;
}

/* Social Icons */
.socials {
  margin-top: 1.2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.socials img {
  width: 28px;
  height: 28px;
  transition: transform 0.2s ease;
}

.socials a:hover img {
  transform: scale(1.2);
}

/* Sections */
.section {
  max-width: 900px;
  margin: 4rem auto;
  padding: 0 1.5rem;
}

.section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #222;
}

.section p,
.project-list {
  font-size: 1.05rem;
  color: #444;
}

.project-list {
  list-style: disc;
  margin-left: 1.2rem;
  margin-top: 0.5rem;
}

.project-list li {
  margin-bottom: 0.5rem;
}

/* Footer */
footer {
  text-align: center;
  padding: 2rem 1rem;
  background-color: #f9f9f9;
  color: #888;
  font-size: 0.9rem;
  margin-top: 2rem;
}
