/**
 * Style Dictionary Configuration
 * Transforms design-tokens.json into multiple output formats
 *
 * Usage:
 * 1. npm install style-dictionary
 * 2. npx style-dictionary build --config ./docs/style-dictionary.config.js
 */

const StyleDictionary = require('style-dictionary');

// Custom transform to resolve token references
StyleDictionary.registerTransform({
  name: 'value/resolve-references',
  type: 'value',
  matcher: (token) => typeof token.original?.value === 'string' && token.original.value.includes('{'),
  transformer: (token, options) => {
    // This is handled automatically by Style Dictionary's reference resolution
    return token.value;
  }
});

// Custom format for CSS with descriptions as comments
StyleDictionary.registerFormat({
  name: 'css/variables-with-comments',
  formatter: function({ dictionary, file, options }) {
    const header = `/**
 * KEM Conference Design System
 * Auto-generated CSS Custom Properties
 * Do not edit directly - modify design-tokens.json instead
 *
 * Generated: ${new Date().toISOString()}
 */

:root {\n`;

    const footer = `}\n`;

    let currentCategory = '';
    let output = header;

    dictionary.allTokens.forEach(token => {
      const category = token.path[0];

      // Add category comment
      if (category !== currentCategory) {
        currentCategory = category;
        output += `\n  /* ${category.toUpperCase()} */\n`;
      }

      // Add description comment if exists
      if (token.description) {
        output += `  /* ${token.description} */\n`;
      }

      output += `  --${token.name}: ${token.value};\n`;
    });

    return output + footer;
  }
});

// Custom format for SCSS variables
StyleDictionary.registerFormat({
  name: 'scss/variables-with-map',
  formatter: function({ dictionary }) {
    let output = `// KEM Conference Design System - SCSS Variables
// Auto-generated - do not edit directly

`;

    // Group tokens by category
    const categories = {};
    dictionary.allTokens.forEach(token => {
      const category = token.path[0];
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push(token);
    });

    // Output each category
    Object.entries(categories).forEach(([category, tokens]) => {
      output += `// ${category.toUpperCase()}\n`;
      tokens.forEach(token => {
        output += `$${token.name}: ${token.value};\n`;
      });
      output += `\n`;
    });

    // Create maps for each category
    output += `// TOKEN MAPS\n`;
    Object.entries(categories).forEach(([category, tokens]) => {
      output += `$${category}-tokens: (\n`;
      tokens.forEach((token, index) => {
        const comma = index < tokens.length - 1 ? ',' : '';
        output += `  '${token.name}': ${token.value}${comma}\n`;
      });
      output += `);\n\n`;
    });

    return output;
  }
});

// Custom format for JavaScript/TypeScript
StyleDictionary.registerFormat({
  name: 'javascript/es6-typed',
  formatter: function({ dictionary }) {
    let output = `/**
 * KEM Conference Design System - JavaScript/TypeScript Tokens
 * Auto-generated - do not edit directly
 */

`;

    // Create typed object
    output += `export const tokens = {\n`;

    const categories = {};
    dictionary.allTokens.forEach(token => {
      const category = token.path[0];
      if (!categories[category]) {
        categories[category] = {};
      }

      // Build nested structure
      let current = categories[category];
      for (let i = 1; i < token.path.length - 1; i++) {
        if (!current[token.path[i]]) {
          current[token.path[i]] = {};
        }
        current = current[token.path[i]];
      }
      current[token.path[token.path.length - 1]] = token.value;
    });

    output += JSON.stringify(categories, null, 2)
      .replace(/"([^"]+)":/g, '$1:')
      .replace(/"/g, "'")
      .slice(1, -1);

    output += `} as const;\n\n`;

    // Export type
    output += `export type DesignTokens = typeof tokens;\n`;

    // Export flat tokens for CSS-in-JS
    output += `\nexport const cssVars = {\n`;
    dictionary.allTokens.forEach(token => {
      output += `  '${token.name}': 'var(--${token.name})',\n`;
    });
    output += `} as const;\n`;

    return output;
  }
});

module.exports = {
  source: ['./docs/design-tokens.json'],

  // Token transformations
  transform: {
    'value/resolve-references': {
      type: 'value',
      transitive: true
    }
  },

  platforms: {
    // CSS Custom Properties
    css: {
      transformGroup: 'css',
      buildPath: './dist/tokens/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables-with-comments',
          options: {
            outputReferences: true
          }
        }
      ]
    },

    // SCSS Variables
    scss: {
      transformGroup: 'scss',
      buildPath: './dist/tokens/',
      files: [
        {
          destination: '_tokens.scss',
          format: 'scss/variables-with-map'
        }
      ]
    },

    // JavaScript/TypeScript
    js: {
      transformGroup: 'js',
      buildPath: './dist/tokens/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6-typed'
        },
        {
          destination: 'tokens.json',
          format: 'json/nested'
        }
      ]
    },

    // JSON flat (for tools like Figma Tokens)
    json: {
      transformGroup: 'js',
      buildPath: './dist/tokens/',
      files: [
        {
          destination: 'tokens-flat.json',
          format: 'json/flat'
        }
      ]
    }
  }
};
