const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset = "abcdefghijklmnopqrstuvwxyz";
const numberset = "1234567890";
const symbolset = "!@#$%^&*()";


const passbox = document.getElementById("pass-box");
const totalchar = document.getElementById("total-char");
const upperinput = document.getElementById("uppercase");
const lowerinput = document.getElementById("lowercase");
const numberinput = document.getElementById("numbers");
const symbolinput = document.getElementById("symbols");



const getrandomdata = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)]
}

const generatepassword = (password="") => {
    if (upperinput.checked) {
        password += getrandomdata(upperset)
    }
    if (lowerinput.checked) {
        password += getrandomdata(lowerset)
    }
    if (numberinput.checked) {
        password += getrandomdata(numberset)
    }
    if (symbolinput.checked) {
        password += getrandomdata(symbolset)
    }
    if (password.length < totalchar.value) {
        return generatepassword(password);
    }
    passbox.innerText=truncateString(password, totalchar.value);
}





document.getElementById("btn").addEventListener("click",
function () {
    generatepassword();
}
)





function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num)
        return subStr;
    }
    else {
        return str;
    }
}
generatepassword();
