let prev = document.querySelector(".prev")
let numinside = document.querySelector(".numinside")
let next = document.querySelector(".next")
let covertable = document.querySelector(".covertable")
let add = document.querySelector(".add")
let origin = window.location.origin
let total_num = 0;
axios.get(
    // http://localhost/dashboard/project/php%20assignment/
    `${origin}/dashboard/project/php%20assignment/php/get.php?page=1`,
)
  .then((response) => {

    console.log(response.data)

    const checkdata = response.data.data
    total_num  = response.data.total_pages
    checkdata.map((item, index)=>{
        covertable.innerHTML += `
         <tr>
                  <td class="text-sm font-medium capitelize text-center">
                   ${item.firstname}
                  </td>
                  <td class="text-sm font-medium capitelize text-center">
                   ${item.lastname}
                  </td>
                  <td class="text-sm font-medium capitelize text-center">
                  ${item.age}
                  </td>
                  <td class="text-sm font-medium capitelize text-center">
                  ${item.email}
                  </td>
                  <td class="text-sm font-medium capitelize text-center">
                   ${item.gender}
                  </td>
                  <td class="text-sm font-medium capitelize text-center">
                    <div class="w-1/3 m-auto flex flex-col gap-2 sm:flex sm:flex-col gap-2  md:flex md:flex-row md:space-x-2 lg:flex lg:flex-row lg:space-x-2 items-center ">
                      <a
                        data-id=${item.id}
                        class="py-2 px-2 rounded-md bg-green-400 text-white text-center edit"
                      >
                        edit
                    </a>
                      <a
                       data-id=${item.id}
                        class="py-2 px-2 rounded-md bg-red-400 text-white text-center delete"
                      >
                        delete
                </a>
                    </div>
                  </td>
                </tr>
        `;
    })
     const edits = document.querySelectorAll(".edit")
     const deletesdata = document.querySelectorAll(".delete")
     edits.forEach((edit)=>{
        edit.addEventListener("click", function(e){
            e.preventDefault();
            console.log(e.target.dataset.id)
            window.location.href =`${origin}/dashboard/project/php%20assignment/index.html?find=${e.target.dataset.id}`
        })
     })

     deletesdata.forEach((deletesdat)=>{
        deletesdat.addEventListener("click", function(e){
            e.preventDefault();
            console.log(e.target.dataset.id)
            let formdata = new FormData();
            formdata.append("id", e.target.dataset.id);
            axios.post(
                // http://localhost/dashboard/project/php%20assignment/
                `${origin}/dashboard/project/php%20assignment/php/delete.php`,
                formdata
            )
              .then((response) => {
                console.log(response.data)
                if(response.data.success){
                    setTimeout(()=>{
                        window.location.href = `${origin}/dashboard/project/php%20assignment/home.html`
                      },1500)
                }
              })
        })
     })

  })


  prev.addEventListener("click", function(e){
    e.preventDefault()
   let current = parseInt(numinside.textContent)
     insidetable.innerHTML = ``
   if(current > 1 ){
    let ans =  current -= 1;
  numinside.textContent = ans

  axios.get(
    // http://localhost/dashboard/project/php%20assignment/
    `${origin}/dashboard/project/php%20assignment/php/get.php?page=${ans}`,
)
  .then((response) => {

    console.log(response.data)

    const checkdata = response.data.data
    total_num  = response.data.total_pages
    checkdata.map((item, index)=>{
        covertable.innerHTML += `
         <tr>
                  <td class="text-sm font-medium capitelize text-center">
                   ${item.firstname}
                  </td>
                  <td class="text-sm font-medium capitelize text-center">
                   ${item.lastname}
                  </td>
                  <td class="text-sm font-medium capitelize text-center">
                  ${item.age}
                  </td>
                  <td class="text-sm font-medium capitelize text-center">
                  ${item.email}
                  </td>
                  <td class="text-sm font-medium capitelize text-center">
                   ${item.gender}
                  </td>
                  <td class="text-sm font-medium capitelize text-center">
                    <div class="w-1/3 m-auto flex flex-col gap-2 sm:flex sm:flex-col gap-2  md:flex md:flex-row md:space-x-2 lg:flex lg:flex-row lg:space-x-2 items-center ">
                      <a
                        data-id=${item.id}
                        class="py-2 px-2 rounded-md bg-green-400 text-white text-center edit"
                      >
                        edit
                    </a>
                      <a
                       data-id=${item.id}
                        class="py-2 px-2 rounded-md bg-red-400 text-white text-center delete"
                      >
                        delete
                </a>
                    </div>
                  </td>
                </tr>
        `;
    })
     const edits = document.querySelectorAll(".edit")
     const deletesdata = document.querySelectorAll(".delete")
     edits.forEach((edit)=>{
        edit.addEventListener("click", function(e){
            e.preventDefault();
            console.log(e.target.dataset.id)
            window.location.href =`${origin}/dashboard/project/php%20assignment/index.html?find=${e.target.dataset.id}`
        })
     })

     deletesdata.forEach((deletesdat)=>{
        deletesdat.addEventListener("click", function(e){
            e.preventDefault();
            console.log(e.target.dataset.id)
            let formdata = new FormData();
            formdata.append("id", e.target.dataset.id);
            axios.post(
                // http://localhost/dashboard/project/php%20assignment/
                `${origin}/dashboard/project/php%20assignment/php/delete.php`,
                formdata
            )
              .then((response) => {
                console.log(response.data)
                if(response.data.success){
                    setTimeout(()=>{
                        window.location.href = `${origin}/dashboard/project/php%20assignment/home.html`
                      },1500)
                }
              })
        })
     })

  })





//   end
   }
   else if(current == 1 ){
    numinside.textContent = 1
    axios.get(
        // http://localhost/dashboard/project/php%20assignment/
        `${origin}/dashboard/project/php%20assignment/php/get.php?page=${1}`,
    )
      .then((response) => {
    
        console.log(response.data)
    
        const checkdata = response.data.data
        total_num  = response.data.total_pages
        checkdata.map((item, index)=>{
            covertable.innerHTML += `
             <tr>
                      <td class="text-sm font-medium capitelize text-center">
                       ${item.firstname}
                      </td>
                      <td class="text-sm font-medium capitelize text-center">
                       ${item.lastname}
                      </td>
                      <td class="text-sm font-medium capitelize text-center">
                      ${item.age}
                      </td>
                      <td class="text-sm font-medium capitelize text-center">
                      ${item.email}
                      </td>
                      <td class="text-sm font-medium capitelize text-center">
                       ${item.gender}
                      </td>
                      <td class="text-sm font-medium capitelize text-center">
                        <div class="w-1/3 m-auto flex flex-col gap-2 sm:flex sm:flex-col gap-2  md:flex md:flex-row md:space-x-2 lg:flex lg:flex-row lg:space-x-2 items-center ">
                          <a
                            data-id=${item.id}
                            class="py-2 px-2 rounded-md bg-green-400 text-white text-center edit"
                          >
                            edit
                        </a>
                          <a
                           data-id=${item.id}
                            class="py-2 px-2 rounded-md bg-red-400 text-white text-center delete"
                          >
                            delete
                    </a>
                        </div>
                      </td>
                    </tr>
            `;
        })
         const edits = document.querySelectorAll(".edit")
         const deletesdata = document.querySelectorAll(".delete")
         edits.forEach((edit)=>{
            edit.addEventListener("click", function(e){
                e.preventDefault();
                console.log(e.target.dataset.id)
                window.location.href =`${origin}/dashboard/project/php%20assignment/index.html?find=${e.target.dataset.id}`
            })
         })
    
         deletesdata.forEach((deletesdat)=>{
            deletesdat.addEventListener("click", function(e){
                e.preventDefault();
                console.log(e.target.dataset.id)
                let formdata = new FormData();
                formdata.append("id", e.target.dataset.id);
                axios.post(
                    // http://localhost/dashboard/project/php%20assignment/
                    `${origin}/dashboard/project/php%20assignment/php/delete.php`,
                    formdata
                )
                  .then((response) => {
                    console.log(response.data)
                    if(response.data.success){
                        setTimeout(()=>{
                            window.location.href = `${origin}/dashboard/project/php%20assignment/home.html`
                          },1500)
                    }
                  })
            })
         })
    
      })



    // end
   }
})


next.addEventListener("click", function(e){
    e.preventDefault()
    let current = parseInt(numinside.textContent)
    insidetable.innerHTML = ``
  
    if(current < total_num){
      let ans =  current += 1;
      numinside.textContent = ans

      axios.get(
        // http://localhost/dashboard/project/php%20assignment/
        `${origin}/dashboard/project/php%20assignment/php/get.php?page=${ans}`,
    )
      .then((response) => {
    
        console.log(response.data)
    
        const checkdata = response.data.data
        total_num  = response.data.total_pages
        checkdata.map((item, index)=>{
            covertable.innerHTML += `
             <tr>
                      <td class="text-sm font-medium capitelize text-center">
                       ${item.firstname}
                      </td>
                      <td class="text-sm font-medium capitelize text-center">
                       ${item.lastname}
                      </td>
                      <td class="text-sm font-medium capitelize text-center">
                      ${item.age}
                      </td>
                      <td class="text-sm font-medium capitelize text-center">
                      ${item.email}
                      </td>
                      <td class="text-sm font-medium capitelize text-center">
                       ${item.gender}
                      </td>
                      <td class="text-sm font-medium capitelize text-center">
                        <div class="w-1/3 m-auto flex flex-col gap-2 sm:flex sm:flex-col gap-2  md:flex md:flex-row md:space-x-2 lg:flex lg:flex-row lg:space-x-2 items-center ">
                          <a
                            data-id=${item.id}
                            class="py-2 px-2 rounded-md bg-green-400 text-white text-center edit"
                          >
                            edit
                        </a>
                          <a
                           data-id=${item.id}
                            class="py-2 px-2 rounded-md bg-red-400 text-white text-center delete"
                          >
                            delete
                    </a>
                        </div>
                      </td>
                    </tr>
            `;
        })
         const edits = document.querySelectorAll(".edit")
         const deletesdata = document.querySelectorAll(".delete")
         edits.forEach((edit)=>{
            edit.addEventListener("click", function(e){
                e.preventDefault();
                console.log(e.target.dataset.id)
                window.location.href =`${origin}/dashboard/project/php%20assignment/index.html?find=${e.target.dataset.id}`
            })
         })
    
         deletesdata.forEach((deletesdat)=>{
            deletesdat.addEventListener("click", function(e){
                e.preventDefault();
                console.log(e.target.dataset.id)
                let formdata = new FormData();
                formdata.append("id", e.target.dataset.id);
                axios.post(
                    // http://localhost/dashboard/project/php%20assignment/
                    `${origin}/dashboard/project/php%20assignment/php/delete.php`,
                    formdata
                )
                  .then((response) => {
                    console.log(response.data)
                    if(response.data.success){
                        setTimeout(()=>{
                            window.location.href = `${origin}/dashboard/project/php%20assignment/home.html`
                          },1500)
                    }
                  })
            })
         })
    
      })

// end
    }
    else if(current == total_num){
        numinside.textContent = 1

        axios.get(
            // http://localhost/dashboard/project/php%20assignment/
            `${origin}/dashboard/project/php%20assignment/php/get.php?page=${1}`,
        )
          .then((response) => {
        
            console.log(response.data)
        
            const checkdata = response.data.data
            total_num  = response.data.total_pages
            checkdata.map((item, index)=>{
                covertable.innerHTML += `
                 <tr>
                          <td class="text-sm font-medium capitelize text-center">
                           ${item.firstname}
                          </td>
                          <td class="text-sm font-medium capitelize text-center">
                           ${item.lastname}
                          </td>
                          <td class="text-sm font-medium capitelize text-center">
                          ${item.age}
                          </td>
                          <td class="text-sm font-medium capitelize text-center">
                          ${item.email}
                          </td>
                          <td class="text-sm font-medium capitelize text-center">
                           ${item.gender}
                          </td>
                          <td class="text-sm font-medium capitelize text-center">
                            <div class="w-1/3 m-auto flex flex-col gap-2 sm:flex sm:flex-col gap-2  md:flex md:flex-row md:space-x-2 lg:flex lg:flex-row lg:space-x-2 items-center ">
                              <a
                                data-id=${item.id}
                                class="py-2 px-2 rounded-md bg-green-400 text-white text-center edit"
                              >
                                edit
                            </a>
                              <a
                               data-id=${item.id}
                                class="py-2 px-2 rounded-md bg-red-400 text-white text-center delete"
                              >
                                delete
                        </a>
                            </div>
                          </td>
                        </tr>
                `;
            })
             const edits = document.querySelectorAll(".edit")
             const deletesdata = document.querySelectorAll(".delete")
             edits.forEach((edit)=>{
                edit.addEventListener("click", function(e){
                    e.preventDefault();
                    console.log(e.target.dataset.id)
                    window.location.href =`${origin}/dashboard/project/php%20assignment/index.html?find=${e.target.dataset.id}`
                })
             })
        
             deletesdata.forEach((deletesdat)=>{
                deletesdat.addEventListener("click", function(e){
                    e.preventDefault();
                    console.log(e.target.dataset.id)
                    let formdata = new FormData();
                    formdata.append("id", e.target.dataset.id);
                    axios.post(
                        // http://localhost/dashboard/project/php%20assignment/
                        `${origin}/dashboard/project/php%20assignment/php/delete.php`,
                        formdata
                    )
                      .then((response) => {
                        console.log(response.data)
                        if(response.data.success){
                            setTimeout(()=>{
                                window.location.href = `${origin}/dashboard/project/php%20assignment/home.html`
                              },1500)
                        }
                      })
                })
             })
        
          })



    }


})


add.addEventListener("click", function(e){
    e.preventDefault();
    window.location.href =`${origin}/dashboard/project/php%20assignment/index.html`
})