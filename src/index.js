import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import { getSchedule } from "./schedule";

const displaySchedules = () => {
  const schedules = getSchedule();
  //const table = document.getElementById("table-scores");
  schedules.then((schedule) => {
    schedule.forEach((item) => {
      let info = item._embedded;
      console.log(info.show.name);
      console.log(info.show.id);
    });
    //table.innerHTML = tableScoreRow;
  });
};

displaySchedules();
