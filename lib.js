function INPUT(ControlName) {
    return $("#" + ControlName).val();
}

function OUTPUT(Message) {
    $("#output").append("<pre>" + Message + "</pre>");
}

function run() {
    $("#output").html("");
    main();
}

$( document ).ready(function() {
    $("#start").click(run);
    console.log( "ready!" );
});
