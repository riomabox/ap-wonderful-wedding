import "../css/style.css";
import javascriptLogo from "../../assets/icons/javascript.svg";
import viteLogo from "../../assets/icons/vite.svg";
import { setupCounter } from "./counter.js";
import { Loader } from "@googlemaps/js-api-loader";


const root = document.getElementsByTagName("html")[0];
root.setAttribute('class', 'bg-primary-SageBase')

const audio = (() => {
  let instance = null;

  let createOrGet = () => {
    if (instance instanceof HTMLAudioElement) {
      return instance;
    }

    instance = new Audio();
    instance.autoplay = true;
    instance.src = document
      .getElementById("sound-button")
      .getAttribute("data-url");
    instance.load();
    instance.currentTime = 0;
    instance.volume = 1;
    instance.muted = false;
    instance.loop = true;

    return instance;
  };

  return {
    play: () => {
      createOrGet().play();
    },
    pause: () => {
      createOrGet().pause();
    },
  };
})();

const escapeHtml = (unsafe) => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

/*---- Make Side Menu Div to controlable ----*/
var sideMenu = document.getElementById("side-menu");
/*---- Make Hamburger Button to controlable ----*/
var hamburgerBtn = document.getElementById("hamburger-button");
/*---- Make Sound Button to controlable ----*/
var soundBtn = document.getElementById("sound-button");
/*---- Handler for Open Side Menu with change right property to 0 ----*/
var overlay = document.getElementById("overlay");
function sideMenuHandler() {
  /*---- If Side Menu Div invisible ----*/
  if (sideMenu.classList.contains("right-[-75vw]")) {
    sideMenu.classList.remove("right-[-75vw]");
    sideMenu.classList.add("right-0");
    hamburgerBtn.innerHTML = "<i class='fa-solid fa-x'></i>";
    overlay.style.display = "block";
  } else {
    sideMenu.classList.remove("right-0");
    sideMenu.classList.add("right-[-75vw]");
    hamburgerBtn.innerHTML = "<i class='fa-solid fa-bars'></i>";
    overlay.style.display = "none";
  }
}
window.sideMenuHandler = sideMenuHandler;
/*---- Handler for play backsongs ----*/
function backsongsHandler(btn) {
  /*---- If backsongs is not played ----*/
  if (btn.getAttribute("data-status").toString() != "true") {
    btn.setAttribute("data-status", "true");
    audio.play();
    btn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
  } else {
    btn.setAttribute("data-status", "false");
    audio.pause();
    btn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
  }
}
window.backsongsHandler = backsongsHandler;
/*---- Handler for Close Side Menu with change right property to -250px ----*/
function closeMenu() {
  sideMenu.classList.remove("right-0");
  sideMenu.classList.add("right-[-75vw]");
  overlay.style.display = "none";
  if ((hamburgerBtn.innerHTML = "<i class='fa-solid fa-bars'></i>")) {
    hamburgerBtn.innerHTML = "<i class='fa-solid fa-bars'></i>";
  }
}
window.closeMenu = closeMenu;

const bukaUndangan = async () => {
  const body = document.getElementsByTagName("BODY")[0];
  const modalHomepage = document.getElementById("dialog");
  const hamburgerBtn = document.getElementById("hamburger-button");
  const soundBtn = document.getElementById("sound-button");
  document.getElementById("open-invitation-button").disabled = true;
  const undanganTitle = document.getElementById("undangan-title");
  const namaTitle = document.getElementById("nama-title");
  const tanggalTitle = document.getElementById("tanggal-title");
  document.getElementById("open-invitation-img").src =
    "assets/icons/loading-spinner.svg";
  document.getElementById("open-invitation-img").classList.add("animate-spin");

  const BukaUndanganClicked = () => {
    body.classList.remove("overflow-hidden");
    document.getElementById("loadPage").classList.add("hidden");
    modalHomepage.classList.add("top-[-100vh]");
    hamburgerBtn.classList.remove("hidden");
    soundBtn.classList.remove("hidden");
    undanganTitle.classList.add(
      "animate-fade-up",
      "animate-duration-1000",
      "animate-once",
    );
    namaTitle.classList.add(
      "animate-fade-up",
      "animate-duration-1000",
      "animate-once",
      "animate-delay-[700ms]",
    );
    tanggalTitle.classList.add(
      "animate-fade-up",
      "animate-duration-1000",
      "animate-once",
      "animate-delay-[1400ms]",
    );
    audio.play();
  };

  setTimeout(BukaUndanganClicked, 3000);
  // document.getElementById('tombol-musik').style.display = 'block';
  // audio.play();
  // AOS.init();
  // await login();
  // timer();


  
  const timer = () => {
    let weddingDate = document
      .getElementById("countdown")
      .getAttribute("data-waktu");
    let countdownDate = new Date(weddingDate).getTime();
    let time = null;
    let distance = null;

    time = setInterval(() => {
      distance = countdownDate - new Date().getTime();

      if (distance < 0) {
        clearInterval(time);
        time = null;
        return true;
      }

      document.getElementById("hari").innerHTML = Math.floor(
        distance / (1000 * 60 * 60 * 24),
      );
      document.getElementById("jam").innerHTML = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      document.getElementById("menit").innerHTML = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60),
      );
      document.getElementById("detik").innerHTML = Math.floor(
        (distance % (1000 * 60)) / 1000,
      );
    }, 1000);
  };

  timer();
};
window.bukaUndangan = bukaUndangan;

const copyText = (button) => {
  // const dataAccount = button.getAttribute("data-account");
  const dataAccount = button.getAttribute("data-account");
  navigator.clipboard.writeText(dataAccount);
  let buttonText = button.innerHTML;
  button.innerHTML = `Tersalin`;
  button.disabled = true;

  setTimeout(()=>{
    button.innerHTML = buttonText;
    button.disabled = false;
    button.focus();
  }, 1500);
}
window.copyText = copyText;




let kehadiran = document.getElementById("kehadiran");
let nama = document.getElementById("nama");
let jumlahOrang = document.getElementById("jml-orang");
let ucapan = document.getElementById("ucapan");

const sendWish = () => {
  if(nama.value.length === 0) {
    alert("Namanya diisi dulu yaa");
  } else if (nama.value.length >= 50) {
    alert("Namanya kepanjangan ih");
  }

  if(kehadiran.value === 'not-selected') {
    alert("Silahkan isi kehadiran");
  } 

  if(jumlahOrang.value.length === 0) {
    alert("Silahkan isi jumlah kehadiran");
  } else if(jumlahOrang.value >= 10) {
    alert("Mohon maaf, jumlah kehadiran tidak boleh lebih dari 5 orang")
  }

  if(ucapan.value.length === 0) {
    alert("Silahkan isi ucapan dan doa");
  }
}
window.sendWish = sendWish;


const enableGuestNum = () => {
    if(kehadiran.value === 'present') {
      jumlahOrang.disabled = false;
      jumlahOrang.style.borderColor = '#B49349'
    } else {
      jumlahOrang.disabled = true;
      jumlahOrang.style.borderColor = '#B8B2A4'
      
    }
}
window.enableGuestNum = enableGuestNum;



const loader = new Loader({
  apiKey: import.meta.env.VITE_API_KEY_GMAPS,
  version: "weekly",
  libraries: ["places"],
});

const mapOptions = {
  center: {
    lat: -6.996647007867606,
    lng: 110.41536337897409,
  },
  zoom: 18,
  mapId: "4504f8b37365c3d0",
};

loader
  .importLibrary("maps")
  .then(async ({ Map }) => {
    const map = new Map(document.getElementById("map"), mapOptions);
    const { AdvancedMarkerElement } = await loader.importLibrary("marker");
    new AdvancedMarkerElement({ map, position: mapOptions.center });
  })
  .catch((e) => {
    // do something
  });

  const progressBar = (() => {
    let bar = document.getElementById("bar");
    let second = 0;
    let counter = 0;
    let stop = false;
  
    const sleep = (until) =>
      new Promise((p) => {
        setTimeout(p, until);
      });
  
    const setNum = (num) => {
      bar.style.width = num + "%";
      // bar.innerText = num + "%";
  
      return num == 100 || stop;
    };
  
    (async () => {
      while (true) {
        if (stop || setNum(counter)) {
          break;
        }
  
        await sleep(second);
        second += counter * counter;
        counter += 1;
      }
    })();
  
    return {
      stop: () => {
        stop = true;
        setNum(100.0);
      },
    };
  })();
  
  const opacity = () => {
    let modal = new Promise((res) => {
      let clear = null;
      clear = setInterval(() => {
        if (document.getElementById("dialog").classList.contains("fixed")) {
          clearInterval(clear);
          res();
        }
      }, 100);
    });
  
    modal.then(() => {
      progressBar.stop();
  
      let op = parseInt(document.getElementById("loadPage").style.opacity);
      let clear = null;
  
      clear = setInterval(() => {
        if (op >= 0) {
          op -= 0.025;
          document.getElementById("loadPage").style.opacity = op;
        } else {
          clearInterval(clear);
          // document.getElementById("loadPage").remove();
          // document.getElementById("dialog").classList.add("animate-fade");
        }
      }, 10);
    });
  };
  
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
    if (document.getElementById("loadPage").classList.contains("hidden")) {
      document.getElementById("loadPage").classList.remove("hidden");
    }
  };
  
  window.addEventListener(
    "load",
    async () => {
      let modal = document.getElementById("dialog");
      let name = new URLSearchParams(window.location.search).get("to") ?? "";
  
      if (name.length == 0) {
        document.getElementById("tujuan-tamu").remove();
      } else {
        let namaTamu = document.getElementById("nama-tamu");
        namaTamu.innerText = escapeHtml(name);
        // document.getElementById("formnama").value = name;
      }
  
      setInterval(() => {
        if (modal.classList.contains("hidden")) {
          modal.classList.replace("hidden", "fixed");
        }
      }, 2000);
      opacity();
    },
    false,
  );