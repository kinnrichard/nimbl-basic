import { Component } from "@Fx-Professional-Services/nimbl";
import { html, css } from "lit";

export class AppContainer extends Component {
  static get styles() {
    return css`
      h1 {
        color: red;
      }
    `;
  }
  render() {
    return html`
      <h1>this is sample code</h1>
      <slot></slot>
    `;
  }
}

customElements.define("app-container", AppContainer);
