/**
 * Created by Dell on 2016/12/21.
 */

var position=0;


$("#signIn").click(function(){
    $("#wallpaper").animate({
        left:'-300px'
    },500);

    $("#shade").css({zIndex:'3'}).animate({
        left:'-300px',
        opacity: 0.5
    },500);

});

$("#return,#shade").click(function(){
    $("#wallpaper").animate({
        left:'0'
    },500);

    $("#shade").animate({
        left:'0',
        opacity: 0,
        zIndex:'1'
    },500);

});

$("#point1").click(function(){
    $("#point1,#point2,#point3").css({
        backgroundColor:'#dd3636'
    }).animate({
        height:'5px',
        width:'5px'
    },0);
    $("#point1").css({
        backgroundColor:'#ffffff'
    }).animate({
        height:'10px',
        width:'10px'
    });
    position=0;
    $("#item1").animate({
        left:(-368*position)+"px"
    });
    $("#item2").animate({
        left:(-368*position)+"px"
    });
    $("#item3").animate({
        left:(-368*position)+"px"
    });
});

$("#point2").click(function(){
    $("#point1,#point2,#point3").css({
        backgroundColor:'#dd3636'
    }).animate({
        height:'5px',
        width:'5px'
    },0);
    $("#point2").css({
        backgroundColor:'#ffffff'
    }).animate({
        height:'10px',
        width:'10px'
    });
    position=1;
    $("#item1").animate({
        left:(-368*position)+"px"
    });
    $("#item2").animate({
        left:(-368*position)+"px"
    });
    $("#item3").animate({
        left:(-368*position)+"px"
    });
});

$("#point3").click(function(){
    $("#point1,#point2,#point3").css({
        backgroundColor:'#dd3636'
    }).animate({
        height:'5px',
        width:'5px'
    },0);
    $("#point3").css({
        backgroundColor:'#ffffff'
    }).animate({
        height:'10px',
        width:'10px'
    });
    position=2;
    $("#item1").animate({
        left:(-368*position)+"px"
    });
    $("#item2").animate({
        left:(-368*position)+"px"
    });
    $("#item3").animate({
        left:(-368*position)+"px"
    });
});