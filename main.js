document.querySelector('.search-panel__btn-search').addEventListener('click', function () {
   document.querySelector('.search-panel').classList.add('search-panel_active-search');
});

$("#slider").slider({
   min: 0,
   max: 69,
   values: [0,69],
   range: true
});