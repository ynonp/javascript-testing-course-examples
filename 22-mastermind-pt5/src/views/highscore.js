export default class HighScoreView {
  constructor(el, hs) {
    this.model = hs;
    this.rootEl = el;
    this.refresh();
  }

  refresh() {
    this.rootEl.innerHTML = `
      <table>
        <tr>
          <th>Name</th>
          <th>Rounds</th>
        </tr>
        ${this.model.getTopScore().map((data) => (`
        <tr>
          <td>${data.player}</td>
          <td>${data.rounds}</td>
        </tr>
        `)).join('')}
      </table>
    `;
  }
}


