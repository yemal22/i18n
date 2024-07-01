import QUnit from 'qunit';
import Browse from '../src/browse.js';
import fs from 'node:fs/promises';

QUnit.module('Browse Tests', {
  beforeEach: () => {
    // Code exécuté avant chaque test
  },
  afterEach: () => {
    // Code exécuté après chaque test
  }
});

//QUnit.test('Test lecture du fichier JSON', async assert => {
  //const data = await fs.readFile('test.json', 'utf8');
  //assert.ok(data, 'Le fichier JSON est lu correctement.');
  //assert.doesNotThrow(() => JSON.parse(data), 'Le contenu du fichier est correctement parsé.');
//});

QUnit.test('Test browseRootChildrens - Parcourir les enfants', assert => {
  const browser = Browse.getInstance();
  const root = {
    "children": [
      { "name": "child1", "type": "type1" },
      { "name": "child2", "type": "type2" }
    ]
  };
  
  const result = [];
  const originalLog = console.log;
  console.log = (message) => result.push(message);

  browser.browseRootChildrens(root);

  console.log = originalLog;

  assert.equal(result.length, 2, 'Deux logs devraient être enregistrés.');
  assert.equal(result[0], 'Name: child1 Type: type1', 'Premier enfant correctement loggué.');
  assert.equal(result[1], 'Name: child2 Type: type2', 'Deuxième enfant correctement loggué.');
});

QUnit.test('Test browseModuleJson - Parcourir les modules', async assert => {
  const browser = Browse.getInstance();
  const data = await fs.readFile('testModule.json', 'utf8');
  const json = JSON.parse(data);
  const expectedLogs = [
    'Name: group1 Type: group',
    'Name: input2 Type: input'
  ];
  
  const result = [];
  const originalLog = console.log;
  console.log = (message) => result.push(message);

  browser.browseModuleJson(data);

  console.log = originalLog;

  assert.deepEqual(result, expectedLogs, 'Tous les modules sont parcourus et loggués correctement.');
});

QUnit.test('Test gestion des objets sans enfants', assert => {
  const browser = Browse.getInstance();
  const root = {
    "children": []
  };
  
  const result = [];
  const originalLog = console.log;
  console.log = (message) => result.push(message);

  browser.browseRootChildrens(root);

  console.log = originalLog;

  assert.equal(result.length, 0, 'Aucun log ne devrait être enregistré pour un objet sans enfants.');
});

QUnit.test('Test gestion des propriétés manquantes', assert => {
  const browser = Browse.getInstance();
  const root = {};
  
  const result = [];
  const originalLog = console.log;
  console.log = (message) => result.push(message);

  browser.browseRootChildrens(root);

  console.log = originalLog;

  assert.equal(result.length, 0, 'Aucun log ne devrait être enregistré pour un objet sans propriétés children.');
});
