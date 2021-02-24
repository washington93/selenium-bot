import webdriver from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import chromedriver from 'chromedriver';

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

var driver = new webdriver.Builder()
                 .withCapabilities(webdriver.Capabilities.chrome())
                 .build();

const By = webdriver.By;

driver.manage().window().maximize();

const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const gGamingWifi = async () => {
    //ROG Strix Z490-G Gaming
    await driver.get('https://www.kabum.com.br/cgi-local/site/produtos/descricao_ofertas.cgi?codigo=112904');
    await driver.findElements(By.className("preco_desconto_avista-cm")).then(function(elements){
        elements.forEach(function (element) {
            element.getText().then(function(text){
                console.log(text);
            });
        });
    });
    await sleep(100);
}

const gGaming = async () => {
    await driver.get('https://www.kabum.com.br/cgi-local/site/produtos/descricao_ofertas.cgi?codigo=113101');
    await driver.findElements(By.className("preco_desconto_avista-cm")).then(function(elements){
        elements.forEach(function (element) {
            element.getText().then(function(text){
                console.log(text);
            });
        });
    });
}

const process = async () => {
    await gGamingWifi();
    await gGaming();
}

process();

// const teste = driver.findElement(By.className('preco_desconto_avista-cm'));
// console.log(teste);

//Produtos