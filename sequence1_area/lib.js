function OUTPUT(Out, Val) {
    if(typeof Val === "undefined")
    {
        $("#output").append("<pre>" + Out + "</pre>");
    }
    else
    {
        $("#" + Out).val(Val);
    }
}

function GET(ControlName) {
    return $("#" + ControlName).val();
}

function _loop(){
    if ($("#boiler").val() === "ON")
    {
        $("#airtemp").val( parseInt($("#airtemp").val(), 10) + 1);
    }
    else
    {
        if( parseInt($("#airtemp").val(), 10) > -5)
        {
             $("#airtemp").val( parseInt($("#airtemp").val(), 10) - 1);
        }
    }
    if( parseInt($("#airtemp").val(), 10) >= 50)
    {
      OUTPUT("House on Fire!!!");
        stop();
    }
    loop();
}

function main(){
  intervalID = window.setInterval(_loop, 1000);
}

function stop(){
    window.clearInterval(intervalID);
}

$( document ).ready(function() {
    $("#stop").click(stop);
    main();
});
