// ==UserScript==
// @name     atcoder-typical90-sort
// @author uesugi
// @description 典型90にgithubの解説リンクを追加
// @version  0.0.2
// @include  https://atcoder.jp/contests/typical90/tasks
// @grant    none
// @namespace https://greasyfork.org/users/703686
// ==/UserScript==

const getNanido = (e) => {
    const s = e.querySelectorAll("td > a")[1].text;
    return s.substr(s.length - 2, 1);
};

const typical90Sort = () => {

    const table = document.querySelector("#main-container > div.row > div:nth-child(2) > div > table > tbody");

    const tr = [...table.querySelectorAll("tbody > tr")].map((e) => { return { e: e, v: getNanido(e) }; }).sort((a, b) => a.v - b.v);

    while (table.firstChild) {
        table.removeChild(table.firstChild)
    }

    tr.forEach((e) => table.appendChild(e.e));
}