const pageCommands = {
    search(word) {
        this
        .setValue('@searchBar', [word, browser.Keys.ENTER])
        ///browser.Keys.ENTER;
        return this;
        }
};

module.exports = {
    url: 'http://testshop.sedtest-school.ru/',
    commands: [pageCommands],
    elements: {
        main: '#navbarCollapse',
        searchBar: '[name="search"]', 
        //submitButton: browser.Keys.ENTER,
        itemTitle: '.card-title'
    },
    sections: {
        topMenu: {
        selector: '#navbarCollapse > div',
        elements: {
            logIn: '#navbarCollapse > div > a.btn.btn-primary',
            cartLink: '#navbarCollapse > div > a:nth-child(1)'
        }
        }
    }
}