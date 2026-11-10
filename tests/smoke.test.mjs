// Smoke del starter crudo y del proyecto instanciado. Las invariantes del
// esqueleto no se imponen después de que el cliente apruebe arte y elija stack.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const read = rel => readFileSync(path.join(root, rel), 'utf8');
const isRawStarter = () => JSON.parse(read('package.json')).name === '__' + 'PROJECT_ID' + '__';

const REQUIRED = [
  'package.json',
  '.gitignore',
  '.github/workflows/ci.yml',
  'DESIGN.md',
  'docs/DESIGN_BASE.md',
  'docs/ART_DIRECTIONS.md',
  'docs/ASSETS.md',
  'docs/MOTION_PLAN.md',
  'docs/ART_APPROVALS.template.json',
  'docs/reviews/README.md',
];

test('skeleton includes every required artifact', () => {
  for (const rel of REQUIRED) {
    assert.equal(existsSync(path.join(root, rel)), true, `missing ${rel}`);
  }
});

test('raw template docs start in BORRADOR', () => {
  if (!isRawStarter()) return;
  for (const rel of ['DESIGN.md', 'docs/DESIGN_BASE.md', 'docs/ART_DIRECTIONS.md', 'docs/ASSETS.md', 'docs/MOTION_PLAN.md']) {
    assert.match(read(rel), /BORRADOR/, `${rel} must carry a BORRADOR header`);
  }
});

test('ART_APPROVALS template starts unapproved (human gate respected)', () => {
  const raw = JSON.parse(read('docs/ART_APPROVALS.template.json'));
  assert.equal(raw.schema_version, 2);
  assert.equal(raw.base_design.artifact_path, 'docs/DESIGN_BASE.md');
  assert.equal(raw.hero_selection.artifact_path, 'docs/ART_DIRECTIONS.md');
  for (const key of ['base_design', 'hero_selection', 'final_hero']) {
    const decision = raw[key];
    assert.equal(decision.approved, false, `${key} must await human approval`);
    for (const field of ['approved_by', 'approved_at', 'evidence', 'artifact_sha256']) {
      assert.equal(decision[field], null, `${key}.${field} must start empty`);
    }
  }
  assert.equal(raw.final_hero.artifact_path, null);
  assert.equal(raw.final_hero.authorizes_implementation, false);
});

test('project identifier and approval file match the instantiation state', () => {
  const pkg = JSON.parse(read('package.json'));
  const placeholder = '__' + 'PROJECT_ID' + '__';
  const template = JSON.parse(read('docs/ART_APPROVALS.template.json'));
  assert.equal(template.project_id, pkg.name);
  if (pkg.name === placeholder) {
    assert.equal(existsSync(path.join(root, 'docs/ART_APPROVALS.json')), false);
  } else {
    assert.match(pkg.name, /^[a-z0-9][a-z0-9-]*$/);
    const approvalsPath = path.join(root, 'docs/ART_APPROVALS.json');
    assert.equal(existsSync(approvalsPath), true, 'instantiated project needs its approval record');
    const approvals = JSON.parse(read('docs/ART_APPROVALS.json'));
    assert.equal(approvals.project_id, pkg.name);
    assert.equal(approvals.schema_version, 2);
    assert.equal(approvals.base_design.artifact_path, 'docs/DESIGN_BASE.md');
    assert.equal(approvals.hero_selection.artifact_path, 'docs/ART_DIRECTIONS.md');
    for (const key of ['base_design', 'hero_selection', 'final_hero']) {
      assert.equal(typeof approvals[key]?.approved, 'boolean');
      if (approvals[key].approved) {
        for (const field of ['approved_by', 'approved_at', 'evidence', 'artifact_path', 'artifact_sha256']) {
          assert.ok(approvals[key][field], `${key}.${field} is required after approval`);
        }
      }
    }
    if (!approvals.final_hero.approved) {
      assert.equal(approvals.final_hero.authorizes_implementation, false);
    }
  }
});

test('starter has no fake build: npm run in README maps to scripts or to instantiation note', () => {
  if (!isRawStarter()) return;
  const pkg = JSON.parse(read('package.json'));
  const readme = read('README.md');
  const commands = [...readme.matchAll(/npm run ([a-z:-]+)/g)].map(m => m[1]);
  for (const name of commands) {
    if (name in pkg.scripts) continue;
    // El README solo menciona scripts no definidos como los que se añaden al instanciar.
    const line = readme.split('\n').find(l => l.includes(`npm run ${name}`)) ?? '';
    assert.match(line, /instanciar/, `README mentions npm run ${name} without instantiation marker`);
  }
  assert.equal('build' in pkg.scripts, false, 'starter must not fake a build command');
  assert.equal('test' in pkg.scripts, true);
});

test('workflow matches the selected build stage', () => {
  const ci = read('.github/workflows/ci.yml');
  const pkg = JSON.parse(read('package.json'));
  assert.match(ci, /npm install/);
  assert.match(ci, /npm test/);
  if (isRawStarter()) {
    assert.doesNotMatch(ci, /npm run build/);
  } else if ('build' in pkg.scripts) {
    assert.match(ci, /npm run build/, 'project CI must build after a stack is selected');
  }
});

test('raw starter stays dependency-free', () => {
  if (!isRawStarter()) return;
  const pkg = JSON.parse(read('package.json'));
  assert.deepEqual(pkg.dependencies ?? {}, {});
  assert.deepEqual(pkg.devDependencies ?? {}, {});
  assert.ok(pkg.name);
});
