import { Component } from "@Fx-Professional-Services/nimbl";
import { html, css } from "lit";
export class HomePage extends Component {
  static get styles() {
    return css`
      h2 {
        color: blue;
      }
    `;
  }
  render() {
    return html` <h2>Home Page</h2> `;
  }
}

customElements.define("home-page", HomePage);
