const profile = document.querySelector(".right-icons")
const profileSettings = document.querySelector(".profile-settings")
const darkBtn = document.getElementById("dark-btn")
const datePlace = document.getElementById("date-place")



profile.addEventListener("click",()=>{
    profileSettings.classList.toggle('profile-settings-max-height')
})

darkBtn.addEventListener("click", ()=>{
    darkBtn.classList.toggle("dark-toggle")
    document.body.classList.toggle("dark")

    if(localStorage.getItem("theme") === "light"){
        localStorage.setItem("theme", "dark")
    }else{
        localStorage.setItem("theme" , "light")
    }
})

// setting the theme to localstorage and check the saved theme
if(localStorage.getItem("theme") === "light"){
    darkBtn.classList.remove("dark-toggle")
    document.body.classList.remove('dark')
}else if(localStorage.getItem("theme") === "dark"){
    darkBtn.classList.add("dark-toggle")
    document.body.classList.add('dark')
}else{
    localStorage.setItem("theme","light")
}

const currentTime = new Date().getFullYear()
datePlace.innerText = `copyright ${currentTime} - Jey Fason LTD`
