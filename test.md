
```json
{
    /*
    ...
    */
    "views": [
    {
      "vid": 0,
      "menu": true,
      "name": "items",
      "type": "view",
      /*
      ...
      */
      "template": [
        {
          "id": 0,
          "pos": 0,
          "name": "root",
          "open": true,
          "type": "root",
          "isOpen": true,
          "children": [
            {
              "id": 1,
              "pos": 0,
              "card": false,
              "name": "group1",
              "open": true,
              "type": "group",
              "class": "col-md-8 offset-md-2",
              "isOpen": true,
              "parent": 0,
              "children": [
                {
                  "id": 3,
                  "pos": 0,
                  "name": "group3",
                  "open": false,
                  "type": "group",
                  "class": "d-flex justify-content-end mb-4",
                  "isOpen": true,
                  "parent": 1,
                  "children": [
                    {
                      "id": 4,
                      "pos": 0,
                      "name": "group4",
                      "open": false,
                      "type": "group",
                      "class": "",
                      "isOpen": true,
                      "parent": 3,
                      "children": [
                        {
                          "id": 5,
                          "pos": 0,
                          "name": "input5",
                          "type": "input",
                          "value": "$pattern",
                          "parent": 4,
                          "oninput": true,
                          "subtype": "text",
                          "placeholder": "search ..."
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": 2,
                  "pos": 1,
                  "data": "$data",
                  "name": "table2",
                  "open": true,
                  "type": "table",
                  "filter": "it.item.reference.startsWith(pattern)||it.item.name.startsWith(pattern)",
                  "isOpen": true,
                  "parent": 1,
                  "headers": "$headers",
                  "children": [
                    {
                      "id": 6,
                      "pos": 0,
                      "name": "span6",
                      "type": "span",
                      "value": "@itx",
                      "parent": 2
                    },
                    {
                      "id": 23,
                      "pos": 1,
                      "href": "/home/items/item",
                      "name": "link23",
                      "open": true,
                      "type": "link",
                      "isOpen": true,
                      "parent": 2,
                      "onclick": "app.getUserData().current = it;\napp.go('item', it.item.reference);\nreturn false;",
                      "children": [
                        {
                          "id": 25,
                          "pos": 0,
                          "name": "span7_25",
                          "type": "span",
                          "class": "",
                          "value": "@it.item.reference",
                          "parent": 23
                        }
                      ]
                    },
                    {
                      "id": 8,
                      "pos": 2,
                      "href": "/home/items/item",
                      "name": "link8",
                      "open": false,
                      "type": "link",
                      "isOpen": true,
                      "parent": 2,
                      "onclick": "app.getUserData().current = it;\napp.go('item', it.item.reference);\nreturn false;",
                      "children": [
                        {
                          "id": 9,
                          "pos": 0,
                          "name": "span9",
                          "type": "span",
                          "class": "",
                          "value": "@it.item.name",
                          "parent": 8
                        }
                      ]
                    },
                    {
                      "id": 12,
                      "pos": 3,
                      "name": "span12",
                      "type": "span",
                      "value": "@it.item.type",
                      "parent": 2
                    },
                    {
                      "id": 13,
                      "pos": 4,
                      "name": "span13",
                      "type": "span",
                      "value": "@it.item.familly",
                      "parent": 2
                    },
                    {
                      "id": 14,
                      "pos": 5,
                      "name": "span14",
                      "type": "span",
                      "value": "@it.item.sfamilly",
                      "parent": 2
                    }
                  ]
                }
              ],
              "conditional": "data!=null"
            }
          ]
        }
      ],
      "displayname": "Articles"
    },
    {
      "vid": 1,
      "name": "newitem",
      "type": "import",
      "template": [
        {
          "id": 0,
          "pos": 0,
          "name": "root",
          "open": true,
          "type": "root",
          "isOpen": true,
          "children": [
            {
              "id": 2,
              "pos": 0,
              "name": "group",
              "open": true,
              "type": "group",
              "isOpen": true,
              "parent": 0,
              "children": [
                {
                  "id": 5,
                  "pos": 0,
                  "name": "newdesign",
                  "open": true,
                  "type": "group",
                  "isOpen": true,
                  "parent": 2,
                  "children": [
                    {
                      "id": 7,
                      "pos": 0,
                      "name": "header",
                      "type": "group",
                      "class": "d-flex justify-content-between",
                      "isOpen": true,
                      "parent": 5,
                      "children": [
                        {
                          "id": 8,
                          "pos": 0,
                          "name": "hx8",
                          "type": "hx",
                          "value": "Nouvel article",
                          "parent": 7,
                          "xparam": "4"
                        },
                        {
                          "id": 9,
                          "pos": 1,
                          "name": "span9",
                          "type": "span",
                          "class": "fa fa-times mt-2",
                          "parent": 7,
                          "onclick": "app.cancelModal();"
                        }
                      ]
                    },
                    {
                      "id": 10,
                      "pos": 1,
                      "name": "content_form",
                      "open": true,
                      "type": "group",
                      "class": "mt-4",
                      "isOpen": true,
                      "parent": 5,
                      "children": [
                        {
                          "id": 11,
                          "pos": 0,
                          "name": "form-row",
                          "open": true,
                          "type": "group",
                          "class": "form-row",
                          "isOpen": true,
                          "parent": 10,
                          "children": [
                            {
                              "id": 15,
                              "pos": 0,
                              "name": "col",
                              "open": true,
                              "type": "group",
                              "class": "col",
                              "isOpen": true,
                              "parent": 11,
                              "children": [
                                {
                                  "id": 16,
                                  "pos": 0,
                                  "hook": "let value = e.target.value.toLowerCase();\nvnode.attrs.data.item.reference = value;\nif(!value){\n    newitem_cls.setDangerClass();\n    colClass = 'danger';\n    isButtonBlocked = true;\n    return;\n}\nitemBlocked=true\nvnode.attrs.data.itemrefn(value).then((d)=>{\n    loading = false;\n    itemBlocked = false;\n    if(d){\n\tnewitem_cls.setDangerClass();\n\tcolClass = 'danger';\n    }\n    else{\n\tnewitem_cls.setSuccessClass();\n\tcolClass = 'success';\n\tif(vnode.attrs.data.item.name)\n\t    isButtonBlocked = false;\n\telse\n\t    newitem_cls.setFocus('nwit_reference');\n    }\n\n    \n})",
                                  "name": "nwit_reference",
                                  "type": "input",
                                  "label": "référence",
                                  "value": "%data.item.reference",
                                  "parent": 15,
                                  "subtype": "text",
                                  "disabled": "$itemBlocked"
                                }
                              ]
                            },
                            {
                              "id": 13,
                              "pos": 1,
                              "name": "loading",
                              "open": false,
                              "type": "group",
                              "class": "spinner-border",
                              "isOpen": true,
                              "parent": 11,
                              "children": [
                                {
                                  "id": 14,
                                  "pos": 0,
                                  "name": "span14",
                                  "type": "span",
                                  "class": "sr-only",
                                  "value": "loading...",
                                  "parent": 13
                                }
                              ],
                              "conditional": "loading"
                            }
                          ]
                        },
                        {
                          "id": 23,
                          "pos": 1,
                          "name": "errortext",
                          "open": false,
                          "type": "group",
                          "class": "mb-1 text-danger",
                          "style": "margin-top:-10px;",
                          "isOpen": true,
                          "parent": 10,
                          "children": [
                            {
                              "id": 25,
                              "pos": 0,
                              "name": "span-exclamation",
                              "type": "span",
                              "class": "fa fa-exclamation mr-1",
                              "parent": 23
                            },
                            {
                              "id": 24,
                              "pos": 1,
                              "name": "span24",
                              "type": "span",
                              "class": "",
                              "title": "",
                              "value": " la référence est obligatoire et unique",
                              "parent": 23
                            }
                          ],
                          "conditional": "colClass=='danger'"
                        },
                        {
                          "id": 17,
                          "pos": 2,
                          "hook": "let value = e.target.value.toLowerCase();\nvnode.attrs.data.item.name = value;\nif(!value){\n    isButtonBlocked = true;\n    return;\n}\nif(vnode.attrs.data.item.reference && colClass == 'success')\n    isButtonBlocked = false;\nelse\n    newitem_cls.setFocus('nwit_nameid');",
                          "name": "nwit_nameid",
                          "type": "input",
                          "label": "désignation",
                          "value": "%data.item.name",
                          "parent": 10,
                          "subtype": "text",
                          "disabled": "$itemBlocked"
                        },
                        {
                          "id": 18,
                          "pos": 3,
                          "name": "it_ok",
                          "type": "button",
                          "class": "btn btn-block btn-primary",
                          "value": "ok",
                          "parent": 10,
                          "onclick": "app.closeModal();",
                          "subtype": "submit",
                          "disabled": "$isButtonBlocked"
                        },
                        {
                          "id": 19,
                          "pos": 4,
                          "name": "it_close",
                          "type": "button",
                          "class": "btn btn-link btn-block",
                          "value": "annuler",
                          "parent": 10,
                          "onclick": "app.cancelModal();",
                          "subtype": "button"
                        }
                      ]
                    }
                  ]
                }
              ],
              "conditional": ""
            }
          ]
        }
      ],
      "functions": [
        {
          "code": "()=>{\n    let div = document.getElementById(\"nwit_reference\");\n    if(colClass == 'success'){\n\tdiv.classList.remove('border');\n\tdiv.classList.remove('border-success');\n    }\n    \n    div.classList.add('border');\n    div.classList.add('border-danger');\n}",
          "name": "setDangerClass"
        },
        {
          "code": "()=>{\n    let div = document.getElementById(\"nwit_reference\");\n    if(colClass == 'danger'){\n\tdiv.classList.remove('border');\n\tdiv.classList.remove('border-danger');\n    }\n    \n    div.classList.add('border');\n    div.classList.add('border-success');\n}",
          "name": "setSuccessClass"
        },
        {
          "code": "(id)=>{\n    document.getElementById(id).focus();\n}\n",
          "name": "setFocus"
        }
      ]
    },
    /*
    ...
    */
}

```
