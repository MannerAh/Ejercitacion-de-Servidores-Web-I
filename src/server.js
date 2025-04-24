/**
 * Módulo que crea y configura el servidor HTTP
 */
const http = require('http');

/**
 * Crea un servidor HTTP que utiliza la función router para manejar las solicitudes
 * @returns {http.Server} Instancia del servidor HTTP
 */
function createServer() {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

    if (req.url === '/') {
      res.end('Bienvenid@s! Gracias por tu visita.');

    } else if (req.url === '/nosotros') {
      res.end("Bienvenid@s a saber + de nosotros :)");

    } else if (req.url === '/cursos') {
      res.end('Te interesan nuestros cursos. Vení a conocer la oferta!')

    } else if (req.url === '/contacto') {
      res.end('Si querés contactarnos, hacelo a este Email: :)')
      
    } else  {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('No se ha encontrado la ruta ingresada.')
    }

  });
  return server;
}

module.exports = createServer;
