/* @remove-on-es-build-begin */
// this file is not used if use https://github.com/ant-design/babel-plugin-import
const ENV = process.env.NODE_ENV;
if (
  ENV !== 'production' &&
  ENV !== 'test' &&
  typeof console !== 'undefined' &&
  console.warn &&
  typeof window !== 'undefined'
) {
  console.warn(
    'You are using a whole package of antd, ' +
      'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.',
  );
}
/* @remove-on-es-build-end */
import { App } from 'vue';

import { default as Split } from '@/components/split';
import { default as Alert } from '@/components/alert';



const components = [
    Split,
    Alert
];

const install = function(app: App) {
  components.forEach(component => {
    app.use(component as typeof component & { install: () => void });
  });

//   app.config.globalProperties.$message = message;
//   app.config.globalProperties.$notification = notification;
//   app.config.globalProperties.$info = Modal.info;
//   app.config.globalProperties.$success = Modal.success;
//   app.config.globalProperties.$error = Modal.error;
//   app.config.globalProperties.$warning = Modal.warning;
//   app.config.globalProperties.$confirm = Modal.confirm;
//   app.config.globalProperties.$destroyAll = Modal.destroyAll;
  return app;
};

/* istanbul ignore if */

export {
  install,
  Alert,
  Split
};

export default {
  install,
};
