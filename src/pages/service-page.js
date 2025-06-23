import { Component } from "@Fx-Professional-Services/nimbl";
import { html, css } from "lit";
export class ServicePage extends Component {
  static get styles() {
    return css`
      h2 {
        color: green;
      }
    `;
  }
  render() {
    return html` <h2>Service Page</h2> `;
  }
}

customElements.define("service-page", ServicePage);
