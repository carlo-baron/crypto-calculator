account_size = document.getElementById("size");
risk_amount = document.getElementById("risk");
stop_loss = document.getElementById("sl");

results = document.getElementsByName("result");
position_size_field = results[0];
leverage_field = results[1];


document.getElementById("submit").onclick = function(e){
    e.preventDefault();
    try{
        divisor = parseFloat(stop_loss.value) / 100;
        position_size = parseFloat(risk_amount.value) / divisor;
        console.log(position_size);

        float_size = parseFloat(account_size.value);
        if(position_size > float_size){
            leverage = position_size / parseFloat(float_size);
            console.log(leverage);
            console.log(account_size.value);
        }else{
            leverage = 1;
        }

        position_size_field.value = position_size.toFixed(2);
        leverage_field.value = leverage.toFixed(2);

    }catch(e){
        console.error(e)
    }

    

}