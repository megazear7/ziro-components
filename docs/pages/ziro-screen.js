import { html } from 'orison';

export default context => html`
  <section>
    <div><h3>&lt;ziro-screen></h3></div>
    <p>&lt;ziro-screen> allows you to build a bottom navigation based app with ease</p>
    <ziro-screen>
      <ziro-panel-set>
          <ziro-panel>
              <h3>Panel 1</h3>
          </ziro-panel>
          <ziro-panel>
              <h3>Panel 2</h3>
          </ziro-panel>
          <ziro-panel>
              <h3>Panel 3</h3>
          </ziro-panel>
      </ziro-panel-set>
      <ziro-nav>
          <ziro-nav-item selected>A</ziro-nav-item>
          <ziro-nav-item>B</ziro-nav-item>
          <ziro-nav-item>C</ziro-nav-item>
      </ziro-nav>
    </ziro-screen>
    ${context.mdFile('./docs/partials/ziro-screen.md')}
  </section>
`;
