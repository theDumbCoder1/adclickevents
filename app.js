const ads = document.querySelectorAll('.ed-block');
const bubble = document.querySelector('.eventBubble');
let eventLog = [];
let firstScroll = true;

const dynamicPreconn = function(){
    if(firstScroll){
        let linkDns = document.createElement('link');
        linkDns.setAttribute("rel", "dns-prefetch");
        linkDns.setAttribute("href", "https://www.nissanusa.com/");
        
        let preConn = document.createElement('link');
        preConn.setAttribute("rel", "preconnect");
        preConn.setAttribute("href", "https://www.nissanusa.com/");
        
        document.querySelector('head').appendChild(linkDns);
        document.querySelector('head').appendChild(preConn);

        firstScroll = false;
    }
}

const showEvents = function(){
    bubble.textContent = eventLog.toString(','); 
}

window.addEventListener('load', function() {
    let debounceTimer;
    // dynamicPreconn();
    window.onscroll = function () {  
        window.clearTimeout(debounceTimer);
        debounceTimer = window.setTimeout(function(){
            eventLog.push('scrolled');
            showEvents()
        }, 300);
        
    } 

    function getClassName(e){
        let element = e.target.classList; 
        eventLog.push(`ad clicked : ${element}`);
        // e.preventDefault();
        showEvents()
    }

    document.addEventListener('touchstart', function(){
        eventLog.push(`Document touch Start`);
        dynamicPreconn();
        showEvents()
    })

    document.addEventListener('touchend', function(){
        eventLog.push(`Document touch end`);
        showEvents();
    })
   

    ads.forEach(ad => ad.addEventListener('click', getClassName));
        
})



