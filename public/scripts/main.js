var request = new XMLHttpRequest();
request.open('GET', '/data', true);

request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        var obj = data.items;

        var work = document.getElementById('work');
        work.innerText = obj[0].label;

        var about = document.getElementById('about');
        about.innerText = obj[1].label;

        var careers = document.getElementById('careers');
        careers.innerText = obj[2].label;



        console.log(obj[2].items[0].label)


        var ideas = document.getElementById('ideas');
        ideas.innerText = obj[3].label;

        var news = document.getElementById('news');
        news.innerText = obj[4].label;

        var events = document.getElementById('events');
        events.innerText = obj[5].label;

        var contact = document.getElementById('contact');
        contact.innerText = obj[6].label;



    } else {
        // We reached our target server, but it returned an error

    }
};

request.onerror = function() {
    console.log('Something went wrong, its a HUGE problem!')
};

request.send();