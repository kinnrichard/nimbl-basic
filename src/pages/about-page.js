import { Component } from "@Fx-Professional-Services/nimbl";
import { html, css } from "lit";
export class AboutPage extends Component {
  static get styles() {
    return css`
      h2 {
        color: green;
      }
    `;
  }
  render() {
    return html` <h2>About Page</h2> `;
  }
}

customElements.define("about-page", AboutPage);
