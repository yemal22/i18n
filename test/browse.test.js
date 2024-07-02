import QUnit from 'qunit';
import sinon from 'sinon';
import Browse from '../src/browse.js';
import fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

QUnit.module('Browse Module Tests', function(hooks) {
    let instance;

    hooks.beforeEach(function() {
        instance = Browse.getInstance();
    });

    QUnit.test('Test lecture du fichier JSON', async function(assert) {
        const filePath = path.resolve(__dirname, '../src/module.json');
        const data = await fs.readFile(filePath, 'utf8');
        assert.ok(data, 'Le fichier JSON est lu correctement.');
    });

    QUnit.test('Test browseRootChildrens - Parcourir les enfants', function(assert) {
        const root = {
            "children": [
                { "name": "child1", "type": "type1" },
                { "name": "child2", "type": "type2" }
            ]
        };
        
        const result = [];
        const spy = sinon.spy(console, 'log');
        
        instance.browseRootChildrens(root);
        
        assert.ok(spy.calledWith("Name: child1 Type: type1"), 'Premier enfant correctement loggué.');
        assert.ok(spy.calledWith("Name: child2 Type: type2"), 'Deuxième enfant correctement loggué.');
        
        spy.restore();
    });

    QUnit.test('Test gestion des objets sans enfants', function(assert) {
        const root = {
            "children": []
        };
        
        const spy = sinon.spy(console, 'log');
        
        instance.browseRootChildrens(root);
        
        assert.notOk(spy.called, 'Aucun log ne devrait être enregistré pour un objet sans enfants.');
        
        spy.restore();
    });

    QUnit.test('Test browseModuleJson - Parcourir les modules', function(assert) {
        const jsonFile = JSON.stringify({
            "views": [
                {
                    "template": [
                        {
                            "name": "root1",
                            "type": "container",
                            "children": [
                                {
                                    "name": "child1",
                                    "type": "text",
                                    "children": []
                                },
                                {
                                    "name": "child2",
                                    "type": "image",
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "template": [
                        {
                            "name": "root2",
                            "type": "container",
                            "children": [
                                {
                                    "name": "child3",
                                    "type": "button",
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        const spy = sinon.spy(console, 'log');
        
        instance.browseModuleJson(jsonFile);
        
        assert.ok(spy.calledWith("Name: child1 Type: text"), 'Correct first child information logged');
        assert.ok(spy.calledWith("Name: child2 Type: image"), 'Correct second child information logged');
        assert.ok(spy.calledWith("Name: child3 Type: button"), 'Correct third child information logged');
        
        spy.restore();
    });

    QUnit.test('Test browseModuleJson - Gestion d\'un module vide', function(assert) {
        const jsonFile = JSON.stringify({
            "views": [
                {
                    "template": []
                }
            ]
        });

        const spy = sinon.spy(console, 'log');
        
        instance.browseModuleJson(jsonFile);
        
        assert.notOk(spy.called, 'Aucun log ne devrait être enregistré pour un module vide');
        
        spy.restore();
    });

    QUnit.test('Test browseModuleJson - Gestion d\'un JSON vide', function(assert) {
        const jsonFile = JSON.stringify({});

        const spy = sinon.spy(console, 'log');
        
        instance.browseModuleJson(jsonFile);
        
        assert.notOk(spy.called, 'Aucun log ne devrait être enregistré pour un JSON vide');
        
        spy.restore();
    });
});
