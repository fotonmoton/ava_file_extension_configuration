require('@babel/register')({
  extensions: [
    '.js',
    '.jsx',
    '.ts',
    '.tsx',
  ],
});

require.extensions['.css'] = () => {};
require.extensions['.jpg'] = () => {};
