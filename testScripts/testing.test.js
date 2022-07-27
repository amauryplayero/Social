const {Builder, Capabilities, By} = require('selenium-webdriver')
// const {handleSubmit} = require('../src/Components/Text')
const {} = require('enzyme')
const script = require('jest')

// const url = 'https://www.selenium.dev'

// const driver = new webdriver.Buil der()

const getElementXpath = async (driver, xpath, timeout = 3000) => {
    const el = await driver.wait(until.elementLocated(By.xpath(xpath)), timeout);
    return await driver.wait(until.elementIsVisible(el), timeout);
};

const getElementName = async (driver, name, timeout = 3000) => {
    const el = await driver.wait(until.elementLocated(By.name(name)), timeout);
    return await driver.wait(until.elementIsVisible(el), timeout);
};
   
  const getElementId = async (driver, id, timeout = 3000) => {
    const el = await driver.wait(until.elementLocated(By.id(id)), timeout);
    return await driver.wait(until.elementIsVisible(el), timeout);
};

const link = 'http://localhost:3000/'
let driver = new Builder()
.forBrowser("chrome")
.setChromeOptions()
.build()


// describe('can open website', ()=>{

//   test('opens browser and goes to localhost', async ()=>{
//     driver.get(link)
//   })

// })

describe('Text component capabilities',()=>{
  test('clicking text will give you a text input', async ()=>{
    const writtenText = "testing text hehehe hai"
    const name = "Test Robot Jones"
    await driver.get(link)
    await driver.findElement(By.id('Text')).click()
    await driver.findElement(By.id('inputText')).sendKeys(writtenText)
  })
  test("input is submitted successfully",async ()=>{
    const writtenText = "testing text hehehe hai"
    const name = "Test Robot Jones"
    await driver.get(link)
    await driver.findElement(By.id('Text')).click()
    await driver.findElement(By.id('inputText')).sendKeys(writtenText)
    await driver.findElement(By.id('nameInput')).sendKeys(name)
    await driver.findElement(By.id('uploadTextButton')).click()
    let n = await 10
    await driver.sleep(n * 1000)
    let individualMessage = await driver.findElement(By.xpath(`//*[text()='${writtenText}']`)).getText()
    // console.log(individualMessage)
    // let individualMessage = messagesUploaded[1].findElement(By.xpath("//p[@class='message']"));
    await expect(individualMessage).toMatch(writtenText)
  })
  // test("name and input text can't be empty before posting", async ()=>{
  //   const writtenText = "testing text hehehe hai"
  //   const name = "Test Robot Jones"
  //   await driver.get(link)
  //   await driver.findElement(By.id('Text')).click()
  //   await driver.findElement(By.id('inputText')).sendKeys(writtenText)
  //   await driver.findElement(By.id('nameInput')).sendKeys(name)
  //   await driver.findElement(By.id('uploadTextButton')).click()
    
  // })


});

// describe('Image component capabilities',()=>{
//   it('opens image selector from your computer', async ()=>{
//     await driver.get(link)
//     await driver.findElement(By.id('Image')).click()
//     await expect(driver.findElement(By.id('chooseFileButton'))).toBeVisible
//   })

//   it('uploads successfully to the S3 cloud', async()=>{
//     await driver.get(link)
//     await driver.findElement(By.id('Image')).click()
//     let chooseFile = await driver.findElement(By.xpath('//input[@id="chooseFileButton"]'))
//     await chooseFile.sendKeys('/Users/amaurylopez/Downloads/carbon (1).png')
//     await driver.findElement(By.id('uploadImageButton')).click()
//     await driver.sleep(5000)



//     // expect(driver.findElement(By.id('chooseFileButton'))).toBeVisible()

//   })
// });



// describe('executing test scenario on the website www.selenium.dev', ()=>{
//   let tweet = 'aaaaaa'

//   test('performing initial test to tweet', async ()=>{

    
//     // add the desired options
//     await driver.get('https://www.twitter.com')
//     await driver.findElement(By.className('DraftEditor-editorContainer'))
//     .sendKeys(tweet)
//     await driver.findElement(By.className('css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0'))
//     .click
//   });
  
// }, 10000);

afterAll(async ()=>{


    await driver.quit()
}, 15000);


  // test('it performs a validation of title on the home page', async ()=>{
  //     await browser.get(url)
  //     const title = await browser.findElement(by.tagName('h1')).getText()
  //     expect(title).toContain('SeleniumHQ Browser Automation')
  // })

  // test('it performs a validation of the search box on the page', async ()=>{
  //     const foundAndLoadedCheck = async() =>{
  //         await until.elementLocated(by.id('search'))
  //         const value = await browser.findElement(by.id('search')).getText()
  //         return value !== '~'
  //     }
  //     await browser.wait(foundAndLoadedCheck, 3000)
  //     const search = await broser.findElement(by.id('search')).getText()
  //     expect(search).toEqual('')
  // })

  // describe ('it captures a screenshot of the current page on the browser', ()=>{
  //   test('snap a picture by takin the screenshot', async () =>{
  //     await browser.get(url)
  //     await browser.takeScreenshot()
  //   })
  // })