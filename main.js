/*sample
ROX Smeb 님이 방에 참가했습니다.
ROX Peanut 님이 방에 참가했습니다.
ROX Kuro 님이 방에 참가했습니다.
ROX PraY 님이 방에 참가했습니다.
ROX GorillA 님이 방에 참가했습니다.
*/
const input = document.querySelector('input');
const baseUrl = "https://www.op.gg/multi/query="

input.addEventListener('change',(e)=>{
    e.preventDefault();

    let result = '';

    const text = input.value
    const list = text.split('님이 방에 참가했습니다.')
    console.log(list.length)
    for(let i = 0; i < list.length; i++){
        result = result+list[i]+",";
    }


    // window.open(baseUrl+result);
})