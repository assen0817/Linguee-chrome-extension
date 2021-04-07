chrome.contextMenus.create({
    title: '単語検索-Linguee',
    type: 'normal',
    contexts: ['selection'],
    onclick: (info) => {
        const originalText = info.selectionText.replace(/ /g, '+')
        const url = `https://www.linguee.com/english-japanese/search?source=auto&query=` + originalText
        chrome.tabs.create({ url: url })
    }
})