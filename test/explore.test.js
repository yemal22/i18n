import QUnit from 'qunit';
import Explore from '../src/explore.js';

QUnit.module('exploreRootChildrens Test', function(hooks) {

    QUnit.test('Gestion d\'un objet null', function(assert) {
        const root = null;
        const result = Explore.exploreRootChildrens(root);
        assert.ok(result, 'La fonction exploreRootChildrens a été exécutée avec succès.');
        assert.equal(result, -2, 'Le résultat attendu pour un objet null est -2.');
    });
    
    QUnit.test('Gestion d\'un "root" vide', function(assert) {
        const root = {};
        const result = Explore.exploreRootChildrens(root);
        assert.ok(result, 'La fonction exploreRootChildrens a été exécutée avec succès.');
        assert.equal(result, -1, 'Le résultat attendu pour un "root" vide est -1.');
    });

    QUnit.test('Gestion d\'un "root" avec children vide', function(assert) {
        const root = { children: [] };
        const result = Explore.exploreRootChildrens(root);
        assert.equal(result, 0, 'Le résultat attendu pour un "root" avec choldren vide est 0.');
    });

    QUnit.test('Gestion d\'un "root" avec plusieurs enfants', function(assert) {
        const root = {
            children: [
                { name: "Child1", type: "type1" },
                { name: "Child2", type: "type2" },
                { name: "Child3", type: "type3" }
            ]
        };
        const result = Explore.exploreRootChildrens(root);
        assert.equal(result, 3, 'Le résultat attendu pour un "root" avec plusieurs enfants est 3.');
    });

    QUnit.test('Gestion d\'un "root" avec enfants imbriqués', function(assert) {
        const root = {
            children: [
                { 
                    name: "Child1", type: "type1",
                    children: [
                        { name: "Child1.1", type: "type1.1" }
                    ]
                },
                { 
                    name: "Child2", type: "type2",
                    children: [
                        { name: "Child2.1", type: "type2.1" },
                        { name: "Child2.2", type: "type2.2" }
                    ]
                }
            ]
        };
        const result = Explore.exploreRootChildrens(root);
        assert.equal(result, 5, 'Le résultat attendu pour un "root" avec enfants imbriqués est 5.');
    });

});

QUnit.module('exploreView Test', function(hooks) {

    QUnit.test('Gestion d\'un "view" null', function(assert) {
        const view = null;
        const result = Explore.exploreView(view);
        assert.equal(result, -5, 'Le résultat attendu pour un "view" vide est un objet vide.');
    });

    QUnit.test('Gestion d\'un "view" vide sans "template"', function(assert) {
        const view = {};
        const result = Explore.exploreView(view);
        assert.equal(result, -4, 'Le résultat attendu pour un "view" sans "template" est -4.');
    });

    QUnit.test('Gestion d\'un "view" avec "template" vide', function(assert) {
        const view = { template: [] };
        const result = Explore.exploreView(view);
        assert.equal(result, -3, 'Le résultat attendu pour un "view" avec "template" vide est -3.');
    });

    QUnit.test('Transmission des informations à exploreRootModule Si Bonnes Conditions', function(assert) {
        const view = { template: [
            {
                type: "root",
                children: [
                    { name: "Child1", type: "type1" },
                    { name: "Child2", type: "type2" },
                    { name: "Child3", type: "type3" }
                ]
            }
        ] };
        const result = Explore.exploreView(view);
        assert.equal(result, 3, 'Le résultat attendu pour un "view" avec des propriétés vides est un objet avec les propriétés correspondantes vides.');
    });
});

QUnit.module('exploreAllViews Module Test', function(hooks){

    QUnit.test('Gestion de "views" null', function(assert) {
        const views = null;
        const result = Explore.exploreAllViews(views);
        assert.equal(result, -7, 'Le résultat attendu pour un "views" null est -7.');
    });

    QUnit.test('Gestion de "views" vide', function(assert) {
        const views = [];
        const result = Explore.exploreAllViews(views);
        assert.equal(result, -6, 'Le résultat attendu pour un "views" vide est -6.');
    });

    QUnit.test('Gestion de "views" non vide', function(assert) {
        const views = [
            {},
            { template: [] },
            { template: [
                {
                    type: "root",
                    children: [
                        { name: "Child1", type: "type1" },
                        { name: "Child2", type: "type2" },
                        { name: "Child3", type: "type3" }
                    ]
                }
            ]}
        ];
        const result = Explore.exploreAllViews(views);
        assert.deepEqual(result, [-4, -3, 3], 'Le résultat attendu est [-4, -3, 3].');
    });
});

QUnit.module('exploreModuleJson Test', function(hooks){

    QUnit.test('Gestion d\'un "moduleJson" null', function(assert) {
        const moduleJson = null;
        const result = Explore.exploreModuleJson(moduleJson);
        assert.equal(result, -9, 'Le résultat attendu pour un "moduleJson" null est -9.');
    });

    QUnit.test('Gestion d\'un "moduleJson" sans la proprité "views"', function(assert) {
        const moduleJson = {};
        const result = Explore.exploreModuleJson(moduleJson);
        assert.deepEqual(result, -8, 'Le résultat attendu pour un "moduleJson" sans la propriété "view" est -8');
    });

    QUnit.test('Gestion d\'un "moduleJson" avec la propriété "view"', function(assert) {
        const moduleJson = {
            name: "",
            description: "",
            version: "",
            author: "",
            license: "",
            views : [
            {},
            { template: [] },
            { template: [
                {
                    type: "root",
                    children: [
                        { name: "Child1", type: "type1" },
                        { name: "Child2", type: "type2" },
                        { name: "Child3", type: "type3" }
                    ]
                }
            ]}
        ]
        };
        const result = Explore.exploreModuleJson(moduleJson);
        assert.deepEqual(result, [-4, -3, 3], 'Le résultat attendu est [-4, -3, 3].');
    });
});