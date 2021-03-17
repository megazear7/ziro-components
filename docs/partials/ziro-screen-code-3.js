import { html } from 'orison';

export default () => html`
  <ziro-screen>
    <ziro-panel-set>
        <ziro-panel path="/">
            <h3>Panel 1</h3>
        </ziro-panel>
        <ziro-panel path="/page2">
            <h3>Panel 2</h3>
        </ziro-panel>
        <ziro-panel path="/ziro-screen.html">
            <h3>Panel 3</h3>
        </ziro-panel>
    </ziro-panel-set>
    <ziro-nav>
        <ziro-nav-item>A</ziro-nav-item>
        <ziro-nav-item>B</ziro-nav-item>
        <ziro-nav-item>C</ziro-nav-item>
    </ziro-nav>
  </ziro-screen>
`;
