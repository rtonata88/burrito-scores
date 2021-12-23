// import noImage from "./assets/no_image.png";
import * as bootstrap from 'bootstrap';
import { getMovieInformation } from './schedule.js';
// import { getComments, recordComment } from "./involvement.js";

const displaycommentsPopup = () => {
  const showDetails = document.querySelectorAll('.show-details');
  const modal = new bootstrap.Modal(document.getElementById('myModal'));

  showDetails.forEach((detail) => {
    detail.addEventListener('click', (e) => {
      const movieId = e.target.dataset.id;
      const movieInformation = getMovieInformation(movieId);
      movieInformation.then((info) => {
        console.log(info);
        const movieContainer = document.getElementById('movieContainer');
        const movieHtmlContent = ` <section class="row">
                                      <h3>${info.name}</h3>
                                    <section class="col-md-4">
                                        <img src="${info.image.original}" alt="${info.image}" width="300px" class="img-fluid">
                                    </section>
                                    <section class="col-md-8">
                                    <div class="mb-3">
                                      <input type="text" class="form-control" id="username" placeholder="Your name">
                                    </div>
                                    <div class="mb-3">
                                      <textarea class="form-control" id="comment" rows="3" placeholder="Type your commet here"></textarea>
                                    </div>
                                    <div class="mt-3">
                                      <buttton class="btn btn-dark">Submit</button>
                                    </div>
                                    </section>
                                </section>`;

        movieContainer.innerHTML = movieHtmlContent;
      });

      modal.show();
    });
  });

  // const myImage = new Image();
  // // eslint-disable-next-line camelcase
  // myImage.src = noImage;
  // let container = "";
  // schedules.then((schedule) => {
  //   schedule.forEach((item) => {
  //     // eslint-disable-next-line no-underscore-dangle
  //     const info = item._embedded;
  //     // const image = info.show.image === null ? myImage.src : info.show.image.medium;
  //     container += `
  //   <h3 class="m-3 comment-count"></h3>
  //   <p class="text-sm">${trimTitle(info.show.name)}</p>
  //   <div class="d-flex justify-content-center align-items-center">
  //     <ul id="list-comment" class="list-unstyled">
  //     </ul>
  //   </div>
  //   <h3 class="m-3">Add a comment</h3>
  //   <form autocomplete="off" class="w-50 mx-auto">
  //     <input data-id="${info.show.id}"
  // eslint-disable-next-line max-len
  //      type="text" class="form-control w-75 mx-auto mb-2" id="username" placeholder="Your username">
  //     <textarea id="comment" name="comment" placeholder="Your comment..."></textarea>
  //     <button type="button" class="btn btn-secondary commentBtn">Comment</button>
  //   </form> `;
  //   });

  //   document.querySelector(".popupcontent").innerHTML = container;
  //   getComments();
  //   const comments = document.querySelector(".commentBtn");

  //   comments.addEventListener("click", (e) => {
  //     //   recordComment(
  //     //     JSON.stringify({
  //     //       item_id: e.target.dataset.id,
  //     //       username: 'Manuel Aldaraca',
  //     //       comments: 'Hello  There!',
  //     //     }),
  //     //   );
  //     const username = document.querySelector("#username").value;
  //     const comment = document.querySelector("#comment").value;
  //     const newData = {
  //       item_id: 123,
  //       username,
  //       comment,
  //     };
  //     recordComment(newData);
  //   });
  // });
};

export default displaycommentsPopup;
