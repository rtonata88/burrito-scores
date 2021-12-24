// import noImage from "./assets/no_image.png";
import * as bootstrap from "bootstrap";
import { getMovieInformation } from "./schedule.js";
import { recordComment } from "./involvement.js";

const saveComment = () => {
  const comments = document.querySelector(".commentBtn");
  comments.addEventListener("click", (e) => {
    const username = document.querySelector("#username").value;
    const comment = document.querySelector("#comment").value;
    recordComment(
      JSON.stringify({
        item_id: e.target.dataset.id,
        username,
        comment,
      })
    );
  });
};

const displaycommentsPopup = () => {
  const showDetails = document.querySelectorAll(".show-details");
  const modal = new bootstrap.Modal(document.getElementById("myModal"));

  showDetails.forEach((detail) => {
    detail.addEventListener("click", (e) => {
      const movieId = e.target.dataset.id;
      const movieInformation = getMovieInformation(movieId);
      movieInformation.then((info) => {
        //console.log(info);
        const movieContainer = document.getElementById("movieContainer");
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
                                      <buttton class="btn btn-dark commentBtn" data-id="${info.id}">Submit</button>
                                    </div>
                                    </section>
                                </section>`;

        movieContainer.innerHTML = movieHtmlContent;
        saveComment();
      });
      modal.show();
    });
  });
};

export default displaycommentsPopup;
