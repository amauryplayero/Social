
import {Builder, Capabilities, By} from 'selenium-webdriver'
import script from 'jest'

const link = 'http://localhost:3000/'
let driver = new Builder()
.forBrowser("chrome")
// .setChromeOptions()
.build()

describe('Image component capabilities',()=>{
  it('opens image selector from your computer', async ()=>{
    await driver.get(link)
    await driver.findElement(By.id('Image')).click()
    await expect(driver.findElement(By.id('chooseFileButton'))).toBeVisible
  })

//   it('uploads successfully', async()=>{
//     await driver.get(link)
//     await driver.findElement(By.id('Image')).click()
//     let chooseFile = await driver.findElement(By.xpath('//input[@id="chooseFileButton"]'))
//     await chooseFile.sendKeys('/Users/amaurylopez/Downloads/carbon (1).png')
//     await driver.findElement(By.id('uploadImageButton')).click()
//     await driver.sleep(5000)
//     // expect(driver.findElement(By.id('chooseFileButton'))).toBeVisible()
//   })
});


