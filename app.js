const ads = document.querySelectorAll('.ed-block');
const bubble = document.querySelector('.eventBubble');
let eventLog = [];
let preconinit = false;

const dynamicPreconn = function(){
    if(!preconinit){
        let linkDns = document.createElement('link');
        linkDns.setAttribute("rel", "dns-prefetch");
        linkDns.setAttribute("href", "https://www.nissanusa.com/");
        
        let preConn = document.createElement('link');
        preConn.setAttribute("rel", "preconnect");
        preConn.setAttribute("href", "https://www.nissanusa.com/");
        
        document.querySelector('head').appendChild(linkDns);
        document.querySelector('head').appendChild(preConn);

        preconinit = true;
    }
}

const showEvents = function(){
    bubble.textContent = eventLog.toString(','); 
}

    let debounceTimer;
    // dynamicPreconn();
    window.onscroll = function () {  
        window.clearTimeout(debounceTimer);
        debounceTimer = window.setTimeout(function(){
            eventLog.push('scrolled');
            showEvents();
                dynamicPreconn();

        }, 300);
    } 

    function getClassName(e){
        let element = e.target.classList; 
        eventLog.push(`ad clicked : ${element}`);
        // e.preventDefault();
        showEvents();
    }

    document.addEventListener('touchstart', function(){
        eventLog.push(`touch Start`);
        dynamicPreconn();
        showEvents();
    })

    window.addEventListener('orientationchange', function(){
        eventLog.push(`Orientation changed`);
        showEvents();
    })

    window.setTimeout(function(){
        dynamicPreconn();
    }, 3000);

    document.addEventListener('touchend', function(){
        eventLog.push(`touch end`);
        showEvents();
    })

    ads.forEach(ad => ad.addEventListener('click', getClassName));