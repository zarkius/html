// Registra el evento de instalación
self.addEventListener('install', event => {
    console.log('Service Worker instalado');
    event.waitUntil(self.skipWaiting());
  });
  
  // Registra el evento de activación
  self.addEventListener('activate', event => {
    console.log('Service Worker activado');
    event.waitUntil(self.clients.claim());
  });
  
  // Maneja los eventos de fetch
  self.addEventListener('fetch', event => {
    const requestUrl = new URL(event.request.url);
  
    // Omitir el control del Service Worker para solicitudes a /wp-admin/
    if (requestUrl.pathname.startsWith('/serviciosvarios/wordpress/wp-admin/')) {
      return;
    }
  
    // Maneja el fetch normalmente para otras rutas
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
  
          return fetch(event.request).then(networkResponse => {
            return caches.open('dynamic-cache').then(cache => {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            });
          });
        })
        .catch(error => {
          console.error('Error en el fetch:', error);
          return fetch(event.request);
        })
    );
  });
  