function changeColorByWeekday(){
    var date=new Date();
    // 0-6代表周日到周六
    var day=date.getDay();
    var schemes=new Array("sun","mon","tues","wed","thur","fri","sat",);
    var colors=new Array("lime","deep orange","indigo","yellow","teal","pink","blue grey");
    var color=new Array("brown","green","orange","amber","red","cyan","yellow")
    if (document.body.getAttribute("data-md-color-scheme") != schemes[day]) {
        document.body.setAttribute("data-md-color-scheme", schemes[day]);
        var local_json = {
            'index': day,
            'color': {
                "scheme":schemes[day],
                "primary":colors[day],
                "accent": color[day]
            }
        };
        // 把更改存储到本地
        window.localStorage.setItem('/.__palette', JSON.stringify(local_json));
        // 刷新页面
        location.reload();
    }
}

window.addEventListener("load", changeColorByWeekday);