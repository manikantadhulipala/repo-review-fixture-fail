import assert from 'node:assert/strict';
import { multiply } from './math.js';

assert.equal(multiply(3, 4), 12);
console.log('PASS multiply');
