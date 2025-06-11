
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/kevinLabarre/angularV3.git',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/kevinLabarre/angularV3.git"
  },
  {
    "renderMode": 2,
    "route": "/kevinLabarre/angularV3.git/actualites"
  },
  {
    "renderMode": 2,
    "route": "/kevinLabarre/angularV3.git/actualites-exo"
  },
  {
    "renderMode": 2,
    "route": "/kevinLabarre/angularV3.git/se-connecter"
  },
  {
    "renderMode": 2,
    "route": "/kevinLabarre/angularV3.git/signal-demo"
  },
  {
    "renderMode": 2,
    "route": "/kevinLabarre/angularV3.git/admin"
  },
  {
    "renderMode": 2,
    "route": "/kevinLabarre/angularV3.git/utilisateur"
  },
  {
    "renderMode": 2,
    "route": "/kevinLabarre/angularV3.git/utilisateur/depot"
  },
  {
    "renderMode": 2,
    "route": "/kevinLabarre/angularV3.git/utilisateur/retrait"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 935, hash: '0c43f112d5ad8f57902103959a08f9b0c85ff7a1cdafcfed33c37262a455865b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1339, hash: 'fca8a45052001bef0235005113160304b273f4ad976b637fe751ebed3f92b468', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'actualites-exo/index.html': {size: 16153, hash: '247dbe9bf74b39c3240259324ee208d15e76328b20f84caafa956901a8555fde', text: () => import('./assets-chunks/actualites-exo_index_html.mjs').then(m => m.default)},
    'actualites/index.html': {size: 16919, hash: '04b7fe85019c3545789fecbe2a40563c4817e5793d2e093b30605e30633b21e3', text: () => import('./assets-chunks/actualites_index_html.mjs').then(m => m.default)},
    'index.html': {size: 15604, hash: '299302862c56fa9001d1196d484b4cc9135f09db0c6e0482cab887b559fde979', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signal-demo/index.html': {size: 4429, hash: '4783189e09fed53b69f5f94d66a10e82d452a119af79ace2f5952a41f5bbc976', text: () => import('./assets-chunks/signal-demo_index_html.mjs').then(m => m.default)},
    'utilisateur/index.html': {size: 6559, hash: 'bca0720b725374d0c14313f3fe227d5af220e7ba322423e9af8a9245b3a8d680', text: () => import('./assets-chunks/utilisateur_index_html.mjs').then(m => m.default)},
    'admin/index.html': {size: 5458, hash: '7b0912a526e15b254847ad4b1fbed0ee74e46ed2c30bc1c623ab83e2f65c4a6b', text: () => import('./assets-chunks/admin_index_html.mjs').then(m => m.default)},
    'utilisateur/retrait/index.html': {size: 6559, hash: 'bca0720b725374d0c14313f3fe227d5af220e7ba322423e9af8a9245b3a8d680', text: () => import('./assets-chunks/utilisateur_retrait_index_html.mjs').then(m => m.default)},
    'utilisateur/depot/index.html': {size: 6556, hash: '58f1ada0829c3279a53c1c66259c4ddb571e07951cf6649e68ccf42d5f1d5614', text: () => import('./assets-chunks/utilisateur_depot_index_html.mjs').then(m => m.default)},
    'se-connecter/index.html': {size: 5455, hash: '955726c2bd21cc364d7c8fdf71896df859513043b7028aea86b3f9e062d51357', text: () => import('./assets-chunks/se-connecter_index_html.mjs').then(m => m.default)},
    'styles-QL6M76NW.css': {size: 348, hash: 'Y3O8CPEi8Yc', text: () => import('./assets-chunks/styles-QL6M76NW_css.mjs').then(m => m.default)}
  },
};
