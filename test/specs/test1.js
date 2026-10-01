
describe('Demo Tests', function () {
    it('My First Test', async function () {
        await browser.url('https://www.google.com');
        await $('//textarea[@name="q"]').setValue('WebdriverIO');
        await $('//input[@name="btnK"]').click();
        await browser.pause(10000);
    });
});