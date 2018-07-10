//for Style -------------------------------------------------------------------------
var TOCelement = document.getElementById('toc');
var logoImage = document.getElementById('logo_url_a');

var titleLeftObj = document.getElementById('titleLeft');
var titleRightObj = document.getElementById('titleRight');

function ResizeTOCHeight(){
    // only desktop
    if(window.innerWidth > 960){
        headerPosition = TOCelement.getBoundingClientRect().top;
    var TOCheight = (window.innerHeight - headerPosition) + "px";
    // console.log(`Inn:${window.innerHeight}, toc:${headerPosition}, tocHeight:${TOCheight}`);
    TOCelement.style.height = TOCheight;
    }
};

function ResizeTitleBar(){
    // console.log(`window.innerWidth:${window.innerWidth}, titleRightObj.clientWidth:${titleRightObj.clientWidth}, titleLeftObj.style.width:${titleLeftObj.style.width}`);
    titleLeftObj.style.width = (window.innerWidth - titleRightObj.clientWidth - 20) + "px";
}

if(logoImage){
    logoImage.onload = function(){
        ResizeTOCHeight();
        ResizeTitleBar();
    };
}

window.onload = function(){
    ResizeTOCHeight();
    ResizeTitleBar();
};

window.onresize = function(){
    ResizeTOCHeight();
    ResizeTitleBar();
};

//------------------------------------------------------------------------- /for Style
