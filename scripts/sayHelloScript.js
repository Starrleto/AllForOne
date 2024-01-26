const sendBtn = document.getElementById("sendBtn");
const first_name = document.getElementById("first_name");
const result_box = document.getElementById("result_box");

const helloAPI = async(pname) => {
    const promise = await fetch("https://numquestionssum.azurewebsites.net/sayhello/sayhello/"+pname);
    const data = await promise.text();
    console.log(data);
    return data;
}

sendBtn.addEventListener('click', async()=>{
    if(first_name.value != ""){
        let result = await helloAPI(first_name.value);
        result_box.innerText = result;
    }
    else
    result_box.innerText = "Please fill out all the forms.";
})