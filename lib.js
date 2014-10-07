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
