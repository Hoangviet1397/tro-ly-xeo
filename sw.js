/* Service worker cho Trợ lý Xèo trên GitHub Pages (https).
   - App luôn chạy bản đã lưu trên máy → dùng offline được.
   - Có bản mới trên GitHub: tải sẵn vào bộ nhớ mới, CHỜ Xèo bấm "Cập nhật" (tin nhắn SKIP_WAITING) mới chuyển.
   - Chỉ xử lý file của chính app; lượt gọi tới Google đi thẳng, không qua đây.
   - Không đăng ký khi mở file offline (file://) — xem index.html. */
var CACHE = 'tro-ly-xeo-v17';
var ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png'];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return Promise.all(ASSETS.map(function (url) {
        /* cache:'reload' — lấy bản mới nhất từ GitHub, bỏ qua bộ nhớ đệm HTTP */
        return fetch(new Request(url, { cache: 'reload' })).then(function (res) {
          if (res && res.ok) return cache.put(url, res);
        }).catch(function () { /* thiếu 1 file cũng không hỏng */ });
      }));
    }).then(function () { return caches.keys(); }).then(function (keys) {
      /* Chạy ngay khi: lần cài đầu tiên, hoặc máy đang ở bản cũ hơn v12 (bản cũ chưa có nút Cập nhật).
         Còn lại thì chờ Xèo bấm "Cập nhật". */
      var oldNoButton = keys.some(function (k) { var m = /^tro-ly-xeo-v(\d+)$/.exec(k); return m && +m[1] < 12; });
      if (!self.registration.active || oldNoButton) return self.skipWaiting();
    })
  );
});

self.addEventListener('message', function (event) {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { /* chỉ dọn cache cũ của chính app này — tên miền github.io dùng chung với app khác */
        return k.indexOf('tro-ly-xeo-') === 0 && k !== CACHE; }).map(function (k) {
        return caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (event) {
  var req = event.request;
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return;   /* Google API... đi thẳng mạng */
  event.respondWith(
    caches.open(CACHE).then(function (cache) {
      return cache.match(req, { ignoreSearch: true }).then(function (hit) {
        if (hit) return hit;   /* bản đã lưu — không tự đổi ngầm, chỉ đổi khi bấm Cập nhật */
        return fetch(req).then(function (res) {
          if (res && res.ok) cache.put(req, res.clone()).catch(function () {});
          return res;
        }).catch(function () {
          return req.mode === 'navigate' ? cache.match('./index.html') : Response.error();
        });
      });
    })
  );
});
