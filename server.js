// CORS Anywhere - version ouverte pour Render / Node.js
const cors_proxy = require('./lib/cors-anywhere');

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8080;

// 🚨 Autorise tout le monde (aucune whitelist, aucun header obligatoire)
cors_proxy.createServer({
  originBlacklist: [],        // aucune origine bloquée
  originWhitelist: [],        // toutes les origines sont autorisées
  requireHeader: [],          // pas besoin de 'origin' ni 'x-requested-with'
  removeHeaders: [
    'cookie',
    'cookie2',
    'x-request-start',
    'x-request-id',
    'via',
    'connect-time',
    'total-route-time',
  ],
  redirectSameOrigin: true,
  httpProxyOptions: {
    xfwd: false,
  },
}).listen(port, host, function() {
  console.log(`🚀 CORS Anywhere proxy running on ${host}:${port}`);
});
