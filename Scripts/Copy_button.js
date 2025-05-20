//Button feature to copy to the clipboard the password


function copyButton () {

    const pwd = document.getElementById("pwd_Result").innerText;
    navigator.clipboard.writeText(pwd)

    console.log("Copying the password to the client's clipboard")

}