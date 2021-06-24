import path from 'path';
import fs from 'fs';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const moduleFileExtensions = [
  'js',
  'jsx',
  'ts',
  'tsx',
  'css',
  'global.css',
  'sass',
  'global.sass',
  'scss',
  'global.scss',
  'json',
];

module.exports = {
  appBuild: resolveApp('build'),
  appHtml: resolveApp('src/index.html'),
  appSrc: resolveApp('src'),
  appCommon: resolveApp('src/common'),
  commonComp: resolveApp('src/common/component'),
  commonStore: resolveApp('src/common/store'),
  commonScss: resolveApp('src/common/scss'),
  commonStyled: resolveApp('src/common/styled'),
  appComp: resolveApp('src/component'),
  appCon: resolveApp('src/container'),
  appStore: resolveApp('src/store'),
  appScss: resolveApp('src/scss'),
  appStyled: resolveApp('src/styled'),
  appUtil: resolveApp('src/util'),
  appTool: resolveApp('src/tool'),
  appTheme: resolveApp('src/theme'),
  appDocs: resolveApp('src/docs'),
  appLib: resolveApp('src/lib'),
  appStatic: resolveApp('src/static'),
  appImage: resolveApp('src/static/image'),
  appTests: resolveApp('src/__tests__'),
};

module.exports.moduleFileExtensions = moduleFileExtensions;
