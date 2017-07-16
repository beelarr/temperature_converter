/**
 * Created by beelarr on 7/15/17.
 */

let temp_val = 0 ;
let conv_temp;
let cel_checked;
let temp_input = document.querySelector('#n');
let sub_button = document.querySelector("#submit");
let cel_button = document.querySelector('#c');
let far_button = document.querySelector('#f');
let temp_output = document.querySelector('#output');
let temp_scale;



function store_input() {
    //might need to call Number on input.value
    temp_val = temp_input.value;
    // console.log(temp_val);
    cel_checked = cel_button.checked;
    if (cel_checked) {
        temp_scale = "C"
    }else {
        temp_scale = "F"
    }

};
//scale is a boolean of cel_checked from above
function determineConverter (temp, scale) {
    // console.log('dc', temp_val);
    //celsius
    if (scale) {
        conv_temp = ((temp - 32) * 5) / 9;
        if (conv_temp > 32){
            console.log(conv_temp)
            temp_output.classList.toggle('hot')

        } else if (conv_temp < 0) {
            console.log(conv_temp)
            temp_output.classList.toggle('cold')
        }else{temp_output.classList.remove('hot', 'cold')}
    //        fahrenheit
    } else {
        conv_temp = ((temp * 9) / 5) + 32;
        if (conv_temp > 90){
            console.log(conv_temp)
            temp_output.classList.toggle('hot')
        } else if (conv_temp < 32){
            console.log(conv_temp)
            temp_output.classList.toggle('cold')
        }else{temp_output.classList.remove('hot', 'cold')}
    }
};


function display_temp (temp, scale) {
    temp_output.innerHTML = `${Math.floor(conv_temp)} ˚${temp_scale}`;

}




 sub_button.addEventListener('click', function (){
    store_input();
    display_temp(determineConverter(temp_val, cel_checked), temp_scale)

});











