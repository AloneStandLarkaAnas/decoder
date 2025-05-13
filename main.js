const text_re = document.getElementById("text");
const result = document.getElementById("result");
const select = document.getElementById("select");

text_re.addEventListener("input", makeresult);
select.addEventListener("change", makeresult);

function makeresult() {
    if (select.value !== "decode") {
        result.value = window.btoa(text_re.value);
    } else {
        result.value = window.atob(text_re.value);
    }
}

