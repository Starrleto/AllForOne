const sendBtn = document.getElementById("sendBtn");
let entryArray = []
entryArray.push(document.getElementById("entryOne"));
entryArray.push(document.getElementById("entryTwo"));
entryArray.push(document.getElementById("entryThree"));
entryArray.push(document.getElementById("entryFour"));
entryArray.push(document.getElementById("entryFive"));
entryArray.push(document.getElementById("entrySix"));
entryArray.push(document.getElementById("entrySeven"));
entryArray.push(document.getElementById("entryEight"));
entryArray.push(document.getElementById("entryNine"));
entryArray.push(document.getElementById("entryTen"));
const result_box = document.getElementById("result_box");

const helloAPI = async(wordOne, wordTwo, wordThree, wordFour, wordFive, wordSix, wordSeven, wordEight, wordNine, wordTen) => {
    const promise = await fetch(`https://numquestionssum.azurewebsites.net/Madlib/play/${wordOne}/${wordTwo}/${wordThree}/${wordFour}/${wordFive}/${wordSix}/${wordSeven}/${wordEight}/${wordNine}/${wordTen}`);
    const data = await promise.json();
    console.log(data.length);
    return data;
}

sendBtn.addEventListener('click', async()=>{

    let filled = entryArray.every(element => element.value != "");
    console.log(filled);

    if(filled){
        let result = await helloAPI(entryArray[0].value, entryArray[1].value, entryArray[2].value, entryArray[3].value, entryArray[4].value, entryArray[5].value, entryArray[6].value, entryArray[7].value, entryArray[8].value, entryArray[9].value);
        result_box.innerText = `${result[0]} ${result[1]} ${result[2]} ${result[3]} ${result[4]} ${result[5]} ${result[6]} ${result[7]} ${result[8]} ${result[9]} ${result[10]} ${result[11]} ${result[12]} ${result[13]} ${result[14]}`;
    }
    else
        result_box.innerText = "Please fill out all the forms.";
    
})