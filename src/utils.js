// DOM 操作类
class SearchableUtils {
    static getQueryParam(param = 'q') {
        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get(param) || '';
        console.log('query', query);
        return query;
    }
    static getElement(selector) {
        return document.querySelector(selector);
    }

    static createInputEvent(text) {
        return new InputEvent('input', {
            bubbles: true,
            // cancelable: true,
            inputType: 'insertText',
            data: text,
            isTrusted: true
        });
    }
}

export default SearchableUtils;
