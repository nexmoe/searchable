import SearchableUtils from './utils.js';
import { EditorController } from './controllers/EditorController.js';



// 主程序类
class KimiApp {
    static CONFIG = {
        SELECTORS: {
            EDITOR: '#msh-chateditor',
            SEND_BUTTON: '#send-button'
        }
    };
    static async init() {
        console.log('kimi.js loaded');
        const query = SearchableUtils.getQueryParam();
        if (query) {
            const editor = new EditorController(KimiApp.CONFIG);
            await editor.fillContent(query);
        }
    }
}

class TongyiApp {
    static CONFIG = {
        SELECTORS: {
            EDITOR: 'textarea',
            SEND_BUTTON: '.operateBtn--zFx6rSR0'
        }
    };
    static async init() {
        console.log('tongyi.js loaded');
        const query = SearchableUtils.getQueryParam();
        if (query) {
            const editor = new EditorController(TongyiApp.CONFIG);
            await editor.fillContent(query);
        }
    }
}

class GeminiApp {
    static CONFIG = {
        SELECTORS: {
            EDITOR: '.ql-editor',
            SEND_BUTTON: '.send-button'
        }
    };
    static async init() {
        console.log('gemini.js loaded');
        const query = SearchableUtils.getQueryParam();
        if (query) {
            const editor = new EditorController(GeminiApp.CONFIG);
            await editor.fillContent(query);
        }
    }
}

// 启动应用
addEventListener("load", KimiApp.init);
addEventListener("load", TongyiApp.init);
addEventListener("load", GeminiApp.init);

