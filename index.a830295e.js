async function t(t){try{const e=fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=e55542ecb6aab3d889d16953eac82937&page=${t}`);return(await e).json()}catch(t){return console.log("error :>> ",t)}}let e;function n(t){return e.filter((e=>t.includes(e.id))).map((t=>t.name)).join(", ")}!async function(){const t=await async function(){try{const t=fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=e55542ecb6aab3d889d16953eac82937");return(await t).json()}catch(t){return console.log("error :>> ",t)}}();e=t.genres}();async function i(t,e){let i=t.reduce(((t,{poster_path:e,release_date:i,genre_ids:o,id:r,original_title:a})=>t+`<div class="film-box" data-id="${r}">\n      <img class="film-poster"src="https://image.tmdb.org/t/p/w300${e}">\n      <p>${a}</p>\n      <p> ${n(o)}</p>\n      <p> ${parseInt(i)}</p>\n      <p>id: ${r}</p>\n      </div>`),"");e.innerHTML=i}async function o(t,e){const{title:i,poster_path:o,overview:r,genre_ids:a,id:c,original_title:p,popularity:s,vote_count:d,vote_average:l}=t,u=`<div class="film-info">\n         <img src="https://image.tmdb.org/t/p/w300${o}">\n         <div class="film-info-wrapper">\n           <p>${i}</p>\n           <p>Vote ${l}</p>\n           <p>Votes ${d}</p>\n           <p>Popularity ${s}</p>\n           <p>Original Title ${p}</p>\n           <p>Genre ${n(a)}</p>\n           <p>ABOUT</p>\n           <p>${r}</p>\n           <p>id: ${c}</p>\n           <button type="button">Add to watched</button>\n           <button type="button">Add to queue</button>\n         </div>\n        </div>`;e.innerHTML=u}let r;const a=document.querySelector(".gallery");a.addEventListener("click",(function(t){const e=t.target.closest(".film-box");if(!e)return;const n=Number(e.dataset.id);o(r.find((t=>t.id===n)),c)}));const c=document.querySelector(".modal-film-info");!async function(){const e=await t(5);r=e.results,i(r,a)}();
//# sourceMappingURL=index.a830295e.js.map
