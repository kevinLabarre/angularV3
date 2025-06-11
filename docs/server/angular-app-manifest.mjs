
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/actualites"
  },
  {
    "renderMode": 2,
    "route": "/actualites-exo"
  },
  {
    "renderMode": 2,
    "route": "/se-connecter"
  },
  {
    "renderMode": 2,
    "route": "/signal-demo"
  },
  {
    "renderMode": 2,
    "route": "/admin"
  },
  {
    "renderMode": 2,
    "route": "/utilisateur"
  },
  {
    "renderMode": 2,
    "route": "/utilisateur/depot"
  },
  {
    "renderMode": 2,
    "route": "/utilisateur/retrait"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 891, hash: '7d358761ca14e98515d47da803420919a410affd9c1da544bdb955423d1cbba0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1295, hash: '531af7118c9c6fff9242ea52560823a1769bd305180b56c327ae33598cbd3643', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15335, hash: 'b7d7f01c5d37efe2517e7d9f1e9471526e5cb01d6ec7a77ef1d624ae048d19d9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'actualites/index.html': {size: 16650, hash: '445f8658c7f6b3ef892e0c6d33b5d5300a5a14ccd857c5089f61618e95d9cf14', text: () => import('./assets-chunks/actualites_index_html.mjs').then(m => m.default)},
    'se-connecter/index.html': {size: 5186, hash: '9c3fc7204057c82fe052301e9a0508a9cd29545178329a86e0ff403be135727e', text: () => import('./assets-chunks/se-connecter_index_html.mjs').then(m => m.default)},
    'actualites-exo/index.html': {size: 15884, hash: 'f7ab539992d48d7e0a6a2fed47aacb90ace709182976178267ee212008384ff7', text: () => import('./assets-chunks/actualites-exo_index_html.mjs').then(m => m.default)},
    'signal-demo/index.html': {size: 4160, hash: '5f91d7a7934373bd85d90a2a63cd56c00a4412ac8d8b457457419dc6018cca5c', text: () => import('./assets-chunks/signal-demo_index_html.mjs').then(m => m.default)},
    'admin/index.html': {size: 5189, hash: 'a91c436212f1cd9fdba11e53cb633cbcb8e062290ff79448afe848deb8775c78', text: () => import('./assets-chunks/admin_index_html.mjs').then(m => m.default)},
    'utilisateur/index.html': {size: 6511, hash: '4991f43421fc2f84d973645368f719cf54eeccafe5953c10288655fb1b6e8a63', text: () => import('./assets-chunks/utilisateur_index_html.mjs').then(m => m.default)},
    'utilisateur/depot/index.html': {size: 6512, hash: 'f6f6c477b16f8a8553e71ce21fc33bb33a350ca7b9991bb2ca6ac54bc20f8be1', text: () => import('./assets-chunks/utilisateur_depot_index_html.mjs').then(m => m.default)},
    'utilisateur/retrait/index.html': {size: 6515, hash: 'c56fa5e871413cfaf54db7a655eef7222729864b1363053fb23d4d1b6abecd87', text: () => import('./assets-chunks/utilisateur_retrait_index_html.mjs').then(m => m.default)},
    'styles-QL6M76NW.css': {size: 348, hash: 'Y3O8CPEi8Yc', text: () => import('./assets-chunks/styles-QL6M76NW_css.mjs').then(m => m.default)}
  },
};
