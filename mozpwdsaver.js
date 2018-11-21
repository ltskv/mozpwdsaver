function destroyPwdForm() {
    var formdiv = document.getElementById("mozpwdsaver_id");
    if (formdiv !== null) {
        formdiv.parentNode.removeChild(formdiv);
    }
}

function createPwdForm () {
    // You can never be too safe
    if (document.getElementById('mozpwdsaver_id') !== null) {
        return;
    }

    // Create div for the stuff
    var formdiv = document.createElement('div');
    formdiv.id = "mozpwdsaver_id";
    formdiv.classList.add('ignore-initial-css');
    // Necessary style
    formdiv.style.position = 'fixed';
    formdiv.style.right = '0%';
    formdiv.style.top = '0%';
    formdiv.style.zIndex = 10000000;

    // Close button
    var closebtn = document.createElement('div');
    closebtn.innerText = '×';
    closebtn.onclick = destroyPwdForm;

    // Prompt
    var title = document.createElement('h2');
    title.innerText = 'Save your password!';

    // Login Form
    var lf = document.createElement('form');
    lf.action = 'javascript:';
    lf.onsubmit = function () {
        alert('Now save the entered password using the dialog appearing '  +
            'in the top left');
        destroyPwdForm();
    };

    // Username field
    var uname = document.createElement('input');
    uname.name='username';
    uname.type='text';
    uname.required = true;
    uname.placeholder = 'Username';

    // Line break
    var br1 = document.createElement('br');

    // Password field
    var pwd = document.createElement('input');
    pwd.name = 'password';
    pwd.type = 'password';
    pwd.required = true;
    pwd.placeholder = 'Password';

    // Line break
    var br2 = document.createElement('br');

    // Submit button
    var sbm = document.createElement('button');
    sbm.type = 'submit';
    sbm.innerText = 'Save';

    // Assemble the form
    lf.appendChild(uname);
    lf.appendChild(br1);
    lf.appendChild(pwd);
    lf.appendChild(br2);
    lf.appendChild(sbm);
    formdiv.appendChild(closebtn);
    formdiv.appendChild(title);
    formdiv.appendChild(lf);
    document.body.appendChild(formdiv);

    // ----------------------------------------------------------------------
    // ----------------------- HERE COME THE STYLES -------------------------
    // ----------------------------------------------------------------------

    // First, massive cleanup
    [formdiv, closebtn, title, lf, uname, pwd, sbm].forEach( function (el) {
        el.style.fontFamily = 'Arial';
        el.style.fontWeight = 'bold';
        el.style.color = 'black';
        el.style.margin = '0px';
        el.style.padding = '0px';
        el.style.boxSizing = 'border-box';
        el.style.border = 'none';
        el.style.borderRadius = '0px';
        el.style.minHeight = '0px';
    });

    formdiv.style.border = '5px black solid';
    formdiv.style.width = '400px';
    formdiv.style.backgroundColor = 'rgba(255, 255, 255, 255)';
    formdiv.style.textAlign = 'center';

    closebtn.style.marginTop = '5px';
    closebtn.style.marginBottom = '5px';
    closebtn.style.fontSize = '40pt';
    closebtn.style.lineHeight = '40pt';
    closebtn.style.cursor = 'pointer';
    closebtn.style.display = 'inline-block';

    title.style.lineHeight = '24pt';
    title.style.fontSize = '24pt';
    title.style.marginBottom = '15px';

    [uname, pwd].forEach(function (el) {
        el.style.height = '50px';
        el.style.width = '360px';
        el.style.fontSize = '18pt';
        el.style.lineHeight = '18pt';
        el.style.border = '1px solid gray';
        el.style.padding = '5px';
    });

    uname.style.marginBottom = '5px';

    sbm.style.height = '50px';
    sbm.style.width='200px';
    sbm.style.backgroundColor = 'rgba(80, 255, 80, 255)';
    sbm.style.cursor = 'pointer';
    sbm.style.fontSize = '20pt';
    sbm.style.lineHeight = '20pt';
    sbm.style.marginTop = '15px';
    sbm.style.marginBottom = '15px';
}

if (document.getElementById('mozpwdsaver_id') === null) {
    createPwdForm();
}
else {
    destroyPwdForm();
}

true;  // bg.js expects some sort of return value
