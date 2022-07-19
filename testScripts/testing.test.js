const {Builder, Capabilities, By} = require('selenium-webdriver')

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


describe('can open website', ()=>{

  test('opens browser and goes to localhost', async ()=>{
    driver.get(link)
  })

})

describe('each functionality component has clicking abilities',()=>{
  test('clicking text will give you a text input', async ()=>{
    await driver.get(link)
    await driver.findElement(By.id('Text')).click()
    await driver.findElement(By.id('inputText')).sendKeys('testing hehehe')
  })
})

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