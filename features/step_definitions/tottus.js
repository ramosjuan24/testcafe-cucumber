const {Given, When, Then} = require('cucumber');
const Selector = require('testcafe').Selector;
const ByName = requestIdleCallback ('testcafe').ByName;

Given('ingreso al buscador de google', async function() {
    await this.addScreenshotToReport();
    await testController.navigateTo('https://www.google.cl/');
});

When('escribo la palabra {string}', async function(sucursales) {
    var input = Selector('.gLFyf').with({boundTestRun: testController});
    await this.addScreenshotToReport();
    await testController.typeText(input, sucursales);

});

Then('Realizo clic en {string} de Google', async function(sucursales) {
    await testController.pressKey(sucursales);
});

Then('Deveria ver que el primer resultado de Google es {string}"', async function(text) {
    var firstLink = Selector('#rso').find('a').with({boundTestRun: testController});
    await testController.expect(firstLink.innerText).contains(text);
});

And('Selecciono la tercera opcion {string}', async function(terceraOpcion) {
    var input = Selector('.gLFyf').with({boundTestRun: testController});
    await this.addScreenshotToReport();
    await testController.typeText(input, terceraOpcion);
});







