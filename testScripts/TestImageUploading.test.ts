
import {Builder, Capabilities, By} from 'selenium-webdriver'
import script from 'jest'

const link = 'http://localhost:3000/'
let driver = new Builder()
.forBrowser("chrome")
// .setChromeOptions()
.build()

// uploads picture
// wont allow to upload without name 
// wont allow to upload without file selected 


describe('Image component capabilities',()=>{
  it('opens image selector from your computer', async ():Promise<void>=>{
    await driver.get(link)
    await driver.findElement(By.id('Image')).click()
    await expect(driver.findElement(By.id('chooseFileButton'))).toBeVisible
  })

  it('uploads the picture succesfully', async()=>{
      const name:string = "test"
      const message:string = "test"

      await driver.get(link)
      await driver.findElement(By.id('Image')).click()
      await driver.findElement(By.id('nameInput')).sendKeys(name)
      await driver.findElement(By.id('descriptionInput')).sendKeys(message)
      await driver.findElement(By.id('chooseFileButton')).click()
      await driver.sleep(5000)
      
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

afterAll(async ()=>{


    await driver.quit()
}, 15000);

