describe('', () => {
    it('', async() => {
        await $('//*[@resource-id="com.androidsample.generalstore:id/spinnerCountry"]').click()
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text("India"))').click();
        await $('//*[@text="Female"]').click()
        //await driver.pause(4000)
        	
        //await driver.pause(8000)
        await $('//*[@text="Enter name here"]').addValue('Kaviya')
        //await driver.pause(8000)
        await $('//*[@resource-id="com.androidsample.generalstore:id/btnLetsShop"]').click()
        //await driver.pause(8000)
        await $('//*[@bounds="[540,971][1002,1009]"]').click() 
        //await driver.pause(8000)
        await $('//*[@bounds="[540,1786][1002,1824]"]').click()
        await $('//*[@resource-id="com.androidsample.generalstore:id/appbar_btn_cart"]').click()
        await $('//*[@bounds="[44,1650][1019,1738]"]').click()
        await $('//*[@resource-id="com.androidsample.generalstore:id/btnProceed"]').click()




        
    });
});