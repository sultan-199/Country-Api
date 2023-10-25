(()=>{"use strict";const e=document.querySelector("#search"),n=document.getElementById("select"),t=document.querySelector("body"),o=document.querySelector(".countries"),a=document.querySelector(".mode"),s=document.querySelector(".loader"),c="https://restcountries.com/v3.1/all";let r=localStorage.getItem("mode");const l=()=>{r?(t.classList.add(r),document.querySelector(".dark").classList.add("Dnone"),document.querySelector(".light").classList.remove("Dnone")):(document.querySelector(".dark").classList.remove("Dnone"),document.querySelector(".light").classList.add("Dnone"))};let i;l(),a.addEventListener("click",(()=>{r=r?"":"night",console.log(r),localStorage.setItem("mode",r),t.classList.toggle("night"),l()})),e.addEventListener("input",(function(){d(i.filter((n=>n.name.common.toLowerCase().includes(e.value.toLowerCase()))))})),n.addEventListener("change",(()=>{"all"!==n.value?u(`https://restcountries.com/v3.1/region/${n.value}`):u(c)}));const m=async e=>{s.classList.remove("Dnone");const n=await fetch(e);if(!n.ok)throw new Error("Page Not Found Error 404");return await n.json()};function u(e){m(e).then((e=>{i=e,i.sort(((e,n)=>{const t=e.name.common.toLowerCase(),o=n.name.common.toLowerCase();return t<o?-1:t>o?1:0})),d(i)})).catch((e=>{console.log(e.message)})).finally((()=>{s.classList.add("Dnone")}))}function d(e){o.innerHTML="",e.forEach((e=>{o.innerHTML+=`\n        <div class="country">\n            <img src='${e.flags.svg}' alt="${e.altSpellings[1]}">\n            <div class="info">\n                <h1>${e.name.common}</h1>\n                <p>Population: <span>${e.population}</span></p>\n                <p>Region: <span>${e.continents}</span></p>\n                <p>Capital: <span>${e.capital?e.capital:"Not capital"}</span></p>\n            </div>\n            <a href="./about.html?country=name/${e.name.common}" ></a>\n        </div>`}))}u(c)})();