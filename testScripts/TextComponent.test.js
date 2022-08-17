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
  it("submits input successfully",async ()=>{
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





afterAll(async ()=>{


    await driver.quit()
}, 15000);
