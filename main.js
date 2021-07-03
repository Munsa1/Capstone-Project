// SPEAKERS SECTION
const guests = [
  {
    name: 'Micheal Zondani',
    jobPosition: 'Minister of Agriculture',
    info: 'Works for ministry of agriculture',
    photo: 'img/speaker-1.jpg',
  },
  {
    name: 'Edgar Lungu',
    jobPosition: 'President of Zambia',
    info: 'Controls the affirs of the state',
    photo: 'img/speaker-2.jpg',
  },
  {
    name: 'Munsa Mibenge',
    jobPosition: 'Actor',
    info: 'Has done acting for eleven years',
    photo: 'img/speaker-3.jpg',
  },
  {
    name: 'Busiwa Liuma',
    jobPosition: 'Actor',
    info: 'Has done acting for eleven years',
    photo: 'img/speaker-4.png',
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

const guestList = guestSection(2);
speakerList.innerHTML = guestList;

const moreButton = document.getElementById('more-btn');
moreButton.addEventListener('click', () => {
  speakerList.innerHTML = guestSection(guests.length);
});