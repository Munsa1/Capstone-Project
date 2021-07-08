// SPEAKERS SECTION
// const mobileMenu2 = document.getElementById('mobile-menu');
const guests = [
  {
    name: 'Micheal Zondani',
    jobPosition: 'Minister of Agriculture',
    info: 'Works for ministry of agriculture',
    photo: 'img/Speakers/speaker-1.jpg',
  },
  {
    name: 'Edgar Lungu',
    jobPosition: 'President of Zambia',
    info: 'Controls the affirs of the state',
    photo: 'img/Speakers/speaker-2.jpg',
  },
  {
    name: 'Emmanuel Ngulube',
    jobPosition: 'Administration',
    info: 'handles affairs of the Cooperative',
    photo: 'img/Speakers/speaker-3.jpg',
  },
  {
    name: 'Lia Mutale',
    jobPosition: 'Permanent Secretary',
    info: 'Works for ministry of Home affairs',
    photo: 'img/Speakers/speaker-4.jpg',
  },
  {
    name: 'Patrick Antonio Lungu',
    jobPosition: 'Cooperative Chairman',
    info: 'Sits on and chairs the board of Directors',
    photo: 'img/Speakers/speaker-6.jpg',
  },
  {
    name: 'Busiwa Liuma',
    jobPosition: 'Actor',
    info: 'Has done acting for eleven years',
    photo: 'img/Speakers/speaker-6.jpg',
  },

];
function guestSection(count) {
  return guests.slice(0, count).map((guest) => `
                            <li class="speaker">
                            <img src="${guest.photo}" alt="${guest.name}">
                            <div class="speaker-info">
                              <h3>${guest.name}</h3>
                              <span class="job-position">
                              ${guest.jobPosition}
                              </span>
                              <div class="grey-underline"></div>
                              <p>${guest.info}</p>
                            </div>
                          </li>`).join('');
}
const speakerList = document.getElementById('speaker-list');

const guestList = guestSection();
speakerList.innerHTML = guestList;

const moreButton = document.getElementById('more-btn');
moreButton.addEventListener('click', () => {
  speakerList.innerHTML = guestSection(guests.length);
});

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    speakerList.innerHTML = guestSection(2);
  } else {
    speakerList.innerHTML = guestSection(6);

    /* eslint-disable */
 mobileMenu.style.display = 'flex';
 /* eslint-enable */
  }
});

window.addEventListener('load', () => {
  if (window.innerWidth < 768) {
    speakerList.innerHTML = guestSection(2);
  } else {
    speakerList.innerHTML = guestSection(6);
  }
});
