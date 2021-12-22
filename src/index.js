import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import getSchedules from './schedule.js';

const schedules = getSchedules();
const trimTitle = (title) => title.substring(0, 16);
const displaySchedules = () => {
  const moviesContainer = document.getElementById('movies-container');
  let container = '';
  schedules.then((schedule) => {
    schedule.forEach((item) => {
      // eslint-disable-next-line no-underscore-dangle
      const info = item._embedded;
      // console.log(info.show.image);
      container += `<div class="col-md-2 col-sm-12">
                        <div class="card shadow-sm">
                            <img src="${info.show.image.medium}" alt="${info.show.name}">
                            <div class="card-body">
                                <p class="text-sm">${trimTitle(info.show.name)}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <button type="button" id="demo" class="btn btn-sm btn-outline-secondary">Comments</button>
                                    <small class="text-muted">9 likes</small>
                                </div>
                            </div>
                        </div>
                    </div>`;

      // numberOfLikes(info.show.id);
    });
    moviesContainer.innerHTML = container;
  });
};

// const numberOfLikes = (id) => {};

displaySchedules();

const CommentsForm = document.getElementById('CommentsForm');
function openForm() {
  CommentsForm.style.display = 'block';
}

function closeForm() {
  CommentsForm.style.display = 'none';
}

document.getElementById('Com-btn').addEventListener('click', openForm);
document.getElementById('cancel').addEventListener('click', closeForm);
