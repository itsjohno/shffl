const shuffle = (toBeShuffled) => {
  return toBeShuffled.map( (_, i, arrCopy) => {
    const rand = i + ( Math.floor( Math.random() * (arrCopy.length - i) ) );
    [arrCopy[rand], arrCopy[i]] = [arrCopy[i], arrCopy[rand]];
    return arrCopy[i];
  });
};

const formatDate = (date) => {
  const locale = window.navigator.language;
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat(locale, options).format(date);
};

const writeList = (items) => {
  const list = document.getElementById('list');
  for (const i of items) {
    const li = document.createElement('li');
    li.textContent = i;
    list.appendChild(li);
  }
};

const buttonElement = document.getElementById('reshuffle');
buttonElement.addEventListener('click', () => {
  list.innerHTML = "";
  location.reload();
});

const urlParams = new URLSearchParams(window.location.search);
const dateElement = document.getElementById('date');
dateElement.textContent = formatDate(new Date());

const teamNameElement = document.getElementById('team-name');
const team = urlParams.get('teamName') || "My Team";
teamNameElement.textContent = team;

const members = (urlParams.get('members') || "Nobody Defined").split(',');
writeList(shuffle(members));