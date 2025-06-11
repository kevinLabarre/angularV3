
export default {
  basePath: 'https://github.com/kevinLabarre/angularV3.git',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
