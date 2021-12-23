import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import './style.css';
import noImage from './assets/no_image.png';
import '@fortawesome/fontawesome-free/css/all.css';
import getSchedules from './schedule.js';
import { getLikes, recordLike, getComments } from './involvement.js';

const schedules = getSchedules();
const diplayLikes = () => {
  getLikes().then((results) => {
    results.forEach((result) => {
      const showId = result.item_id;
      const titleLikes = document.getElementById(`title-like-${showId}`);

      if (titleLikes !== null) {
        titleLikes.previousElementSibling.classList.add('text-danger');
        titleLikes.innerHTML = result.likes;
      }
    });
  });
  // console.log(titleLikes);
};

const displaycommentsPopup = () => {
  getComments().then((results) => {
    // console.log(results);
    results.forEach((result) => {
      const showId = result.item_id;
      const titleComments = document.getElementById(`comment-size-${showId}`);
      if (titleComments !== null) {
        titleComments.previousElementSibling.classList.add('text-success');
      }titleComments.innerHTML = result.comments;
    });
  });
};

const displayTitleCount = (count) => {
  const titleCountContainer = document.getElementById('title-count');
  titleCountContainer.innerHTML = `(${count})`;
};

const trimTitle = (title) => title.substring(0, 16);

const displaySchedules = () => {
  const myImage = new Image();
  // eslint-disable-next-line camelcase
  myImage.src = noImage;
  const moviesContainer = document.getElementById('movies-container');
  let container = '';

  schedules.then((schedule) => {
    displayTitleCount(schedule.length);
    schedule.forEach((item) => {
      // eslint-disable-next-line no-underscore-dangle
      const info = item._embedded;
      const image = info.show.image === null ? myImage.src : info.show.image.medium;
      container += `<div class="col-md-2 col-sm-12">
                        <div class="card shadow-sm">
                            <img src="${image}" alt="${info.show.name}">
                            <div class="card-body">
                                <p class="text-sm">${trimTitle(info.show.name)}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                <div id="maincontent">
                                  <button id="button" type="button" class="btn btn-sm btn-outline-secondary">Details</button>
                                </div>
                                    <small class="text-muted likes"><i class="fas fa-heart like" data-id="${info.show.id}"></i> <span id="title-like-${info.show.id}">0</span></small>
                                    <small class="text-muted"><i class="fas fa-comment comment" data-id="${info.show.id}"></i> <span id="comment-size-${info.show.id}">0</span></small> 
                                </div>
                            </div>
                        </div>
                    </div>`;

      // numberOfLikes(info.show.id);
    });
    moviesContainer.innerHTML = container;
    diplayLikes();
    displaycommentsPopup();
    const likes = document.querySelectorAll('.like');
    likes.forEach((like) => {
      like.addEventListener('click', (e) => {
        recordLike(
          JSON.stringify({
            item_id: e.target.dataset.id,
          }),
        );
        e.target.classList.add('text-danger');

        const titleLikes = document.getElementById(
          `title-like-${e.target.dataset.id}`,
        );
        let numberOfLikes = parseInt(titleLikes.innerHTML, 10);
        // eslint-disable-next-line no-plusplus
        numberOfLikes++;
        titleLikes.innerHTML = numberOfLikes;
      });
    });
  });
};

// const numberOfLikes = (id) => {};
// displaycommentsPopup();
displaySchedules();

const closePopup = document.getElementById('popupclose');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const button = document.getElementById('button');
// Close Popup Event
// eslint-disable-next-line func-names
closePopup.onclick = function () {
  overlay.style.display = 'none';
  popup.style.display = 'none';
};
// Show Overlay and Popup
// eslint-disable-next-line func-names
button.onclick = function () {
  overlay.style.display = 'block';
  popup.style.display = 'block';
};
