const range=document.getElementById("rangeID");
const counterEl=document.getElementById("count");
const genbtnEl=document.getElementById("genbtn");
const passwordEl=document.getElementById("Password");
const upperCase_m_El=document.getElementById("uppercase");
const numbers_m_El=document.getElementById("numbers");
const symbol_m_El=document.getElementById("symbols");

let passnum=8;
let upperEl=false;
let numberEl=false;
let symbolEl=false;



range.addEventListener("input",(e)=>{
    passnum=e.target.value;
    counterEl.innerText=passnum;
})
const generatePass=()=>{
    const lower="abcdefghijklmnopqrstuvwxyz";
    const uppercase= upperEl?"ABCDEFGHIJKLMNOPQRSTUVWXYZ":"";
    const numbers= numberEl?"0123456789":"";
    const symbols= symbolEl?"!@#$%^&*()":"";
    let passString=lower+uppercase+numbers+symbols;
    let resultpass="";
    for(let i=0;i<passnum;i++){
        const randomIndex=Math.floor(Math.random()*(passString.length));
        resultpass+=passString[randomIndex];
    }
    passwordEl.value=resultpass;
}
genbtnEl.addEventListener("click",()=>{
    upperEl=upperCase_m_El.checked;
    numberEl=numbers_m_El.checked;
    symbolEl=symbol_m_El.checked;
    generatePass();
})
const passin=document.getElementById("passin");
passwordEl.addEventListener("click",()=>{
    if(passwordEl.value!=""){

        navigator.clipboard.writeText(`${passwordEl.value}`).then(()=>{
            passin.classList.add("active");
            
            setTimeout(function () {
                passin.classList.remove("active");
            }, 1000);
        })
    }
})