import noImage from './assets/no_image.png';
import getSchedules from './schedule.js';
import { getComments, recordComment } from './involvement.js';

const schedules = getSchedules();
const trimTitle = (title) => title.substring(0, 16);
const displaycommentsPopup = () => {
  const myImage = new Image();
  // eslint-disable-next-line camelcase
  myImage.src = noImage;
  let container = '';
  schedules.then((schedule) => {
    schedule.forEach((item) => {
      // eslint-disable-next-line no-underscore-dangle
      const info = item._embedded;
      // const image = info.show.image === null ? myImage.src : info.show.image.medium;
      container += `
    <h3 class="m-3 comment-count"></h3>
    <p class="text-sm">${trimTitle(info.show.name)}</p>
    <div class="d-flex justify-content-center align-items-center">
      <ul id="list-comment" class="list-unstyled">
      </ul>
    </div>
    <h3 class="m-3">Add a comment</h3>
    <form autocomplete="off" class="w-50 mx-auto">
      <input data-id="${info.show.id}"
       type="text" class="form-control w-75 mx-auto mb-2" id="username" placeholder="Your username">
      <textarea id="comment" name="comment" placeholder="Your comment..."></textarea>
      <button type="button" class="btn btn-secondary commentBtn">Comment</button>
    </form> `;
    });

    document.querySelector('.popupcontent').innerHTML = container;
    getComments();
    const comments = document.querySelector('.commentBtn');

    comments.addEventListener('click', (e) => {
    //   recordComment(
    //     JSON.stringify({
    //       item_id: e.target.dataset.id,
    //       username: 'Manuel Aldaraca',
    //       comments: 'Hello  There!',
    //     }),
    //   );
      const username = document.querySelector('#user').value;
      const comment = document.querySelector('#comment').value;
      const newData = {
        item_id: e.target.dataset.id,
        username,
        comment,
      };
      recordComment(newData);
      document.querySelector('#user').value = '';
      document.querySelector('#comment').value = '';
    });
  });
};

export default displaycommentsPopup;