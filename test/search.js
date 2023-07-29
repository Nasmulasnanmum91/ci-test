module.exports = {
    before(browser){
    browser
    .page.sedtest()
    .navigate()
    .waitForElementVisible('@main','Navbar is visible')
    .assert.textContains('@main', 'Главная', 'Welcome title is correct')
    },
    
    'Search for word': function (browser) {
    let word = browser.globals.searchText;
        
    browser.assert.notEmpty('#navbarCollapse > div > a.btn.btn-primary')
    browser.strictClick('[name="search"]')

    browser.page.sedtest()
    .search(word)
    .waitForElementVisible('css selector','@itemTitle', 'Page title ok')
    .assert.titleContains('TestGym', 'title ok')
    .assert.textContains('@itemTitle', word, `${word} goods are found`);
        
    browser
    .page.sedtest()
    .section.topMenu
    .assert.textContains('@logIn', 'Войти');
    },   
    

    };