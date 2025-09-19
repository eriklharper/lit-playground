import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('calcite-input-text')
export class CalciteInputText extends LitElement {
  static formAssociated = true;
  static styles = css`p { color: blue }`;
  
  internals: ElementInternals = this.attachInternals();

  @property()
  name = "calcite-input-text";
  
  @property()
  value = "initial value";
  
  connectedCallback() {
    super.connectedCallback();
    this.internals.setFormValue(this.value);
  }

  inputHandler(event) {
    this.value = event.target.value;
    this.internals.setFormValue(event.target.value);
  }

  render() {
    return html`<input @input="${this.inputHandler}" type="text" value="${this.value}" />`;
  }
}
