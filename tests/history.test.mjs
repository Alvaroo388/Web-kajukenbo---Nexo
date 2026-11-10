import test from 'node:test';
import assert from 'node:assert/strict';
import { historyProgress } from '../public/js/history.mjs';

test('saltar directamente al último hito completa la línea histórica', () => {
  assert.equal(historyProgress([true, true, false, true]), '100%');
});

test('el progreso no retrocede al volver a hitos anteriores', () => {
  assert.equal(historyProgress([true, true, false, false]), '50%');
});
