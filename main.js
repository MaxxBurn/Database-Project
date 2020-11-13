function failLogin(){
    alert('Wrong user/password');
    
}
function okLogin(){
    alert('Authorized login');
}

function login(user, password, db){
    for (var x in db.users){
        if(user == db.users[x].name && password == db.users[x].password){
            return okLogin();
        }
        return failLogin();
    }
}
async function getData(url){
    const req = await fetch(url);
    return req.json();
  }
  
async function init(){
    const data = await getData(`https://raw.githubusercontent.com/MaxxBurn/im-sad/main/database.json`);
    console.log(data);
    userInfo(data);
}

function userInfo(db){
    let x = prompt('Please input your username: ');
    let y = prompt('Please input your password: ');
    login(x, y, db);
}

init();