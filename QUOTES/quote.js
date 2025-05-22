const quotes = [
      "Jangan menyerah.",
      "Terus belajar.",
      "Percaya diri itu penting.",
      "Sukses adalah hasil kerja keras."
    ];

    function generate() {
      const random = Math.floor(Math.random() * quotes.length);
      document.getElementById("quote").textContent = quotes[random];
    }

    generate(); // tampilkan saat halaman dibuka