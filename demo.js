var adventureTime = require('./')

adventureTime({
  guide: "./guide",
  server: "46.101.11.144:8080",
  id: Math.random().toString(36).slice(2),
  terminal: 'terminal.html'
})
