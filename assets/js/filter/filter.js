// filter button manage

const filterButtons = document.querySelectorAll('.filter-btn');
const customDropdown = document.querySelector('.custom-dropdown');
const dropdownPanel = document.querySelector('.dropdown-panel');
const dropdownArrow = document.querySelector('.dropdown-arrow');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    customDropdown.classList.remove('active');
    dropdownPanel.style.display = 'none';
    dropdownArrow.src = '../assets/images/bluedown-arrow.svg';
  });
});

customDropdown.addEventListener('click', () => {
  const isActive = customDropdown.classList.contains('active');

  filterButtons.forEach(b => b.classList.remove('active'));

  customDropdown.classList.toggle('active', !isActive);
  dropdownPanel.style.display = isActive ? 'none' : 'block';
  dropdownArrow.src = isActive
    ? '../assets/images/bluedown-arrow.svg'
    : '../assets/images/blueuparrow.svg';
});


// dropdown calnder manage
const calendarContainer = document.getElementById('calendar-container');
const monthSelect = document.getElementById('monthSelect');
const yearSelect = document.getElementById('yearSelect');
const selectedRangeBox = document.querySelector('.selected-range-box');

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let startDate = null;
let endDate = null;

const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
const weekdays = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];

function generateCalendar(month, year) {
  calendarContainer.innerHTML = '';

  const firstDay = new Date(year, month, 1).getDay();
  const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const weekdaysRow = document.createElement('div');
  weekdaysRow.className = 'd-flex gap-2 mb-2';
  weekdays.forEach(day => {
    const div = document.createElement('div');
    div.className = 'text-center fw-bold';
    div.style.width = '40px';
    div.innerText = day;
    weekdaysRow.appendChild(div);
  });
  calendarContainer.appendChild(weekdaysRow);

  const grid = document.createElement('div');
  grid.className = 'calendar-grid';

  for (let i = 0; i < adjustedFirstDay; i++) {
    const empty = document.createElement('div');
    empty.style.width = '40px';
    empty.style.height = '40px';
    grid.appendChild(empty);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month, d);
    const dateStr = date.toISOString().split('T')[0];
    const day = document.createElement('div');
    day.className = 'day-item';
    day.innerText = d;

    const isStart = startDate && dateStr === startDate.toISOString().split('T')[0];
    const isEnd = endDate && dateStr === endDate.toISOString().split('T')[0];
    const inRange = startDate && endDate && date >= startDate && date <= endDate;

    if (inRange) {
      day.classList.add('in-full-range');
      if (isStart) day.classList.add('range-left');
      if (isEnd) day.classList.add('range-right');
    }
    if (isStart) day.classList.add('is-start-date');
    if (isEnd) day.classList.add('is-end-date');

    day.onclick = () => {
      if (!startDate || (startDate && endDate)) {
        startDate = date;
        endDate = null;
      } else if (date > startDate) {
        endDate = date;
      } else {
        startDate = date;
        endDate = null;
      }
      generateCalendar(currentMonth, currentYear);
      updateSelectedRange();
    };

    grid.appendChild(day);
  }

  calendarContainer.appendChild(grid);
}

function populateDropdowns() {
  months.forEach((m, i) => {
    const option = new Option(m, i);
    if (i === currentMonth) option.selected = true;
    monthSelect.appendChild(option);
  });
  for (let y = 2020; y <= 2030; y++) {
    const option = new Option(y, y);
    if (y === currentYear) option.selected = true;
    yearSelect.appendChild(option);
  }
}

monthSelect.onchange = () => {
  currentMonth = parseInt(monthSelect.value);
  generateCalendar(currentMonth, currentYear);
};
yearSelect.onchange = () => {
  currentYear = parseInt(yearSelect.value);
  generateCalendar(currentMonth, currentYear);
};

function updateSelectedRange() {
  const pad = n => String(n).padStart(2, '0');
  if (!startDate || !endDate) return;

  const s = `${pad(startDate.getDate())}/${pad(startDate.getMonth() + 1)}/${String(startDate.getFullYear()).slice(-2)}`;
  const e = `${pad(endDate.getDate())}/${pad(endDate.getMonth() + 1)}/${String(endDate.getFullYear()).slice(-2)}`;
  const st = `${startHour.value}:${startMinute.value}`;
  const et = `${endHour.value}:${endMinute.value}`;
  selectedRangeBox.innerText = `${s} ${st} - ${e} ${et}`;
}

const startHour = document.getElementById('startHour');
const startMinute = document.getElementById('startMinute');
const endHour = document.getElementById('endHour');
const endMinute = document.getElementById('endMinute');

function fillTimeSelect(select, values) {
  values.forEach(v => select.appendChild(new Option(v, v)));
}

fillTimeSelect(startHour, [...Array(24).keys()].map(n => String(n).padStart(2, '0')));
fillTimeSelect(endHour, [...Array(24).keys()].map(n => String(n).padStart(2, '0')));
fillTimeSelect(startMinute, ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']);
fillTimeSelect(endMinute, ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']);

[startHour, startMinute, endHour, endMinute].forEach(el => el.onchange = updateSelectedRange);

populateDropdowns();
generateCalendar(currentMonth, currentYear);
