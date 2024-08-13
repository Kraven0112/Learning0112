const github_api = "https://restcountries.com/v3.1/all"
fetch(github_api)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      // create element
      let para1 = document.createElement("p")
      let para2 = document.createElement("p")
      let para3 = document.createElement("p")
      let para4 = document.createElement("p")
      let para5 = document.createElement("p")
      let image = document.createElement("img")
      let context = document.createElement("div")
      //   adding class to div
      context.classList.add("context")
      image.classList.add("image")

      context.append(image, para1, para2, para3, para4, para5)

      document.querySelector(".container").appendChild(context)
      // name
      para1.innerHTML = `Country-name : ${data[i].name.common}`

      // population
      para2.innerHTML = `Population : ${data[i].population.toLocaleString(
        "en-IN"
      )}`

      // region
      para3.innerHTML = `Region : ${data[i].region}`

      // languages
      if (data[i].languages) {
        para4.innerHTML = `Language : ${data[i].languages.eng}`
      }

      // capital
      if (data[i].capital) {
        para5.innerHTML = `Capital : ${data[i].capital[0]}`
      }

      // flag-image
      image.src = `${data[i].flags.png}`

      //   all array from api
      console.log(data[i])
    }
  })
  .catch((error) => console.log(error))
