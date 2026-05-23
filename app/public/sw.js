// ── Service worker de transição ─────────────────────────────────────────────
// Remove qualquer SW anterior, limpa caches e devolve controle ao navegador.
// ────────────────────────────────────────────────────────────────────────────

self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const cacheKeys = await caches.keys()
    await Promise.all(cacheKeys.map((k) => caches.delete(k)))
    await self.registration.unregister()
    const clients = await self.clients.matchAll({ type: 'window' })
    clients.forEach((c) => c.navigate(c.url))
  })())
})
