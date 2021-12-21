import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import { getSchedules } from "./schedule";

const schedules = getSchedules();
const trimTitle = (title) => {
  return title.substring(0, 16);
};
const displaySchedules = () => {
  const moviesContainer = document.getElementById("movies-container");
  let container = "";
  schedules.then((schedule) => {
    schedule.forEach((item) => {
      let info = item._embedded;
      console.log(info.show.image);
      container += `<div class="col-md-2 col-sm-12">
                        <div class="card shadow-sm">
                            <img src="${info.show.image.medium}" alt="${
        info.show.name
      }">
                            <div class="card-body">
                                <p class="text-sm">${trimTitle(
                                  info.show.name
                                )}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Comment</button>
                                    <small class="text-muted">9 likes</small>
                                </div>
                            </div>
                        </div>
                    </div>`;

      numberOfLikes(info.show.id);
    });
    moviesContainer.innerHTML = container;
  });
};

const numberOfLikes = (id) => {};

displaySchedules();
