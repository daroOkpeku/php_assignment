const firstname = document.querySelector(".firstname");
const lastname = document.querySelector(".lasname")
const age = document.querySelector(".age")
const email = document.querySelector(".email")
const gender = document.querySelector(".gender")
const btn = document.querySelector(".btn")
const message = document.querySelector(".message")
let editId = 0;
let idEdited = 0;
const arr = [];
let origin = window.location.origin
 const url = new URL(window.location.href);
 const findParam = url.searchParams.get("find");


 if(findParam){
  axios.get(
    // http://localhost/dashboard/project/php%20assignment/
    `${origin}/dashboard/project/php%20assignment/php/select.php?id=${findParam}`,
    
)
  .then((response) => {
    console.log(response.data)
    if(response.data.success){
      editId = 1;
      btn.textContent = "Edit"
      firstname.value = response.data.success.firstname
      lastname.value = response.data.success.lastname
      age.value = parseInt(response.data.success.age)
      email.value = response.data.success.email
      gender.value = response.data.success.gender
      idEdited = response.data.success.id
        // setTimeout(()=>{
        //     window.location.href = `${origin}/dashboard/project/php%20assignment/home.html`
        //   },1500)
    }
  })
 }



btn.addEventListener("click", function(e){
    e.preventDefault();
     btn.textContent = "Processing..."
    if(editId == 0){
    

        let formdata = new FormData();
        formdata.append("firstname", firstname.value);
        formdata.append("lastname", lastname.value);
        formdata.append("age", age.value);
        formdata.append("email", email.value);
        formdata.append("gender", gender.value);
        const obj = {"firstname":firstname.value, "lastname":lastname.value, "age":age.value, "email":email.value, "gender":gender.value}
        if(arr.length == 0){
            // arr.push(obj)
            // localStorage.setItem("Items", JSON.stringify(arr))
            axios.post(
              // http://localhost/dashboard/project/php%20assignment/
              `${origin}/dashboard/project/php%20assignment/php/create.php`,
              formdata
          )
            .then((response) => {
            
            console.log(response)
            if(response.status == 200){
                message.style.display = "flex"
                message.textContent = response.data.success
                  message.style.color = "green"
              btn.textContent = "Submit"
               arr.push(obj)
            localStorage.setItem("Items", JSON.stringify(arr))
              setTimeout(()=>{
                window.location.href = `${origin}/dashboard/project/php%20assignment/home.html`
              },1500)
            }else{
               btn.textContent = "Submit"
                message.style.display = "flex"
              message.textContent = response.data.error
                message.style.color = "red"
            //   "this email has been used before or you input is wrong"
            }
            })
            .catch((error) => {
                console.error("Error:", error);
              });
        }else{
            axios.post(
              `${origin}/dashboard/project/php%20assignment/php/create.php`,
              formdata
          )
          .then((response) => {
          
          console.log(response)
          if(response.status == 200){
              message.style.display = "flex"
              message.textContent = response.data.success
                message.style.color = "green"
            btn.textContent = "Submit"
             arr.push(obj)
            setTimeout(()=>{
              window.location.href = `${origin}/dashboard/project/php%20assignment/home.html`
            },1500)
          }else{
             btn.textContent = "Submit"
              message.style.display = "flex"
            message.textContent = response.data.error
            message.style.color = "red"
          //   "this email has been used before or you input is wrong"
          }
          })
          .catch((error) => {
              console.error("Error:", error);
            });
        }
    }else{
      let formdata = new FormData();
      formdata.append("firstname", firstname.value);
      formdata.append("lastname", lastname.value);
      formdata.append("age", age.value);
      formdata.append("email", email.value);
      formdata.append("gender", gender.value)
      formdata.append("Editid", idEdited);
      axios.post(
        // http://localhost/dashboard/project/php%20assignment/
        `${origin}/dashboard/project/php%20assignment/php/update.php`,
        formdata
    )
      .then((response) => {
      
 
      if(response.status == 200){
          message.style.display = "flex"
          message.textContent = response.data.success
            message.style.color = "green"
        btn.textContent = "Submit"
   
        setTimeout(()=>{
          window.location.href = `${origin}/dashboard/project/php%20assignment/home.html`
        },1500)
      }else{
         btn.textContent = "Submit"
          message.style.display = "flex"
        message.textContent = response.data.error
          message.style.color = "red"
      //   "this email has been used before or you input is wrong"
      }
      })
      .catch((error) => {
          console.error("Error:", error);
        });
      

    }



})


