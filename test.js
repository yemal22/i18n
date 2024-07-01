import Browse from './browse.js';
import { test, module } from 'qunit';

async function fetchData() {
    const response = await fetch('module.json');
    return await response.json();
}

module('Browse Tests', hooks => {
    let data;

    hooks.before(async () => {
    data = await fetchData();
    });

    test('Test lecture du fichier JSON', assert => {
    assert.ok(data, 'Le fichier JSON est lu correctement.');
    assert.doesNotThrow(() => JSON.parse(JSON.stringify(data)), 'Le contenu du fichier est correctement parsé.');
    });

    test('Test browseRootChildrens - Parcourir les enfants', assert => {
    const browser = Browse.getInstance();
    const root = {
        "children": [
        { "name": "child1", "type": "type1" },
        { "name": "child2", "type": "type2" }
        ]
    };

    const result = [];
    const originalLog = console.log;
    console.log = message => result.push(message);

    browser.browseRootChildrens(root);

    console.log = originalLog;

    assert.equal(result.length, 2, 'Deux logs devraient être enregistrés.');
    assert.equal(result[0], 'Name: child1 Type: type1', 'Premier enfant correctement loggué.');
    assert.equal(result[1], 'Name: child2 Type: type2', 'Deuxième enfant correctement loggué.');
    });

    test('Test browseModuleJson - Parcourir les modules', assert => {
    const browser = Browse.getInstance();
    const expectedLogs = [
        'Name: group1 Type: group',
        'Name: input2 Type: input'
    ];

    const result = [];
    const originalLog = console.log;
    console.log = message => result.push(message);

    browser.browseModuleJson(JSON.stringify(data));

    console.log = originalLog;

    assert.deepEqual(result, expectedLogs, 'Tous les modules sont parcourus et loggués correctement.');
    });

    test('Test gestion des objets sans enfants', assert => {
    const browser = Browse.getInstance();
    const root = {
        "children": []
    };

    const result = [];
    const originalLog = console.log;
    console.log = message => result.push(message);

    browser.browseRootChildrens(root);

    console.log = originalLog;

    assert.equal(result.length, 0, 'Aucun log ne devrait être enregistré pour un objet sans enfants.');
    });

    test('Test gestion des propriétés manquantes', assert => {
    const browser = Browse.getInstance();
    const root = {};

    const result = [];
    const originalLog = console.log;
    console.log = message => result.push(message);

    browser.browseRootChildrens(root);

    console.log = originalLog;

    assert.equal(result.length, 0, 'Aucun log ne devrait être enregistré pour un objet sans propriétés children.');
    });
});