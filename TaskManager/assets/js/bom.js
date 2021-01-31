var list = document.querySelectorAll(".collection");
location_info(list[0]);
browser_info(list[1]);
screen_info(list[2]);
browsing_history(list[3]);



function location_info(node){
    node.children[0].lastElementChild.innerText = location.href;
    node.children[1].lastElementChild.innerText = location.protocol;
    node.children[2].lastElementChild.innerText = location.host;
    node.children[3].lastElementChild.innerText = location.port;
    node.children[4].lastElementChild.innerText = location.hostname;
}

function browser_info(node){
    node.children[0].lastElementChild.innerText = navigator.appName;
    node.children[1].lastElementChild.innerText = navigator.appVersion;
    node.children[2].lastElementChild.innerText = navigator.platform;
    node.children[3].lastElementChild.innerText = navigator.language; 
    node.children[4].lastElementChild.innerText = navigator.cookieEnabled;
}

function screen_info(node){
    node.children[0].lastElementChild.innerText = screen.height;
    node.children[1].lastElementChild.innerText = screen.width;
    node.children[2].lastElementChild.innerText = screen.pixelDepth;

}

function browsing_history(node){
    history.pushState({name:'Example'},"history state","index.html");
    node.children[0].lastElementChild.innerText = history.length;
    node.children[1].lastElementChild.innerText = history.state;

}