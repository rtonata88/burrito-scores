import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./style.css";
import no_image from "../src/assets/no_image.png";
import "@fortawesome/fontawesome-free/css/all.css";
import getSchedules from "./schedule.js";

const schedules = getSchedules();
const trimTitle = (title) => title.substring(0, 16);
const displaySchedules = () => {
  const myImage = new Image();
  myImage.src = no_image;
  console.log(no_image);
  const moviesContainer = document.getElementById("movies-container");
  let container = "";
  schedules.then((schedule) => {
    schedule.forEach((item) => {
      console.log(item);
      // eslint-disable-next-line no-underscore-dangle
      const info = item._embedded;
      let image =
        info.show.image === null ? myImage.src : info.show.image.medium;
      container += `<div class="col-md-2 col-sm-12">
                        <div class="card shadow-sm">
                            <img src="${image}" alt="${info.show.name}">
                            <div class="card-body">
                                <p class="text-sm">${trimTitle(
                                  info.show.name
                                )}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <small class="text-muted">9 comments</small>
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
