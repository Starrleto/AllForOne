const sendBtn = document.getElementById("sendBtn");
const question = document.getElementById("question");
const result_box = document.getElementById("result_box");

const helloAPI = async(ques) => {
    const promise = await fetch("https://numquestionssum.azurewebsites.net/magic/getanswer/"+ques);
    const data = await promise.text();
    console.log(data);
    return data;
}

sendBtn.addEventListener('click', async()=>{
    if(question.value != ""){
        let result = await helloAPI(question.value);
        result_box.innerText = result;
    }
    else
    result_box.innerText = "Please fill out all the forms.";
})