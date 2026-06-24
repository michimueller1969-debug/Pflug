# Ferienhaus Pflug — Website

Statische Website für die Ferienwohnung Pflug. Reines HTML/CSS/JS mit React (über CDN),
keine Build-Tools nötig.

## Lokal starten (VS Code)

1. Ordner in VS Code öffnen.
2. Erweiterung **Live Server** installieren (Ritwick Dey).
3. Rechtsklick auf `index.html` → **Open with Live Server**.

> Wichtig: Die Seite muss über einen Server (Live Server) laufen, nicht per Doppelklick
> als `file://` — sonst werden die `.jsx`-Komponenten von Babel nicht geladen.

## Struktur

```
index.html              → komplette Seite (Markup, Styles, React-Komponenten inline)
ds-bundle.js            → Design-System-Komponenten (Button, Card, Input …)
components/
  ios-frame.jsx         → iPhone-Rahmen (Mobile-Vorschau)
  android-frame.jsx     → Android-Rahmen (Mobile-Vorschau)
assets/photos/          → Fotos der Wohnung
```

## Fonts

Cormorant Garamond, DM Sans und Dancing Script werden von Google Fonts geladen
(Internet erforderlich).

## Responsive

Die Seite ist responsiv: ab 760px Breite klappt das Menü zu einem Burger-Menü
zusammen und alle Bereiche werden einspaltig. Einfach das Browser-Fenster
verkleinern oder auf dem Handy öffnen.

## Kontakt

Lederecke 10, 36219 Cornberg-Rockensüss · Tel. +49 160 3889917
