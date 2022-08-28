const dashboardBtns = document.querySelectorAll('.dashboard__controls > button');

let dashboardData;

const getData = async function () {
  try {
    const res = await fetch('./data.json');
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error)
  }
};

// Assign data to variable
(async () => {
  dashboardData = await getData();
})();

const changeCurrentActiveBtn = function (id) {
  dashboardBtns.forEach(btn => btn.classList.remove('active'));
  document.getElementById(id).classList.add('active');
};

const displayData = function (e) {
  if (!dashboardData) return;

  const type = e.target.id;

  changeCurrentActiveBtn(type);

  dashboardData.forEach(data => {
    const cardEl = document.querySelector(`[data-title="${data.title}"]`);
    const timeCur = data.timeframes[type].current;
    const timePrev = data.timeframes[type].previous;
    const elCur = cardEl.querySelector('.card__timeframe');
    const elPrev = cardEl.querySelector('.card__timeframe-prev');

    let prevPlural;

    if (type === 'daily') prevPlural = 'Day';
    if (type === 'weekly') prevPlural = 'Week';
    if (type === 'monthly') prevPlural = 'Month';

    elCur.textContent = timeCur !== 1 ? `${timeCur}hrs` : `${timeCur}hr`;

    elPrev.textContent = `Last ${prevPlural} - `;
    elPrev.textContent += timePrev > 1 ? `${timePrev}hrs` : `${timePrev}hr`
  })
};

dashboardBtns.forEach(btn => btn.addEventListener('click', displayData))
