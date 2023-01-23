// LLAMAR A LAS VARIABLES

let listData = [];
const resultbox = document.querySelector("#result");
const modalImage = document.querySelector("#modal-img")
const modalName = document.querySelector("#modal-name")
const modalSecName = document.querySelector("#modal-s-name")
const modalId = document.querySelector("#modal-id")
const modalEmail = document.querySelector("#modal-email")
const id = localStorage.getItem(`data-entel`);
let listDataEntel = JSON.parse(id)

// API

const entelDatos = async (page) => {
    const response = await fetch(`https://reqres.in/api/users?page=${page}`);
    const data = await response.json();
    
    setData(data.data);
}

// LOCAL STORAGE

const localSt = (list) => {
    localStorage.setItem(`data-entel`, JSON.stringify(list));
}

const setData = (data) => {
    data.map(async (result) => {
        const data = {
            id: result.id,
            email: result.email,
            first_name: result.first_name,
            last_name: result.last_name,
            avatar: result.avatar,
        }

        listData.push(data);
        localSt(listData);

            const html = `
                <section class="card">
                 <h1>${data.id}</h1>
                 <div class="card-box-img">
                  <div>
                   <img src="${data.avatar}" alt="" class="card-imgx" />
                  </div>                 
                 </div>
                 <div class="card-name">
                  <span>${data.first_name}</span>
                  <span>${data.last_name}</span>
                 </div>
                 <button class="btn-infos" onclick= " modalContent('${data.first_name}', '${data.last_name}', '${data.avatar}', '${data.id}', '${data.email}') " data-bs-toggle='modal' data-bs-target='#modalData'>Más información</button>
                </section>
            `;
            resultbox.innerHTML += html;
        })
    }


// LLAMADO DE API

const deployData = () => {
    for (let i = 1; i < 3; i++) {
        entelDatos(i);
    }
    if (id !== null) {
    } else {
    }
}

// MODAL

const modalContent = (name, secName, mdl_img, mdl_id, mdl_email) => {
    modalName.innerHTML = name;
    modalSecName.innerHTML = secName;
    modalImage.src = mdl_img;
    modalId.innerHTML = mdl_id;
    modalEmail.innerHTML = mdl_email;
}

// LLAMAR A LA FUNCIÓN

deployData()
