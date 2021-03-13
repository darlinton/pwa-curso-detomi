var debug = true;

function calc() {
    let v1 = $("input#firstnumber.form-control").val();
    (debug?console.log(v1):"");
    let v2 = $("input#secondnumber.form-control").val();
    (debug?console.log(v2):"");
    let r3 = $("input#result.form-control");
    (debug?console.log(r3.val()):"");
    r3.val(Number(v1)+Number(v2));
    (debug?console.log(r3.val()):"");
}