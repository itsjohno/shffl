const team = 'Lil Shinovi';
const names = [
  'Agustin Demousselle',
  'Adam Brown',
  'Angelos Sfakianakis',
  'Colin Bell',
  'Gabor Szalkai',
  'Xiaoming Wang',
  'Charles Gunn-Russell'
];

const shuffle = () => (
  names.map( (_, i, arrCopy) => {
    const rand = i + ( Math.floor( Math.random() * (arrCopy.length - i) ) );
    [arrCopy[rand], arrCopy[i]] = [arrCopy[i], arrCopy[rand]];
    return arrCopy[i];
  })
);

const formatDate = () => {
  const today = new Date();
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const day = days[today.getDay()];
  const month = months[today.getMonth()];
  return `${day} ${today.getDate()}, ${month}`;
};

const date = document.getElementById('date');
const list = document.getElementById('list');
const button = document.getElementById('reshuffle');
const teamName = document.getElementById('team-name');

function writeList () {
  const shuffled = shuffle();
  for (const dev of shuffled) {
    const li = document.createElement('li');
    li.textContent = dev;
    list.appendChild(li);
  }
}
button.addEventListener('click', () => {
  list.innerHTML = "";
  writeList();
});

date.textContent = formatDate();
teamName.textContent = team;
writeList();