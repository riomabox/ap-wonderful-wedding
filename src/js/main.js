import "../css/style.css";
import javascriptLogo from "../../assets/icons/javascript.svg";
import viteLogo from "../../assets/icons/vite.svg";
import { setupCounter } from "./counter.js";
import { Loader } from "@googlemaps/js-api-loader";

const root = document.getElementsByTagName("html")[0];
root.setAttribute("class", "bg-primary-SageBase");

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

  const BukaUndanganClicked = async () => {
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
    await login();
    comment.reset();
  };

  setTimeout(BukaUndanganClicked, 1500);
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

  setTimeout(() => {
    button.innerHTML = buttonText;
    button.disabled = false;
    button.focus();
  }, 1500);
};
window.copyText = copyText;

// const enableGuestNum = () => {
//   if (kehadiran.value === "present") {
//     jumlahOrang.disabled = false;
//     jumlahOrang.style.borderColor = "#B49349";
//   } else {
//     jumlahOrang.disabled = true;
//     jumlahOrang.style.borderColor = "#B8B2A4";
//   }
// };
// window.enableGuestNum = enableGuestNum;

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

const pagination = (() => {
  const perPage = 10;
  let pageNow = 0;
  let resultData = 0;

  let page = document.getElementById("page");
  let prev = document.getElementById("sebelumnya");
  let next = document.getElementById("selanjutnya");

  let disabledPrevious = () => {
    prev.disabled = true;
  };

  let disabledNext = () => {
    next.disabled = true;
  };

  let buttonAction = async (button) => {
    let tmp = button.innerHTML;
    button.disabled = true;
    button.innerHTML = `<span class="spinner-border spinner-border-sm me-1"></span>Loading...`;
    await comment.ucapan();
    document.getElementById("wishes").scrollIntoView({ behavior: "smooth" });
    if (resultData < perPage || pageNow < 0) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
    // button.disabled = false;
    button.innerHTML = tmp;
  };

  return {
    getPer: () => {
      return perPage;
    },
    getNext: () => {
      return pageNow;
    },
    reset: async () => {
      pageNow = 0;
      resultData = 0;
      page.innerText = 1;
      next.disabled = false;
      await comment.ucapan();
      disabledPrevious();
    },
    setResultData: (len) => {
      resultData = len;
      if (resultData < perPage) {
        disabledNext();
      }
    },
    previous: async (button) => {
      if (pageNow < 0) {
        disabledPrevious();
      } else {
        pageNow -= perPage;
        disabledNext();
        await buttonAction(button);
        let jumlahComment = await comment.numOfComment();
        page.innerText = `${parseInt(page.innerText) - 1} dari ${Math.ceil(
          jumlahComment / perPage,
        )}`;
        next.disabled = false;
        if (pageNow <= 0) {
          disabledPrevious();
        }
      }
    },
    next: async (button) => {
      if (resultData < perPage) {
        disabledNext();
      } else {
        pageNow += perPage;
        disabledPrevious();
        await buttonAction(button);
        let jumlahComment = await comment.numOfComment();
        page.innerText = `${parseInt(page.innerText) + 1} dari ${Math.ceil(
          jumlahComment / perPage,
        )}`;
        prev.disabled = false;
      }
    },
  };
})();
window.pagination = pagination;

const comment = (() => {
  const nama = document.getElementById("nama");
  const kehadiran = document.getElementById("kehadiran");
  const jumlahOrang = document.getElementById("jml-orang");
  const formUcapan = document.getElementById("form-ucapan");
  const submitWish = document.getElementById("submit-wish");
  // const balas = document.getElementById('balas');
  const batal = document.getElementById("batal");
  const sunting = document.getElementById("ubah");
  let tempID = null;

  // OK
  const resetForm = () => {
    submitWish.style.display = "block";
    kehadiran.style.display = "block";
    batal.style.display = "none";
    // balas.style.display = 'none';
    sunting.style.display = "none";
    jumlahOrang.style.display = "block";
    document.getElementById("label-konfirmasi").style.display = "block";
    document.getElementById("balasan").innerHTML = null;
    nama.value = null;
    kehadiran.value = "not-selected";
    jumlahOrang.value = null;
    formUcapan.value = null;
    nama.disabled = false;
    kehadiran.disabled = false;
    formUcapan.disabled = false;
  };

  const enableGuestNum = () => {
    if (kehadiran.value === "present") {
      jumlahOrang.disabled = false;
      jumlahOrang.style.borderColor = "#B49349";
    } else {
      jumlahOrang.disabled = true;
      jumlahOrang.style.borderColor = "#B8B2A4";
    }
  };

  // OK
  const sendWish = async () => {
    let flagForm = true;
    let token = localStorage.getItem("token") ?? "";

    if (token.length == 0) {
      alert("Terdapat kesalahan, token kosong !");
      window.location.reload();
      return;
    }

    if (nama.value.length === 0) {
      alert("Silahkan isi nama");
      flagForm = false;
      return;
    } else if (nama.value.length >= 50) {
      alert("Nama tidak boleh melebihi 50 karakter");
      flagForm = false;
      return;
    }

    if (kehadiran.value === "not-selected") {
      alert("Silahkan isi kehadiran");
      flagForm = false;
      return;
    }

    if (kehadiran.value === "absent") {
      jumlahOrang.value = null;
    }

    if (kehadiran.value === "present") {
      if (jumlahOrang.value.length === 0) {
        alert("Silahkan isi jumlah kehadiran");
        flagForm = false;
        return;
      } else if (jumlahOrang.value > 10) {
        alert("Mohon maaf, jumlah kehadiran tidak boleh lebih dari 10 orang");
        flagForm = false;
        return;
      }
    }

    if (formUcapan.value.length === 0) {
      alert("Silahkan isi ucapan dan doa");
      flagForm = false;
      return;
    }

    nama.disabled = true;
    kehadiran.disabled = true;
    jumlahOrang.disabled = true;
    formUcapan.disabled = true;
    submitWish.disabled = true;

    let tmp = submitWish.innerHTML;
    submitWish.innerHTML = `<span class="spinner-border spinner-border-sm me-1"></span>Loading...`;

    let isSuccess = false;

    if (flagForm === true) {
      await request("POST", "/api/comment")
        .token(token)
        .body({
          nama: nama.value,
          hadir: kehadiran.value == "present",
          komentar: formUcapan.value,
          jumlah: jumlahOrang.value,
        })
        .then((res) => {
          if (res.code == 201) {
            owns.set(res.data.uuid, res.data.own);
            isSuccess = true;
          }
        })
        .catch((err) => {
          alert(`Terdapat kesalahan: ${err}`);
        });
    } else {
      nama.disabled = false;
      kehadiran.disabled = false;
      jumlahOrang.disabled = false;
      formUcapan.disabled = false;
    }

    if (isSuccess) {
      await pagination.reset();
      document.getElementById("wishes").scrollIntoView({ behavior: "smooth" });
      resetForm();
    }
    submitWish.disabled = false;
    submitWish.innerHTML = tmp;
  };

  //COMMENTED, EDIT LATER
  // OK
  // const balasan = async (button) => {
  //     button.disabled = true;
  //     let tmp = button.innerText;
  //     button.innerText = 'Loading...';

  //     let id = button.getAttribute('data-uuid');
  //     let token = localStorage.getItem('token') ?? '';

  //     if (token.length == 0) {
  //         alert('Terdapat kesalahan, token kosong !');
  //         window.location.reload();
  //         return;
  //     }

  //     const BALAS = document.getElementById('balasan');
  //     BALAS.innerHTML = renderLoading(1);
  //     hadiran.style.display = 'none';
  //     document.getElementById('label-kehadiran').style.display = 'none';

  //     await request('GET', '/api/comment/' + id)
  //         .token(token)
  //         .then((res) => {
  //             if (res.code == 200) {
  //                 kirim.style.display = 'none';
  //                 batal.style.display = 'block';
  //                 balas.style.display = 'block';

  //                 tempID = id;

  //                 BALAS.innerHTML = `
  //                 <div class="my-3">
  //                     <label class="form-label">Balasan</label>
  //                     <div id="id-balasan" data-uuid="${id}" class="card-body bg-light shadow p-3 rounded-4">
  //                         <div class="d-flex flex-wrap justify-content-between align-items-center">
  //                             <p class="text-dark text-truncate m-0 p-0" style="font-size: 0.95rem;">
  //                                 <strong>${escapeHtml(res.data.nama)}</strong>
  //                             </p>
  //                             <small class="text-dark m-0 p-0" style="font-size: 0.75rem;">${res.data.created_at}</small>
  //                         </div>
  //                         <hr class="text-dark my-1">
  //                         <p class="text-dark m-0 p-0" style="white-space: pre-line">${escapeHtml(res.data.komentar)}</p>
  //                     </div>
  //                 </div>`;
  //             }
  //         })
  //         .catch((err) => {
  //             resetForm();
  //             alert(`Terdapat kesalahan: ${err}`);
  //         });

  //     document.getElementById('ucapan').scrollIntoView({ behavior: 'smooth' });
  //     button.disabled = false;
  //     button.innerText = tmp;
  // };

  // OK
  const innerComment = (data) => {
    return `
      <div class="flex items-center gap-1">
      ${
        owns.has(data.uuid)
          ? `
        <button
        id="ubah"
        data-uuid="${data.uuid}"
        data-parent="true"
        class="BodyBoldSmall inline-flex rounded-md  px-2 py-2 text-neutral-Black hover:bg-secondary-Brl-01"
        onclick="comment.edit(this)"
        >
          <i class="fa-solid fa-pen" style="color: #f2ae1c;"></i>
        </button>

        <button
        id="hapus"
        data-uuid="${data.uuid}"
        class="BodyBoldSmall inline-flex rounded-md px-2 py-2 text-neutral-Black hover:bg-secondary-Brl-01"
        onclick="comment.hapus(this)"
        >
          <i class="fa-solid fa-trash" style="color: #d31d1d; font-size: 14px"></i>
        </button>`
          : ""
      }
      </div>
      ${innerCard(data.comments)}`;
  };

  // OK
  const innerCard = (comment) => {
    let result = "";

    comment.forEach((data) => {
      result += `
          <div class="card-body border-start bg-light py-2 ps-2 pe-0 my-2 ms-2 me-0" id="${
            data.uuid
          }">
              <div class="d-flex flex-wrap justify-content-between align-items-center">
                  <p class="text-dark text-truncate m-0 p-0" style="font-size: 0.95rem;">
                      <strong>${escapeHtml(data.nama)}</strong>
                  </p>
                  <small class="text-dark m-0 p-0" style="font-size: 0.75rem;">${
                    data.created_at
                  }</small>
              </div>
              <hr class="text-dark my-1">
              <p class="text-dark mt-0 mb-1 mx-0 p-0" style="white-space: pre-line">${escapeHtml(
                data.komentar,
              )}</p>
              ${innerComment(data)}
          </div>`;
    });

    return result;
  };

  // OK
  const renderCard = (data) => {
    const DIV = document.createElement("div");
    DIV.classList.add("px-3");
    DIV.innerHTML = `
      <div
      class="taos:translate-y-[25px] taos:op acity-0 flex w-full max-w-107 flex-col items-start gap-4 rounded-4xl bg-neutral-White px-6 py-5 duration-[1000ms]"
      data-taos-offset="100" id="${data.uuid}" data-parent="true"
      >
        <div class="flex w-full items-center justify-between gap-16">
          <div class="flex items-center gap-2">
            <p class="BodyBold text-neutral-Black">${escapeHtml(data.nama)}</p>
            ${
              data.hadir
                ? '<img src="assets/icons/check.svg" alt="hadir" width="16px" />'
                : '<img src="assets/icons/delete.svg" alt="hadir" width="16px" />'
            }
          </div>
          <p class="BodyItalicSmall text-neutral-Black">${data.created_at}</p>
        </div>

        <div class="w-full">
          <p class="Body text-neutral-Black">
            ${escapeHtml(data.komentar)}
          </p>
        </div>
        ${innerComment(data)}
      </div>
`;
    return DIV;
  };

  // OK
  const ucapan = async () => {
    const pageNav = document.getElementById("page-navigation");
    const WISHES = document.getElementById("wishes");
    WISHES.innerHTML = renderLoading(pagination.getPer());

    let token = localStorage.getItem("token") ?? "";
    if (token.length == 0) {
      alert("Terdapat kesalahan, token kosong!");
      window.location.reload();
      return;
    }

    await request(
      "GET",
      `/api/comment?per=${pagination.getPer()}&next=${pagination.getNext()}`,
    )
      .token(token)
      .then((res) => {
        if (res.code == 200) {
          WISHES.innerHTML = null;
          res.data.forEach((data) => WISHES.appendChild(renderCard(data)));
          pagination.setResultData(res.data.length);
          pageNav.style.display = "flex";

          if (res.data.length == 0) {
            // WISHES.innerHTML = `<div class="h6 text-center">Tidak ada data</div>`;
            pageNav.style.display = "none";
          }
        }
      })
      .catch((err) => alert(`Terdapat kesalahan: ${err}`));

    let jumlahComment = await numOfComment();
    console.log(
      `data : ${
        pagination.getPer() + pagination.getNext()
      }, jumlah : ${jumlahComment}`,
    );
    if (pagination.getPer() + pagination.getNext() >= jumlahComment) {
      document.getElementById("selanjutnya").disabled = true;
    }

    let page = document.getElementById("page");
    page.innerText = `${parseInt(page.innerText)} dari ${Math.ceil(
      jumlahComment / pagination.getPer(),
    )}`;
  };

  const numOfComment = async () => {
    let token = localStorage.getItem("token") ?? "";
    let jumlah = 0;
    if (token.length == 0) {
      alert("Terdapat kesalahan, token kosong!");
      window.location.reload();
      return;
    }
    await request("GET", `/api/comment/count`)
      .token(token)
      .then((res) => {
        if (res.code == 200) {
          jumlah = res.data[0].jumlah;
        }
      })
      .catch((err) => alert(`Terdapat kesalahan: ${err}`));
    return jumlah;
  };

  // OK
  const renderLoading = (num) => {
    let result = "";

    for (let index = 0; index < num; index++) {
      result += `
          <div class="mb-3">
              <div class="card-body bg-light shadow p-3 m-0 rounded-4">
                  <div class="d-flex flex-wrap justify-content-between align-items-center placeholder-glow">
                      <span class="placeholder bg-secondary col-5"></span>
                      <span class="placeholder bg-secondary col-3"></span>
                  </div>
                  <hr class="text-dark my-1">
                  <p class="card-text placeholder-glow">
                      <span class="placeholder bg-secondary col-6"></span>
                      <span class="placeholder bg-secondary col-5"></span>
                      <span class="placeholder bg-secondary col-12"></span>
                  </p>
              </div>
          </div>`;
    }

    return result;
  };

  // OK
  // const reply = async () => {
  //     let nama = formnama.value;
  //     let komentar = formpesan.value;
  //     let token = localStorage.getItem('token') ?? '';
  //     let id = document.getElementById('id-balasan').getAttribute('data-uuid');

  //     if (token.length == 0) {
  //         alert('Terdapat kesalahan, token kosong !');
  //         window.location.reload();
  //         return;
  //     }

  //     if (nama.length == 0) {
  //         alert('nama tidak boleh kosong');
  //         return;
  //     }

  //     if (nama.length >= 35) {
  //         alert('panjangan nama maksimal 35');
  //         return;
  //     }

  //     if (komentar.length == 0) {
  //         alert('pesan tidak boleh kosong');
  //         return;
  //     }

  //     formnama.disabled = true;
  //     formpesan.disabled = true;

  //     batal.disabled = true;
  //     balas.disabled = true;
  //     let tmp = balas.innerHTML;
  //     balas.innerHTML = `<span class="spinner-border spinner-border-sm me-1"></span>Loading...`;

  //     let isSuccess = false;
  //     await request('POST', '/api/comment')
  //         .token(token)
  //         .body({
  //             nama: nama,
  //             id: id,
  //             komentar: komentar
  //         })
  //         .then((res) => {
  //             if (res.code == 201) {
  //                 isSuccess = true;
  //                 owns.set(res.data.uuid, res.data.own);
  //             }
  //         })
  //         .catch((err) => {
  //             alert(`Terdapat kesalahan: ${err}`);
  //         });

  //     if (isSuccess) {
  //         await ucapan();
  //         document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'center' });
  //         resetForm();
  //     }

  //     batal.disabled = false;
  //     balas.disabled = false;
  //     balas.innerHTML = tmp;
  //     formnama.disabled = false;
  //     formpesan.disabled = false;
  // };

  // OK
  const ubah = async () => {
    let token = localStorage.getItem("token") ?? "";
    let id = sunting.getAttribute("data-uuid");
    let hadir = kehadiran.value;
    let jumlah = jumlahOrang.value;
    let komentar = formUcapan.value;

    if (token.length == 0) {
      alert("Terdapat kesalahan, token kosong !");
      window.location.reload();
      return;
    }

    if (document.getElementById(id).getAttribute("data-parent") === "true") {
      if (hadir === "not-selected") {
        alert("Silahkan isi kehadiran");
        return;
      }

      if (hadir === "absent") {
        jumlahOrang.value = null;
        jumlah = null;
      }

      if (kehadiran.value === "present") {
        if (jumlah.length === 0) {
          alert("Silahkan isi jumlah kehadiran");
          return;
        } else if (jumlah > 10) {
          alert("Mohon maaf, jumlah kehadiran tidak boleh lebih dari 10 orang");
          return;
        }
      }
    }
    if (komentar.length == 0) {
      alert("Silahkan isi ucapan dan doa");
      return;
    }

    kehadiran.disabled = true;
    jumlahOrang.disabled = true;
    formUcapan.disabled = true;

    sunting.disabled = true;
    batal.disabled = true;
    let tmp = sunting.innerHTML;
    sunting.innerHTML = `<span class="spinner-border spinner-border-sm me-1"></span>Loading...`;

    let isSuccess = false;
    await request("PUT", "/api/comment/" + owns.get(id))
      .body({
        hadir: kehadiran.value == "present",
        komentar,
        jumlah,
      })
      .token(token)
      .then((res) => {
        if (res.data.status) {
          isSuccess = true;
        }
      })
      .catch((err) => {
        alert(`Terdapat kesalahan: ${err}`);
      });

    if (isSuccess) {
      await ucapan();
      document
        .getElementById(id)
        .scrollIntoView({ behavior: "smooth", block: "center" });
      resetForm();
    }

    sunting.innerHTML = tmp;
    sunting.disabled = false;
    batal.disabled = false;
    kehadiran.disabled = false;
    jumlahOrang.disabled = false;
    formUcapan.disabled = false;
  };

  // OK
  const hapus = async (button) => {
    if (!confirm("Kamu yakin ingin menghapus?")) {
      return;
    }

    let token = localStorage.getItem("token") ?? "";
    let id = button.getAttribute("data-uuid");

    if (token.length == 0) {
      alert("Terdapat kesalahan, token kosong !");
      window.location.reload();
      return;
    }

    button.disabled = true;
    let tmp = button.innerText;
    button.innerText = "Loading..";

    let isSuccess = false;
    await request("DELETE", "/api/comment/" + owns.get(id))
      .token(token)
      .then((res) => {
        if (res.data.status) {
          owns.unset(id);
          isSuccess = true;
        }
      })
      .catch((err) => {
        alert(`Terdapat kesalahan: ${err}`);
      });

    button.innerText = tmp;
    button.disabled = false;

    if (isSuccess) {
      ucapan();
    }
  };

  // OK
  const edit = async (button) => {
    button.disabled = true;
    // let tmp = button.innerText;
    let tmp2 = button.innerHTML;
    button.innerText = "Loading...";

    let id = button.getAttribute("data-uuid").toString();
    let token = localStorage.getItem("token") ?? "";

    if (token.length == 0) {
      alert("Terdapat kesalahan, token kosong !");
    }

    await request("GET", "/api/comment/" + id)
      .token(token)
      .then((res) => {
        if (res.code == 200) {
          tempID = id;
          batal.style.display = "block";
          sunting.style.display = "block";
          submitWish.style.display = "none";
          sunting.setAttribute("data-uuid", id);
          formUcapan.value = res.data.komentar;
          nama.value = res.data.nama;
          nama.disabled = true;

          if (
            document.getElementById(id).getAttribute("data-parent") !== "true"
          ) {
            document.getElementById("label-konfirmasi").style.display = "none";
            kehadiran.style.display = "none";
            document.getElementById("label-jumlah").style.display = "none";
            jumlahOrang.style.display = "none";
          } else {
            kehadiran.value = res.data.hadir ? "present" : "absent";
            document.getElementById("label-konfirmasi").style.display = "block";
            kehadiran.style.display = "block";
            jumlahOrang.value = res.data.jumlah;
            document.getElementById("label-jumlah").style.display = "block";
            jumlahOrang.style.display = "block";
            kehadiran.value === "present"
              ? (jumlahOrang.disabled = false)
              : (jumlahOrang.disabled = true);
          }
          document
            .getElementById("write-wish")
            .scrollIntoView({ behavior: "smooth" });
        }
      })
      .catch((err) => {
        alert(`Terdapat kesalahan: ${err}`);
      });

    button.disabled = false;
    // button.innerText = tmp;
    button.innerHTML = tmp2;
  };

  // OK
  return {
    enableGuestNum: enableGuestNum,
    ucapan: ucapan,
    kirim: sendWish,
    render: renderLoading,
    reset: resetForm,
    numOfComment: numOfComment,

    hapus: hapus,
    edit: edit,
    ubah: ubah,

    // balasan: balasan,
    // reply: reply,
    batal: () => {
      if (tempID) {
        document
          .getElementById(tempID)
          .scrollIntoView({ behavior: "smooth", block: "center" });
        tempID = null;
      }
      resetForm();
    },
  };
})();
window.comment = comment;

const storage = (table) =>
  ((table) => {
    const get = (key = null) => {
      if (!localStorage.getItem(table)) {
        localStorage.setItem(table, JSON.stringify({}));
      }

      if (key) {
        return JSON.parse(localStorage.getItem(table))[key];
      }

      return JSON.parse(localStorage.getItem(table));
    };

    const set = (key, value) => {
      let storage = get();
      storage[key] = value;
      localStorage.setItem(table, JSON.stringify(storage));
    };

    const unset = (key) => {
      let storage = get();
      delete storage[key];
      localStorage.setItem(table, JSON.stringify(storage));
    };

    const has = (key) => Object.keys(get()).includes(key);

    return {
      get: get,
      set: set,
      unset: unset,
      has: has,
    };
  })(table);

const likes = storage("likes");
const owns = storage("owns");
const request = (method, path) => {
  let url = document.querySelector("body").getAttribute("data-url");

  let req = {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  return {
    async then(...prms) {
      if (url.slice(-1) == "/") {
        url = url.slice(0, -1);
      }

      return fetch(path ? url + path : url, req)
        .then((res) => res.json())
        .then((res) => {
          if (res.error.length == 0) {
            return res;
          }

          throw res.error[0];
        })
        .then(...prms);
    },
    token(token) {
      if (token) {
        req.headers["Authorization"] = "Bearer " + token;
      }

      return this;
    },
    body(body) {
      if (body) {
        req.body = JSON.stringify(body);
      }

      return this;
    },
  };
};

const login = async () => {
  let body = document.querySelector("body");

  await request("POST", "/api/session")
    .body({
      email: body.getAttribute("data-email"),
      password: body.getAttribute("data-password"),
    })
    .then((res) => {
      if (res.code == 200) {
        localStorage.removeItem("token");
        localStorage.setItem("token", res.data.token);
        comment.ucapan();
      }
    })
    .catch((err) => {
      alert(`Terdapat kesalahan: ${err}`);
      window.location.reload();
      return;
    });
};
window.login = login;

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
