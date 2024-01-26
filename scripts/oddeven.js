const sendBtn = document.getElementById("sendBtn");
const numOne = document.getElementById("numOne");
const result_box = document.getElementById("result_box");

const helloAPI = async(pname) => {
    const promise = await fetch("https://numquestionssum.azurewebsites.net/oddeven/getresult/"+pname);
    const data = await promise.text();
    console.log(data);
    return data;
}

sendBtn.addEventListener('click', async()=>{
    if(numOne.value != ""){
        let result = await helloAPI(numOne.value);
        result_box.innerText = result;
    }
    else
    result_box.innerText = "Please fill out all the forms.";
})