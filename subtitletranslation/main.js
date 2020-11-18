const innerString = ` const bodyText = document.querySelector('body').innerHTML; 
alert(bodyText);`
chrome.tabs.executeScript({
    code: innerString
})