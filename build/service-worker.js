"use strict";var precacheConfig=[["/react-gh-pages/index.html","a25df52f749e2d3e1c2fa48bcf94a5b4"],["/react-gh-pages/static/css/main.2682d2bf.css","284d73727e05c8669638466ef38f75a7"],["/react-gh-pages/static/js/main.f24c8803.js","62af5ce926ecaebfa77804471c2e6e7a"],["/react-gh-pages/static/media/1.3a5bbe90.JPG","3a5bbe909b763a21ec454cef55afc6fa"],["/react-gh-pages/static/media/1.79ad10a5.PNG","79ad10a5fb3c65988cb6cff47d45ce93"],["/react-gh-pages/static/media/2.30819954.PNG","30819954e5879f7b3dbc89cd83b7c26a"],["/react-gh-pages/static/media/3.879b8e73.JPG","879b8e730a85785d63e3f4812670a323"],["/react-gh-pages/static/media/Axis.ee4dbb45.otf","ee4dbb451d934f8c1805da54d7223f04"],["/react-gh-pages/static/media/BMJUA.b5a791e2.ttf","b5a791e2e9dfc1d45bfd6e4c98e5bd1e"],["/react-gh-pages/static/media/Blogger.0d723578.ttf","0d7235784f1ec0ea79fd08385e6228e2"],["/react-gh-pages/static/media/Metropolis.739e1122.otf","739e1122a9a7c9e548d042f6ffecf8fb"],["/react-gh-pages/static/media/Nanum.924b9ea5.ttf","924b9ea5f0305f8dc6371fc4f12da37a"],["/react-gh-pages/static/media/all.aa67b28b.JPG","aa67b28b4269c16eeeb049e8e888f490"],["/react-gh-pages/static/media/avatar2.2462acce.jpg","2462acce472e52dac9a08cd6be49397c"],["/react-gh-pages/static/media/brand-icons.13db00b7.eot","13db00b7a34fee4d819ab7f9838cc428"],["/react-gh-pages/static/media/brand-icons.a046592b.woff","a046592bac8f2fd96e994733faf3858c"],["/react-gh-pages/static/media/brand-icons.a1a749e8.svg","a1a749e89f578a49306ec2b055c073da"],["/react-gh-pages/static/media/brand-icons.c5ebe0b3.ttf","c5ebe0b32dc1b5cc449a76c4204d13bb"],["/react-gh-pages/static/media/brand-icons.e8c322de.woff2","e8c322de9658cbeb8a774b6624167c2c"],["/react-gh-pages/static/media/event.41142f56.png","41142f56ba527a0d34b41d036b9af8db"],["/react-gh-pages/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/react-gh-pages/static/media/haksasik_cover.b7d5d1f9.png","b7d5d1f9dee224eb47350fdfc2837c37"],["/react-gh-pages/static/media/icons.0ab54153.woff2","0ab54153eeeca0ce03978cc463b257f7"],["/react-gh-pages/static/media/icons.8e3c7f55.eot","8e3c7f5520f5ae906c6cf6d7f3ddcd19"],["/react-gh-pages/static/media/icons.962a1bf3.svg","962a1bf31c081691065fe333d9fa8105"],["/react-gh-pages/static/media/icons.b87b9ba5.ttf","b87b9ba532ace76ae9f6edfe9f72ded2"],["/react-gh-pages/static/media/icons.faff9214.woff","faff92145777a3cbaf8e7367b4807987"],["/react-gh-pages/static/media/mnistCNN_tensorboard.546d324f.png","546d324f2b38c2c190614d83a10a817d"],["/react-gh-pages/static/media/mnist_deeplearning3.196e0b11.JPG","196e0b11f0a3cd8e1e4c90815a5a52b8"],["/react-gh-pages/static/media/mnist_logistic_regression.cf4dfe6c.JPG","cf4dfe6c859400d642983ff901c88e7c"],["/react-gh-pages/static/media/outline-icons.701ae6ab.eot","701ae6abd4719e9c2ada3535a497b341"],["/react-gh-pages/static/media/outline-icons.82f60bd0.svg","82f60bd0b94a1ed68b1e6e309ce2e8c3"],["/react-gh-pages/static/media/outline-icons.ad97afd3.ttf","ad97afd3337e8cda302d10ff5a4026b8"],["/react-gh-pages/static/media/outline-icons.cd6c777f.woff2","cd6c777f1945164224dee082abaea03a"],["/react-gh-pages/static/media/outline-icons.ef60a4f6.woff","ef60a4f6c25ef7f39f2d25a748dbecfe"],["/react-gh-pages/static/media/post_wallpaper.f726b55c.jpg","f726b55cd9f84e98614226d3d32285f3"],["/react-gh-pages/static/media/qoo10-1.73eb7812.JPG","73eb78125c6ab06d24d34fa404fb6b38"],["/react-gh-pages/static/media/siksha_cover.64f120fa.png","64f120fa08457e7cb5c04acfb9c98c81"],["/react-gh-pages/static/media/ssh.e9c796b2.JPG","e9c796b2b721799e62fb16b436344383"],["/react-gh-pages/static/media/swpp1.37827a18.png","37827a18b85f6ec5367b4e7cae864c92"],["/react-gh-pages/static/media/trench.a038251e.otf","a038251e7f5e57ab842e51f1088a7d44"],["/react-gh-pages/static/media/webpage_cover.ed0d18d1.JPG","ed0d18d18313e5f6814e2475b6ad91cb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var s=new URL(e);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),s=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var s="/react-gh-pages/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});