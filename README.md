# Future Realms Gaming Portal 🎮

Eine beeindruckende Gaming-Community-Website mit modernem Anime/Cyberpunk-Design.

## Features

✨ **Modernes Design**
- Cyberpunk/Anime Ästhetik
- Responsive Layout
- Glasmorphism-Effekte
- Gradient-Animationen

🎮 **Gaming-Portal Features**
- Server-Status Anzeige (Echtzeit-Updates)
- Mehrere Game-Modi
- Aktive Community Informationen
- Regelwerk Navigation
- Update-Feed

📱 **Responsive Design**
- Desktop optimiert
- Tablet-freundlich
- Mobile Unterstützung

## Installation

1. Repository klonen
2. `index.html` in deinem Browser öffnen
3. Oder mit einem Local Server servieren:
   ```bash
   python -m http.server 8000
   # oder
   npx http-server
   ```

## Struktur

```
.
├── index.html      # HTML Struktur
├── styles.css      # Styling & Layouts
├── script.js       # Interaktivität & Animationen
└── README.md       # Dokumentation
```

## Anpassungen

### Server hinzufügen
Bearbeite die Server-Daten in `index.html`:
```html
<div class="server-card">
    <div class="server-image"></div>
    <div class="server-info">
        <h3>DEIN SERVER NAME</h3>
        <div class="server-meta">
            <span class="tag">TAG</span>
            <span class="players">0/X ONLINE</span>
        </div>
    </div>
</div>
```

### Farben ändern
Bearbeite die CSS-Variablen in `styles.css`:
```css
:root {
    --primary: #7c3aed;        /* Lila */
    --secondary: #0ea5e9;      /* Blau */
    --accent: #ec4899;         /* Pink */
    /* ... */
}
```

### Links aktualisieren
Ersetze alle `#` Links mit deinen echten URLs

## Browser-Unterstützung

- Chrome/Edge (neueste)
- Firefox (neueste)
- Safari (neueste)
- Mobile Browser

## Technologien

- HTML5
- CSS3 (Grid, Flexbox, Gradients)
- Vanilla JavaScript
- Keine Abhängigkeiten!

## Performance

- Schnelles Laden
- Optimierte Assets
- Smooth Animations
- Mobile-optimiert

## Lizenz

MIT

---

**Future Realms** - Deine Welt. Deine Story. Dein Abenteuer. 🌟