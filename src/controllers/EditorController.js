import SearchableUtils from '../utils.js';

export class EditorController {
    static DEFAULT_CONFIG = {
        TIMEOUT: 5000,
        POLL_INTERVAL: 100,
        SEND_DELAY: 300
    };

    constructor(config = {}) {
        if (!config.SELECTORS) {
            throw new Error('SELECTORS configuration is required');
        }
        
        this.config = {
            ...EditorController.DEFAULT_CONFIG,
            ...config
        };
        this.checkInterval = null;
        this.timeoutId = null;
    }

    async waitForEditor() {
        return new Promise((resolve, reject) => {
            this.checkInterval = setInterval(() => {
                const editor = SearchableUtils.getElement(this.config.SELECTORS.EDITOR);
                if (editor) {
                    clearInterval(this.checkInterval);
                    resolve(editor);
                }
            }, this.config.POLL_INTERVAL);

            this.timeoutId = setTimeout(() => {
                clearInterval(this.checkInterval);
                reject(new Error('Editor element not found after timeout'));
            }, this.config.TIMEOUT);
        });
    }

    async fillContent(query) {
        try {
            const editor = await this.waitForEditor();
            console.log('Editor found:', editor);
            editor.focus();
            editor.dispatchEvent(SearchableUtils.createInputEvent(query));
            
            await new Promise(resolve => setTimeout(resolve, this.config.SEND_DELAY));
            const sendButton = SearchableUtils.getElement(this.config.SELECTORS.SEND_BUTTON);
            sendButton?.click();
            
            console.log('Content filled and sent successfully');
        } catch (error) {
            console.error('Error filling content:', error);
        }
    }
} 