function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}


function getXSRFToken() {
    let token = getCookie("XSRF-TOKEN");
    if (token == "" || token == null || token == undefined) {
        return "";
    } else {
        return token;
    }
}

function CheckXSRF() {
    let token = getXSRFToken();
    if (token == "") {
        return false;
    } else {
        return true;
    }
}

export default CheckXSRF