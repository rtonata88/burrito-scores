import * as bootstrap from 'bootstrap';
import { getMovieInformation } from './schedule.js';
import { recordComment, getComments } from './involvement.js';
import noImage from './assets/no_image.png';

const displayComments = (movieId) => {
  getComments(movieId).then((comments) => {
    const commentrow = document.getElementById('comment-row');
    if (!comments.length) comments = [];
    const Mylength = comments.length;
    const h3 = document.createElement('h3');
    h3.innerHTML += `
    <h3>Comments: ${Mylength}</h3>
    `;
    commentrow.appendChild(h3);
    comments.forEach((comment) => {
      const pContent = document.createElement('p');
      pContent.classList.add('col-md-8');
      pContent.innerHTML += `
      <i class="fas fa-calendar"></i>  ${comment.creation_date}
      <i class="fas fa-user"></i><b> ${comment.username}</b>
        : ${comment.comment}
          ${comment.comment.length}
        `;
      commentrow.appendChild(pContent);
    });
  });
};

const saveComment = () => {
  const comments = document.querySelector('.commentBtn');
  comments.addEventListener('click', (e) => {
    const username = document.querySelector('#username').value;
    const comment = document.querySelector('#comment').value;
    recordComment(
      JSON.stringify({
        item_id: e.target.dataset.id,
        username,
        comment,
      }),
    );
    document.querySelector('#username').value = '';
    document.querySelector('#comment').value = '';
  });
};

const displaycommentsPopup = () => {
  const showDetails = document.querySelectorAll('.show-details');
  const modal = new bootstrap.Modal(document.getElementById('myModal'));
  const myImage = new Image();
  myImage.src = noImage;

  showDetails.forEach((detail) => {
    detail.addEventListener('click', (e) => {
      const movieId = e.target.dataset.id;
      const movieInformation = getMovieInformation(movieId);
      movieInformation.then((info) => {
        const image = info.image.original === null ? myImage.src : info.image.original;
        const movieContainer = document.getElementById('movieContainer');
        const movieHtmlContent = `
                                <section class="row">
                                  <h3>${info.name}:
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i> 
                                    <i class="far fa-star"></i>
                                  </h3>
                                    <section class="col-md-4">
                                      <img src="${image}" alt="${info.image}" width="300px" class="img-fluid">
                                    </section>
                                    <section class="col-md-8">
                                  <table class="table">
                                      <thead>
                                        <tr>
                                          <th scope="col">About: </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <th scope="row">Premiered : </th>
                                          <td>${info.premiered}</td>
                                        </tr>
                                        <tr class="table-light">
                                          <th scope="row">Languages : </th>
                                          <td>${info.language}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">Schedule : </th>
                                          <td>${info.schedule.days}</td>
                                        </tr>
                                        <tr class="table-light">
                                          <th scope="row">Status : </th>
                                          <td>${info.status}</td>
                                        </tr>
                                      </tbody>
                                  </table>
                                  <h3>Summary : </h3>
                                  <p>${info.summary}</p>
                                    </section>
                                </section>
                                <section class="row mt-3">
                                    <section class="col-md-4">
                                    <h3>Leave a comment!</h3>
                                      <div class="mb-3">
                                        <input type="text" class="form-control" id="username" placeholder="Your name">
                                      </div>
                                      <div class="mb-3">
                                        <textarea class="form-control" id="comment" rows="3" placeholder="Type your commet here"></textarea>
                                      </div>
                                      <div class="mt-3">
                                        <buttton class="btn btn-dark commentBtn" data-id="${info.id}">Submit</button>
                                      </div>
                                    </section>
                                    <section class="col-md-8" id="comment-row">
                                    </section>
                                </section>`;

        movieContainer.innerHTML = movieHtmlContent;
        saveComment();
      });
      modal.show();
      displayComments(movieId);
    });
  });
};

export default displaycommentsPopup;
