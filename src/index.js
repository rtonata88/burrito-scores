import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import { getSchedules } from "./schedule";
const schedules = getSchedules();
const displaySchedules = () => {
  //const table = document.getElementById("table-scores");
  schedules.then((schedule) => {
    schedule.forEach((item) => {
      let info = item._embedded;
      console.log(info.show.name);
      console.log(info.show.id);
      numberOfLikes(info.show.id);
    });
    //table.innerHTML = tableScoreRow;
  });
};

const numberOfLikes = (id) => {};

displaySchedules();
