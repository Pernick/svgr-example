const path = require('path');

function defaultIndexTemplate(filePaths) {
  const iconName = path.dirname(filePaths[0]).split('/').pop();
  const iconVariants = filePaths
    .map(filePath => path.basename(filePath, path.extname(filePath)))
    .sort();
  const defaultVariant = iconVariants.includes('Regular') ? 'Regular' : iconVariants[0];
  const importEntries = iconVariants.map(iconVariant => {
    const exportName = /^\d/.test(iconVariant) ? `Svg${iconVariant}` : iconVariant;
    return `import ${exportName} from './${iconVariant}';`;
  });

  const variantCases = iconVariants
    .filter(variant => variant !== defaultVariant)
    .map(variant => [
      `    case '${variant.toLowerCase()}':`,
      `      return <${variant} {...dimensions} {...props} />;`,
    ])
    .flat();

  const template = [
    "import React from 'react';",
    ...importEntries,
    '',
    `export interface ${iconName}IconProps extends React.SVGProps<SVGSVGElement> {`,
    `  variant?: ${iconVariants.map(name => `'${name.toLowerCase()}'`).join(' | ')};`,
    '  size?: number;',
    '}',
    '',
    `function ${iconName}Icon({ variant = '${defaultVariant.toLowerCase()}', size, ...props }: ${iconName}IconProps) {`,
    "  const dimensions = typeof size === 'undefined' ? undefined : { width: size, height: size };",
    '',
    '  switch (variant) {',
    ...variantCases,
    '    default:',
    `      return <${defaultVariant} {...dimensions} {...props} />;`,
    '  }',
    '}',
    '',
    `export default React.memo(${iconName}Icon);`,
    '',
    '/**',
    ' * This is generated file. Any changes will be discarded. Check package.json scripts for more information.',
    ' */',
  ];

  return `${template.join('\n')}\n`;
}

module.exports = defaultIndexTemplate;
