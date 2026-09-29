# Krystain Minecraft Server — static landing page

Lekka strona HTML/CSS/JS bez frameworka. Nadaje się do GitHub Pages, GitLab Pages, Cloudflare Pages, Vercel, Netlify, Render, Firebase Hosting, Surge i zwykłego Nginxa/Caddy na VM.

## Zanim wrzucisz

W `index.html` zmień:

- `YOUR_DISCORD_INVITE` → pełny link do Discorda, np. `https://discord.gg/...`
- `https://YOUR-DOMAIN.example/` → właściwy adres strony w `canonical`, Open Graph i JSON-LD

W `robots.txt` i `sitemap.xml` również zamień `https://YOUR-DOMAIN.example/` na właściwy adres.

## E2-micro / zwykły serwer WWW

Najprościej wystawić folder przez Nginx albo Caddy. To jest zwykły statyczny HTML — żadnego Node, PHP ani bazy danych.
