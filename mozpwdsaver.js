function destroyPwdForm() {
    var formdiv = document.getElementById("mozpwdsaver_id");
    if (formdiv !== null) {
        formdiv.parentNode.removeChild(formdiv);
    }
}

function createPwdForm () {
    // Create div for the stuff
    var formdiv = document.createElement('div');
    formdiv.id = "mozpwdsaver_id";
    formdiv.style.position = 'fixed';
    formdiv.style.right = '0%';
    formdiv.style.top = '0%';
    formdiv.style.border = '5px black solid';
    formdiv.style.zIndex = 10000000;
    formdiv.style.width = '400px';
    formdiv.style.backgroundColor = 'rgba(255, 255, 255, 255)';
    formdiv.style.textAlign = 'center';
    formdiv.style.padding = '0px';
    document.body.appendChild(formdiv);

    var closebtn = document.createElement('p');
    closebtn.style.padding = '0px';
    closebtn.style.margin = '0px';
    closebtn.style.marginTop = '20px';
    closebtn.style.fontSize = '32pt';
    closebtn.innerText = '×';
    closebtn.onclick = destroyPwdForm;
    formdiv.appendChild(closebtn);

    // Prompt
    var title = document.createElement('h2');
    title.innerText = 'Save your password!';
    title.style.fontFamily = 'Arial';
    title.style.color = 'black';
    title.style.fontSize = '24pt';
    title.style.margin = '0px';
    title.style.marginTop = '20px';
    formdiv.appendChild(title);

    // Form
    var lf = document.createElement('form');
    lf.action = 'javascript:';
    lf.onsubmit = function () {
        alert('Now save the entered password using the dialog appearing '  +
            'in the top left');
        destroyPwdForm();
    };

    // Username
    var uname = document.createElement('input');
    uname.type='text';
    uname.required = '';
    uname.placeholder = 'Username';
    uname.style.height = '50px';
    uname.style.width = '360px';
    uname.style.fontSize = '18pt';
    uname.style.border = '1px solid gray';
    uname.style.marginTop = '10px';
    uname.style.marginBottom = '0px';
    uname.style.padding = '5px';
    uname.name='username';

    var br1 = document.createElement('br');

    // Password
    var pwd = document.createElement('input');
    pwd.type = 'password';
    pwd.required = '';
    pwd.placeholder = 'Password';
    pwd.style.height = '50px';
    pwd.style.width = '360px';
    pwd.name = 'password';
    pwd.style.border = '1px solid gray';
    pwd.style.marginTop = '10px';
    pwd.style.padding = '5px';
    pwd.style.fontSize = '18pt';

    var br2 = document.createElement('br');

    // Submit
    var sbm = document.createElement('button');
    sbm.type = 'submit';
    sbm.style.height = '60px';
    sbm.style.width='200px';
    sbm.style.backgroundColor = 'rgba(80, 255, 80, 255)';
    sbm.style.color = 'black';
    sbm.style.fontSize = '20pt';
    sbm.style.marginTop = '10px';
    sbm.style.marginBottom = '10px';
    sbm.innerText = 'Save';

    // Assemble the form
    lf.appendChild(uname);
    lf.appendChild(br1);
    lf.appendChild(pwd);
    lf.appendChild(br2);
    lf.appendChild(sbm);
    formdiv.appendChild(lf);
}

if (document.getElementById('mozpwdsaver_id') === null) {
    createPwdForm();
}
else {
    destroyPwdForm();
}

true;  // bg.js expects some sort of return value
