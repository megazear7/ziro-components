import html from './services/html.js';
import css from './services/css.js';
import buttonStyles from './styles/button.js';
import ZiroComponent from './ziro-component.js';
import './ziro-splash.js';

class ZiroWizardNav extends ZiroComponent {
    readyCallback() {
        this.dispatchEvent(new CustomEvent('ziro-wizard-nav-connected', {
            bubbles: true
        }));

        this.shadowRoot.querySelector('button[part="previous"]').addEventListener('click', () => {
            this._dispatchPrevious()
        }, { signal: this.signal });

        this.shadowRoot.querySelector('button[part="next"]').addEventListener('click', () => {
            this._dispatchNext()
        }, { signal: this.signal });
    }

    styles() {
        return [buttonStyles, css`
            :host {
                display: flex;
                justify-content: space-between;
                box-sizing: border-box;
                overflow-x: hidden;
                background-color: var(--zc-background-color);
                color: var(--zc-background-text-color);
                transition: left ${this.speed}ms ease-in-out;
            }

            button {
                width: 50%;
                max-width: 300px;
            }

            button[part="previous"] {
                position: relative;
                margin-right: 1px;
                border-radius: var(--zc-border-radius) 0 0 var(--zc-border-radius);
            }

            button[part="next"] {
                position: relative;
                border-radius: 0 var(--zc-border-radius) var(--zc-border-radius) 0;
            }
        `];
    }

    render() {
        return html`
            <button part="previous"><slot name="previous"></slot><ziro-splash></ziro-splash></button>
            <button part="next"><slot name="next"></slot><ziro-splash></ziro-splash></button>
        `;
    }

    _dispatchPrevious() {
        this.dispatchEvent(new CustomEvent('ziro-wizard-previous', {
            bubbles: true
        }));
    }

    _dispatchNext() {
        this.dispatchEvent(new CustomEvent('ziro-wizard-next', {
            bubbles: true
        }));
    }
}

window.customElements.define('ziro-wizard-nav', ZiroWizardNav);
