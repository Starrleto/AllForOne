const sendBtn = document.getElementById("sendBtn");
const wordEntry = document.getElementById("wordEntry");
const result_box = document.getElementById("result_box");

const helloAPI = async(word) => {
    const promise = await fetch("https://numquestionssum.azurewebsites.net/Restauraunt/FindRestauraunt/"+word);
    const data = await promise.text();
    console.log(data);
    return data;
}

sendBtn.addEventListener('click', async()=>{
    if(wordEntry.value != ""){
        let result = await helloAPI(wordEntry.value);
        result_box.innerText = result;
    }
    else
    result_box.innerText = "Please fill out all the forms.";
})