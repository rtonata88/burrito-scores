import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import './style.css';
import noImage from './assets/no_image.png';
import '@fortawesome/fontawesome-free/css/all.css';
import { getSchedules } from './schedule.js';
import { getLikes, recordLike } from './involvement.js';
import displaycommentsPopup from './displayComments.js';

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
};

const recordLikeInteraction = () => {
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
};

const displayTitleCount = (count) => {
  const titleCountContainer = document.getElementById('title-count');
  titleCountContainer.innerHTML = `(${count})`;
};

const titlesCount = (count) => {
  displayTitleCount(count);
  return count;
};

const trimTitle = (title) => title.substring(0, 16);

const displaySchedules = () => {
  const myImage = new Image();
  // eslint-disable-next-line camelcase
  myImage.src = noImage;
  const moviesContainer = document.getElementById('movies-container');
  let container = '';

  schedules.then((schedule) => {
    titlesCount(schedule.length);
    schedule.forEach((item) => {
      // eslint-disable-next-line no-underscore-dangle
      const info = item._embedded;
      const image = info.show.image === null ? myImage.src : info.show.image.medium;
      container += `<div class="col-md-2 col-sm-12">
                        <div class="card shadow-sm">
                            <img src="${image}" alt="${info.show.name}">
                            <div class="card-body">
                                <p class="text-sm">${trimTitle(
    info.show.name,
  )}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                <div id="maincontent">
                                  <button type="button" class="btn btn-sm btn-outline-secondary show-details" data-id="${
  info.show.id
}">Details</button>
                                </div>
                                    <small class="text-muted likes"><i class="fas fa-heart like" data-id="${
  info.show.id
}"></i> <span id="title-like-${
  info.show.id
}">0</span></small>
                                    <small class="text-muted"><i class="fas fa-comment comment-counter" data-id="${
  info.show.id
}"></i> <span id="comment-size-${
  info.show.id
}">0</span></small> 
                                </div>
                            </div>
                        </div>
                    </div>`;

      // numberOfLikes(info.show.id);
    });
    moviesContainer.innerHTML = container;
    diplayLikes();
    displaycommentsPopup();
    recordLikeInteraction();
  });
};

// const numberOfLikes = (id) => {};
displaycommentsPopup();
displaySchedules();

export default displayTitleCount();