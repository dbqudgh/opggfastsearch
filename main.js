/*sample
ROX Smeb 님이 방에 참가했습니다.
ROX Peanut 님이 방에 참가했습니다.
ROX Kuro 님이 방에 참가했습니다.
ROX PraY 님이 방에 참가했습니다.
ROX GorillA 님이 방에 참가했습니다.


페이커 김치도둑님이 로비에 참가하셨습니다.
ehcl2048님이 로비에 참가하셨습니다.
혼모노9999님이 로비에 참가하셨습니다.
Ryanblak님이 로비에 참가하셨습니다.
니아비뭐하시노님이 로비에 참가하셨습니다.

*/
const input = document.querySelector('input');
const baseUrl = "https://www.op.gg/multi/query="

input.addEventListener('change',(e)=>{
    e.preventDefault();

    let result = '';

    const text = input.value
    const list = text.split('님이 로비에 참가하셨습니다.')

    for(let i = 0; i < list.length-1; i++){
        result += list[i]+","
    }
    console.log(result)

    window.open(baseUrl+result);
})
