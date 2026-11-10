import test from 'node:test';
import assert from 'node:assert/strict';
import { syllables, classSchedule, monthlyFee, pendingFacts } from '../public/js/content.mjs';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('../public/index.html', import.meta.url), 'utf8');

test('las cuatro sílabas tienen explicación propia y fuente', () => {
  assert.deepEqual(syllables.map(item => item.id), ['ka', 'ju', 'ken', 'bo']);
  for (const item of syllables) {
    assert.ok(item.name && item.origin && item.description && item.source);
  }
});

test('el horario confirmado conserva ambas franjas y la cuota', () => {
  assert.deepEqual(classSchedule.days, ['Martes', 'Jueves']);
  assert.deepEqual(classSchedule.times, ['12:00–13:00', '20:00–21:00']);
  assert.equal(monthlyFee, 30);
});

test('los datos locales desconocidos permanecen pendientes', () => {
  for (const key of ['arrivalStory', 'address', 'contact', 'villasenorShield']) {
    assert.match(pendingFacts[key], /^\[\[PENDIENTE:/);
  }
});

test('el HTML público conserva el horario, cuota y pendientes confirmados', () => {
  for (const day of classSchedule.days) assert.match(page, new RegExp(day, 'i'));
  for (const time of classSchedule.times) assert.ok(page.includes(time));
  assert.ok(page.includes(`${monthlyFee} €`));
  for (const value of Object.values(pendingFacts)) assert.ok(page.includes(value));
});
