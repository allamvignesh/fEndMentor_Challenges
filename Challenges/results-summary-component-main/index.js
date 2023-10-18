let summary = document.querySelector(".summary")

fetch("./data.json")
.then(res => res.json())
.then(result => {
    for(let i=0; i<result.length; i++){
        let d = document.createElement('div');
        d.classList.add("parts");
        d.classList.add(`${result[i]["color"]}`);
        d.innerHTML = `<span><img src="${result[i]["icon"]}" alt="${result[i]["category"]} icon">
        ${result[i]["category"]}
        </span>
        <div>${result[i]["score"]} <span>/ 100</span></div>`

        summary.insertBefore(d, document.querySelector(".continue"))
    }
})
