import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('calcite-input-text')
export class CalciteInputText extends LitElement {
  static formAssociated = true;
  static styles = css`input { padding: .25rem .5rem; width: 100%; }`;

  internals: ElementInternals = this.attachInternals();

  @property({ reflect: true, type: String })
  name: string = "calcite-input-text";

  @property({ reflect: true, type: String })
  placeholder: string = "I am a form-associated LitElement";

  @property({ type: String })
  value: string = "";

  connectedCallback() {
    super.connectedCallback();
    this.internals.setFormValue(this.value);
  }

  inputHandler(event: InputEvent) {
    const input = (event.target as HTMLInputElement);
    this.value = input.value;
    this.internals.setFormValue(input.value);
  }

  render() {
    return html`<input placeholder="${this.placeholder}" @input="${this.inputHandler}" type="text" value="${this.value}" />`;
  }
}
