const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");
const currencyArr = ["USD", "EUR", "AUD", "CAD", "CHF", "NZD", "BGN"];
const currencyObj = {
  usd: [
    [
      "USD-EUR",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/eur.json",
    ],
    [
      "EUR-USD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/usd.json",
    ],
    [
      "USD-AUD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/aud.json",
    ],
    [
      "AUD-USD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/aud/usd.json",
    ],
    [
      "USD-CAD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/cad.json",
    ],
    [
      "CAD-USD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/cad/usd.json",
    ],
    [
      "USD-CHF",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/chf.json",
    ],
    [
      "CHF-USD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/chf/usd.json",
    ],
    [
      "USD-NZD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/nzd.json",
    ],
    [
      "NZD-USD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/nzd/usd.json",
    ],
    [
      "USD-BGN",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/bgn.json",
    ],
    [
      "BGN-USD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/bgn/usd.json",
    ],
  ],
  eur: [
    [
      "EUR-USD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/usd.json",
    ],
    [
      "USD-EUR",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/eur.json",
    ],
    [
      "EUR-AUD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/aud.json",
    ],
    [
      "AUD-EUR",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/aud/eur.json",
    ],
    [
      "EUR-CAD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/cad.json",
    ],
    [
      "CAD-EUR",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/cad/eur.json",
    ],
    [
      "EUR-CHF",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/chf.json",
    ],
    [
      "CHF-EUR",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/chf/eur.json",
    ],
    [
      "EUR-NZD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/nzd.json",
    ],
    [
      "NZD-EUR",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/nzd/eur.json",
    ],
    [
      "EUR-BGN",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/bgn.json",
    ],
    [
      "BGN-EUR",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/bgn/eur.json",
    ],
  ],
  aud: [
    [
      "AUD-USD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/aud/usd.json",
    ],
    [
      "USD-AUD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/aud.json",
    ],
    [
      "AUD-EUR",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/aud/eur.json",
    ],
    [
      "EUR-AUD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/aud.json",
    ],
    [
      "AUD-CAD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/aud/cad.json",
    ],
    [
      "CAD-AUD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/cad/aud.json",
    ],
    [
      "AUD-CHF",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/aud/chf.json",
    ],
    [
      "CHF-AUD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/chf/aud.json",
    ],
    [
      "AUD-NZD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/aud/nzd.json",
    ],
    [
      "NZD-AUD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/nzd/aud.json",
    ],
    [
      "AUD-BGN",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/aud/bgn.json",
    ],
    [
      "BGN-AUD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/bgn/aud.json",
    ],
  ],
  cad: [
    [
      "CAD-USD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/cad/usd.json",
    ],
    [
      "USD-CAD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/cad.json",
    ],
    [
      "CAD-EUR",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/cad/eur.json",
    ],
    [
      "EUR-CAD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/cad.json",
    ],
    [
      "CAD-AUD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/cad/aud.json",
    ],
    [
      "AUD-CAD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/aud/cad.json",
    ],
    [
      "CAD-CHF",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/cad/chf.json",
    ],
    [
      "CHF-CAD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/chf/cad.json",
    ],
    [
      "CAD-NZD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/cad/nzd.json",
    ],
    [
      "NZD-CAD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/nzd/cad.json",
    ],
    [
      "CAD-BGN",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/cad/bgn.json",
    ],
    [
      "BGN-CAD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/bgn/cad.json",
    ],
  ],
  chf: [
    [
      "CHF-USD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/chf/usd.json",
    ],
    [
      "USD-CHF",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/chf.json",
    ],
    [
      "CHF-EUR",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/chf/eur.json",
    ],
    [
      "EUR-CHF",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/chf.json",
    ],
    [
      "CHF-AUD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/chf/aud.json",
    ],
    [
      "AUD-CHF",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/aud/chf.json",
    ],
    [
      "CHF-CAD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/chf/cad.json",
    ],
    [
      "CAD-CHF",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/cad/chf.json",
    ],
    [
      "CHF-NZD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/chf/nzd.json",
    ],
    [
      "NZD-CHF",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/nzd/chf.json",
    ],
    [
      "CHF-BGN",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/chf/bgn.json",
    ],
    [
      "BGN-CHF",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/bgn/chf.json",
    ],
  ],
  nzd: [
    [
      "NZD-USD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/nzd/usd.json",
    ],
    [
      "USD-NZD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/nzd.json",
    ],
    [
      "NZD-EUR",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/nzd/eur.json",
    ],
    [
      "EUR-NZD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/nzd.json",
    ],
    [
      "NZD-AUD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/nzd/aud.json",
    ],
    [
      "AUD-NZD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/aud/nzd.json",
    ],
    [
      "NZD-CAD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/nzd/cad.json",
    ],
    [
      "CAD-NZD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/cad/nzd.json",
    ],
    [
      "NZD-CHF",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/nzd/chf.json",
    ],
    [
      "CHF-NZD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/chf/nzd.json",
    ],
    [
      "NZD-BGN",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/nzd/bgn.json",
    ],
    [
      "BGN-NZD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/bgn/nzd.json",
    ],
  ],
  bgn: [
    [
      "BGN-USD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/bgn/usd.json",
    ],
    [
      "USD-BGN",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/bgn.json",
    ],
    [
      "BGN-EUR",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/bgn/eur.json",
    ],
    [
      "EUR-BGN",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/bgn/usd.json",
    ],
    [
      "BGN-AUD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/bgn/aud.json",
    ],
    [
      "AUD-BGN",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/aud/bgn.json",
    ],
    [
      "BGN-CAD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/bgn/cad.json",
    ],
    [
      "CAD-BGN",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/cad/bgn.json",
    ],
    [
      "BGN-CHF",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/bgn/chf.json",
    ],
    [
      "CHF-BGN",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/chf/bgn.json",
    ],
    [
      "BGN-NZD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/bgn/nzd.json",
    ],
    [
      "NZD",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/nzd/bgn.json",
    ],
  ],
};

function displayMenuCurrency(arrays) {
  arrays.forEach((arr) => {
    const ul = document.getElementById("displayCurrency");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(arr));
    ul.insertAdjacentElement("beforeend", li);
    document.querySelector("nav ul li").classList.add("active");
  });
}

displayMenuCurrency(currencyArr);

let newObj = new Object();
let arrays = [];

nav.addEventListener("click", (e) => {
  newObj = new Object();
  e.preventDefault();
  clearHTML();

  const value = e.target.innerText;
  if (!currencyArr.includes(value)) return;
  removeActivClass();
  document.querySelector("#showCur").innerText = value;
  e.target.classList.add("active");
  const cur = value.toLowerCase();
  getRequests(cur).then((response) => handleGetRequest(response));
});

async function getRequests(currencyName) {
  const obj = currencyObj[currencyName];

  const todayDate = new Date().toISOString().slice(0, 10);
  const lsKey = "currencies-" + currencyName + "-" + todayDate;
  const cachedData = localStorage.getItem(lsKey);

  if (cachedData) return JSON.parse(cachedData);
  const responses = [];

  for (const ob of obj) {
    let request = await getRequest(ob);
    responses.push(request);
  }

  localStorage.setItem(lsKey, JSON.stringify(responses));

  return responses;
}

toggle.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("show-nav");
});

async function getRequest(url) {
  try {
    const { data } = await axios(url[1]);
    const cur = url[0].toLowerCase().slice(-3);
    const text = url;
    const numbers = data[cur];
    const ret = { data: data, numbers: numbers, text: text, cur: cur };

    return ret;
  } catch (err) {
    console.log(err);
  }
}

function handleGetRequest(responses) {
  for (const response of responses) {
    const numbers = response.numbers;
    const text = response.text;
    if (numbers < 1) groupeItems(text, numbers, 1);
    if (numbers > 1 && numbers < 1.5) groupeItems(text, numbers, 2);
    if (numbers >= 1.5) groupeItems(text, numbers, 3);
  }

  for (const key in newObj) {
    size = newObj[key].length;
    newObj[key].sort((a, b) => a.cur - b.cur);
  }

  for (const key in newObj) {
    for (const elArray of newObj[key]) {
      let size = Object.keys(newObj[key]).length;
      const gp = elArray.gp;
      const number = elArray.cur;
      const text = elArray.name;
      const num = number.toString().slice(0, 3);
      const li = document.createElement("li");
      const groupUl = document.querySelector(`.group${gp} ul`);
      const groupUlCount = document.querySelector(`.group${gp} strong span`);
      if (!size) {
        groupUlCount.innerText = 0;
      } else {
        groupUlCount.innerText = size;
      }
      groupUl.appendChild(li);
      li.innerHTML = `${text} <span>${+num}</span>  `;
    }
  }
}

getRequests("usd").then((response) => handleGetRequest(response));

function removeActivClass() {
  document
    .querySelectorAll("nav ul li")
    .forEach((li) => li.classList.remove("active"));
}

function groupeItems(text, number, gp) {
  if (!newObj[gp]) newObj[gp] = [];
  newObj[gp].push({ name: text[0], cur: number, gp: gp });
}

function clearHTML() {
  document.querySelectorAll(".group ul").forEach((gp) => (gp.innerHTML = ""));
}
