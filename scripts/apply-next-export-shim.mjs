#!/usr/bin/env node
import { promises as fs } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const shimPath = resolve(__dirname, 'shims/next-export.js');
const targetPath = resolve(__dirname, '../node_modules/next/dist/cli/next-export.js');

async function applyShim() {
  try {
    await fs.copyFile(shimPath, targetPath);
    console.log('Applied next export shim to allow static builds.');
  } catch (error) {
    console.error('Failed to apply next export shim:', error);
    process.exitCode = 1;
  }
}

applyShim();
