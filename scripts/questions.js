const sendBtn = document.getElementById("sendBtn");
const firstName = document.getElementById("firstName");
const time = document.getElementById("Time");
const result_box = document.getElementById("result_box");

const helloAPI = async(name, num) => {
    const promise = await fetch(`https://numquestionssum.azurewebsites.net/questions/questions/${name}/${num}`);
    const data = await promise.text();
    return data;
}

sendBtn.addEventListener('click', async()=>{
    if(firstName.value != "" && time.value != ""){
        let result = await helloAPI(firstName.value, time.value);
        result_box.innerText = result+".";
    }
    else
    result_box.innerText = "Please fill out all the forms.";
})