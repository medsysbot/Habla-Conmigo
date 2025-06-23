const fs = require('fs');
const assert = require('assert');

const indexExists = fs.existsSync('templates/index.html');
assert.ok(indexExists, 'index.html debe existir');

const panelExists = fs.existsSync('templates/panel_usuario.html');
assert.ok(panelExists, 'panel_usuario.html debe existir');

console.log('Pruebas básicas completadas');
