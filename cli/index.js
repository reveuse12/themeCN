#!/usr/bin/env node

const { program } = require('commander');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const API_URL = 'http://localhost:3000/api'; // Replace with your actual API URL

program
  .name('themes-cli')
  .description('A CLI for the theme generator')
  .version('1.0.0');

program
  .command('generate')
  .description('Generate a new theme using AI')
  .option('-p, --prompt <prompt>', 'The prompt to use for generating the theme')
  .action(async (options) => {
    if (!options.prompt) {
      console.error('Please provide a prompt using the -p or --prompt option.');
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/generate-theme`, {
        prompt: options.prompt,
      });
      const theme = response.data;

      console.log('Theme generated successfully!');
      console.log(JSON.stringify(theme, null, 2));
    } catch (error) {
      console.error('Error generating theme:', error.message);
    }
  });

program
  .command('apply')
  .description('Apply a theme to a project')
  .option('-i, --id <id>', 'The ID of the theme to apply')
  .action(async (options) => {
    if (!options.id) {
      console.error('Please provide a theme ID using the -i or --id option.');
      return;
    }

    try {
      const response = await axios.get(`${API_URL}/themes/${options.id}`);
      console.log(response.data, "response.data");
      const theme = response.data;

      const cssPath = path.join(process.cwd(), 'globals.css');

      let cssContent = fs.readFileSync(cssPath, 'utf-8');

      for (const [key, value] of Object.entries(theme.colors)) {
        const regex = new RegExp(`--${key}:\s*.*;`);
        cssContent = cssContent.replace(regex, `--${key}: ${value};`);
      }

      fs.writeFileSync(cssPath, cssContent);

      console.log('Theme applied successfully!');
    } catch (error) {
      console.error('Error applying theme:', error.message);
    }
  });

program.parse(process.argv);
