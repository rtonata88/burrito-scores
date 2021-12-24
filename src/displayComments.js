import * as bootstrap from "bootstrap";
import { getMovieInformation } from "./schedule.js";
import { recordComment, getComments } from "./involvement.js";
import noImage from "./assets/no_image.png";

const displayCommentsCount = (count) => {
  const commentsCountContainer = document.getElementById("comments-count");
  commentsCountContainer.innerHTML = count;
};

const commentsCount = (count) => {
  if (count > 0) {
    displayCommentsCount(count);
  } else {
    const commentsCountContainer = document.getElementById("comments-count");
    commentsCountContainer.innerHTML = 0;
  }
  return count;
};

const displayComments = (movieId) => {
  getComments(movieId).then((comments) => {
    commentsCount(comments.length);
    let commentsContainer = document.getElementById("comments-container");
    commentsContainer.innerHTML = "";
    let commentsContent = "";

    if (comments.length > 0) {
      comments.forEach((comment) => {
        commentsContent += `<p>
                            ${comment.comment}
                            <figcaption class="blockquote-footer">
                              <em><strong>${comment.username}</strong> on </em><cite>${comment.creation_date}</cite>
                            </figcaption>
                            <hr>
                          </p>`;
      });
      commentsContainer.innerHTML = commentsContent;
    } else {
      commentsContainer.innerHTML = "<em>No comments</em>";
    }
  });
};

const saveComment = () => {
  const comments = document.querySelector(".commentBtn");
  comments.addEventListener("click", (e) => {
    const username = document.querySelector("#username").value;
    const comment = document.querySelector("#comment").value;

    if (/\w/.test(username) && /\w/.test(comment)) {
      recordComment(
        JSON.stringify({
          item_id: e.target.dataset.id,
          username,
          comment,
        })
      );
      const commentSuccessMessage = document.getElementById(
        "comment-success-message"
      );
      const commentsCountContainer = document.getElementById("comments-count");
      let numberOfComments = parseInt(commentsCountContainer.innerHTML, 10);
      numberOfComments++;
      commentsCountContainer.innerHTML = numberOfComments;

      commentSuccessMessage.classList.remove("d-none");
      document.querySelector("#username").value = "";
      document.querySelector("#comment").value = "";

      const today = new Date();
      const date = `${today.getFullYear()}-${
        today.getMonth() + 1
      }-${today.getDate()}`;

      var newComment = document.createElement("p");
      newComment.innerHTML = `<p>
                            ${comment}
                            <figcaption class="blockquote-footer">
                              <em><strong>${username}</strong> on </em><cite>${date}</cite>
                            </figcaption>
                            <hr>
                          </p>`;
      let commentsContainer = document.getElementById("comments-container");
      commentsContainer.appendChild(newComment);
    } else {
      const commentErrorMessage = document.getElementById(
        "comment-error-message"
      );
      commentErrorMessage.classList.remove("d-none");
    }
  });
};

const displaycommentsPopup = () => {
  const showDetails = document.querySelectorAll(".show-details");
  const modal = new bootstrap.Modal(document.getElementById("myModal"));
  const myImage = new Image();
  myImage.src = noImage;

  showDetails.forEach((detail) => {
    detail.addEventListener("click", (e) => {
      const movieId = e.target.dataset.id;
      const movieInformation = getMovieInformation(movieId);
      const movieInfoContainer = document.getElementById("movie-info");
      movieInfoContainer.innerHTML = "";

      const movieTitle = document.getElementById("movie-title");
      movieTitle.innerHTML = "";

      const movieCoverImage = document.getElementById("movie-cover-image");
      movieCoverImage.innerHTML = "";

      const commentsForm = document.getElementById("comments-form");
      commentsForm.innerHTML = "";

      movieInformation.then((info) => {
        const image = info.image === null ? myImage.src : info.image.original;
        const coverImageContent = `<img src="${image}" alt="${info.name}" class="rounded img-fluid"></img>`;
        const movieInfoContent = `<p><small>${info.summary}</small></p>
                                  <hr>
                                    <dl class="row">
                                      <dt class="col-sm-3">Name:</dt>
                                      <dd class="col-sm-9">${info.name}</dd>

                                      <dt class="col-sm-3">Language:</dt>
                                      <dd class="col-sm-9">${info.language}</dd>

                                      <dt class="col-sm-3">Premiered:</dt>
                                      <dd class="col-sm-9">${info.premiered}</dd>

                                      <dt class="col-sm-3">Status:</dt>
                                      <dd class="col-sm-9">${info.status}</dd>
                                      <dt class="col-sm-3">Website:</dt>
                                      <dd class="col-sm-9"><a href="${info.url}" target="__blank" >${info.url}</a></dd>
                                    </dl>`;

        const commentsFormContent = `<h6>Leave a comment</h6>
                                        <div class="mb-3">
                                          <input type="text" class="form-control rounded" id="username" placeholder="Your name">
                                        </div>
                                        <div class="mb-3">
                                          <textarea class="form-control" id="comment" rows="3" placeholder="Type your commet here"></textarea>
                                        </div>
                                        <div class="mt-3">
                                          <buttton class="btn btn-dark commentBtn" data-id="${info.id}">Submit</button>
                                        </div>`;

        movieTitle.innerHTML = `<h6><strong>${info.name}</strong></h6>`;
        movieCoverImage.innerHTML = coverImageContent;
        movieInfoContainer.innerHTML = movieInfoContent;
        commentsForm.innerHTML = commentsFormContent;
        saveComment();
      });

      modal.show();
      displayComments(movieId);

      const commentSuccessMessage = document.getElementById(
        "comment-success-message"
      );
      commentSuccessMessage.classList.add("d-none");
      const commentErrorMessage = document.getElementById(
        "comment-error-message"
      );
      commentErrorMessage.classList.add("d-none");
    });
  });
};

export default displaycommentsPopup;
