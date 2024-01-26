const sendBtn = document.getElementById("sendBtn");
const numOne = document.getElementById("numOne");
const numTwo = document.getElementById("numTwo");
const result_box = document.getElementById("result_box");

const helloAPI = async(num1, num2) => {
    const promise = await fetch(`https://numquestionssum.azurewebsites.net/sum/getsum/${num1}/${num2}`);
    const data = await promise.text();
    return data;
}

sendBtn.addEventListener('click', async()=>{
    if(numOne.value != "" && numTwo.value != ""){
        let result = await helloAPI(numOne.value, numTwo.value);
        result_box.innerText = result;
    }
    else
    result_box.innerText = "Please fill out all the forms.";
})