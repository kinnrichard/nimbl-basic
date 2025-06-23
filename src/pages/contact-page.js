import { Component } from "@Fx-Professional-Services/nimbl";
import { html, css } from "lit";
export class ContactPage extends Component {
  static get styles() {
    return css`
      h2 {
        color: green;
      }
    `;
  }
  render() {
    return html` <h2>Contact Page</h2> `;
  }
}

customElements.define("contact-page", ContactPage);
