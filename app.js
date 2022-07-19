//Get all fields and form

const countForm = document.getElementById("countForm");
const days = document.querySelector(".days h2");
const hours = document.querySelector(".hours h2");
const mins = document.querySelector(".mins h2");
const secs = document.querySelector(".secs h2");
const alarm = document.querySelector(".alarm");
const alarm2 = document.querySelector(".alarm2");
const alarm3 = document.querySelector(".alarm3");

//Submit Form

countForm.onsubmit = (e) => {
  e.preventDefault();

  //get form value
  const formData = new FormData(e.target);
  const { date, time } = Object.fromEntries(formData.entries());

  //Form Validation
  if (!date || !time) {
    alert("All fields are required!");
  } else {
    let count = setInterval(() => {
      //Get timestamp
      let startTime = Date.now();
      let endTime = new Date(date + " " + time);
      let orderTime = Math.floor(Math.abs(endTime.getTime() - startTime));

      //Get Value form time
      let totalSec = Math.floor(orderTime / 1000);
      let totalMin = Math.floor(totalSec / 60);
      let totalHour = Math.floor(totalMin / 60);
      let totalDay = Math.floor(totalHour / 24);

      //Get Indivisual time
      let hour = totalHour - totalDay * 24;
      let min = totalMin - totalDay * 24 * 60 - hour * 60;
      let sec = totalSec - totalDay * 24 * 60 * 60 - hour * 60 * 60 - min * 60;

      if (totalDay <= 9) {
        totalDay = "0" + totalDay;
      }
      if (hour <= 9) {
        hour = "0" + hour;
      }
      if (min <= 9) {
        min = "0" + min;
      }
      if (sec <= 9) {
        sec = "0" + sec;
      }

      if (totalSec <= 0) {
        clearInterval(count);
        alarm.play();
      }

      days.innerHTML = `${totalDay}`;
      hours.innerHTML = `${hour}`;
      mins.innerHTML = `${min}`;
      secs.innerHTML = `${sec}`;
    });
  }
};
