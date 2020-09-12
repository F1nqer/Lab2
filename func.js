// interface INum {
//     visio: string;
//     operate: number;
// }
var vivod = /** @class */ (function () {
    function vivod(znach) {
        this.visio = znach;
        this.operate = this.visio;
    }
    return vivod;
}());
var check = new vivod(document.getElementById("res").innerText);
var saverp = new vivod('-000');
var saverm = new vivod('-000');
var saverd = new vivod('-000');
var saveru = new vivod('-000');
function inp(knopka) {
    check.visio += knopka;
    check.operate = check.visio;
    document.getElementById('res').innerText = check.visio;
}
function chistka() {
    check.visio = check.visio.slice(0, -1);
    check.operate = check.visio;
    alert(check.operate);
    document.getElementById('res').innerText = check.visio;
}
function sbros() {
    document.getElementById('res').innerText = '0';
    check.operate = 0;
    check.visio = '';
}
function plusik() {
    saverp.operate = check.operate;
    saverp.visio = check.visio;
    document.getElementById('res').innerText = '0';
    check.operate = 0;
    check.visio = '';
}
function umno() {
    saveru.operate = check.operate;
    saveru.visio = check.visio;
    document.getElementById('res').innerText = '0';
    check.operate = 0;
    check.visio = '';
}
function dele() {
    saverd.operate = check.operate;
    saverd.visio = check.visio;
    document.getElementById('res').innerText = '0';
    check.operate = 0;
    check.visio = '';
}
function minus() {
    saverm.operate = check.operate;
    saverm.visio = check.visio;
    document.getElementById('res').innerText = '0';
    check.operate = 0;
    check.visio = '';
}
function ravno() {
    if (saveru.visio != '-000') {
        var p = Number(saveru.operate) * Number(check.operate);
        check.operate = p;
        saveru = new vivod('-000');
    }
    else if (saverd.visio != '-000') {
        var p = Number(saverd.operate) / Number(check.operate);
        check.operate = p;
        saverd = new vivod('-000');
    }
    else if (saverm.visio != '-000') {
        var p = Number(saverm.operate) - Number(check.operate);
        check.operate = p;
        saverm = new vivod('-000');
    }
    else if (saverp.visio != '-000') {
        var p = Number(check.operate) + Number(saverp.operate);
        check.operate = p;
        saverp = new vivod('-000');
    }
    else {
        alert("SBOI SISTEMI!");
    }
    check.visio = check.operate;
    document.getElementById('res').innerText = check.visio;
}
