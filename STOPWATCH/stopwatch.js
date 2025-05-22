let waktu = 0, interval;
    function mulai() {
      if (!interval) {
        interval = setInterval(() => {
          waktu += 0.01;
          document.getElementById("display").textContent = waktu.toFixed(2);
        }, 10);
      }
    }
    function pause() {
      clearInterval(interval);
      interval = null;
    }
    function reset() {
      pause();
      waktu = 0;
      document.getElementById("display").textContent = "0.00";
    }