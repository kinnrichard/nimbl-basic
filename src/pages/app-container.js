import { Component } from "@Fx-Professional-Services/nimbl";
import { html, css } from "lit";
export class AppContainer extends Component {
  static get styles() {
    return css`
      :host {
        display: block;
        font-family: sans-serif;
      }

      nav {
        background-color: #333;
        padding: 1rem;
        display: flex;
        gap: 1rem;
      }

      nav a {
        color: white;
        text-decoration: none;
        font-weight: bold;
      }

      nav a:hover {
        text-decoration: underline;
      }

      h1 {
        color: red;
        margin-top: 1rem;
      }
    `;
  }
  render() {
    return html`
      <nav>
        <a href="/index.html#/home">Home</a>
        <a href="/index.html#/about">About</a>
        <a href="/index.html#/services">Services</a>
        <a href="/index.html#/contact">Contact</a>
      </nav>
      <slot></slot>
    `;
  }
}

customElements.define("app-container", AppContainer);
