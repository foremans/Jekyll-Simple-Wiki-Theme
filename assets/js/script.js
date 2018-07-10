//for header height -------------------------------------------------------------------------
var TOCelement = document.getElementById('toc');
var logoImage = document.getElementById('logo_url_a');

function ResizeTocHeight(){
    headerPosition = TOCelement.getBoundingClientRect().top;
    var TOCheight = (window.innerHeight - headerPosition) + "px";
    // console.log(`Inn:${window.innerHeight}, toc:${headerPosition}, tocHeight:${TOCheight}`);
    TOCelement.style.height = TOCheight;
};

if(logoImage){
    logoImage.onload = function(){
        ResizeTocHeight();
    };
}

window.onload = function(){
    ResizeTocHeight();
};

window.onresize = function(){
    ResizeTocHeight();
};

//------------------------------------------------------------------------- /for header height