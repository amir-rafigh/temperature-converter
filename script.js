function icontemp(){    
    const spann = document.getElementById('temp')
    spann.innerHTML = "&#xf2cb";

}
icontemp()


const result = document.getElementById('result');
result.style.display = 'none'
function calctemp(){
    const inp = document.getElementById('number-temp').value;
    const select = document.querySelector('select').value;
    
    if(select==='fah'){
        const fahTOcel = (x)=>{
            let cel = (x-32)*5/9;
            return cel;

        }
        result.style.display = 'inline'
         result.innerHTML =  (`${parseInt(fahTOcel(inp))}°celsius`)
    }
    else{
        const celTOfah = (x)=>{
            let fah = x*(9/5)+32;
            return fah;

        }
         result.style.display = 'inline'
        result.innerHTML =`${parseInt(celTOfah(inp))}°fahrenheit`
    }

    
    setTimeout(()=>{
         result.style.display = 'none'
    
    },5000)
}
