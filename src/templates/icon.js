function defaultTemplate({ imports, interfaces, componentName, props, jsx, exports }, { tpl }) {
  // const plugins = ['jsx'];
  // if (options.typescript) {
  //   plugins.push('typescript');
  // }
  // const typeScriptTpl = tpl.smart({ plugins });
  return tpl`${imports}

${interfaces}

function ${componentName}(${props}) {
  return ${jsx};
}
${exports}

/**
 * This is generated file. Any changes will be discarded. Check package.json scripts for more information.
 */
  `;
}

module.exports = defaultTemplate;
