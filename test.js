$(".mrpostscan").append("<hr id='pagebrackpoint'/><div class='postscan ripple' title='QR Scane Code'><h2>Read Post by Scan</h2><p>Post Title</p><canvas id='post-qr-code'/><br/></div><a class='qrcreditmr' href='https://www.mrlaboratory.info/2021/06/add-qr-scanner-code-script-to-your.html'>Get Code for You ?</a><div class='linkboxbtn'> <input value='Post Link... '/><button> Copy Link <i aria-hidden='true' class='fa fa-clipboard'/>      </button></div><hr id='pagebrackpoint'/>");
$('head').append('<link rel="stylesheet" type="text/css" href="https://mrlaboratory.github.io/blogger/css/style08.06.21.css">');
var postlinkv = window.location.href;
var postTitlev = document.getElementsByTagName("title")[0].outerText;;
$(".postscan p").text(postTitlev);
var qr;
(function() {
        qr = new QRious({
       element: document.getElementById('post-qr-code'),
        size: 200,
         value: postlinkv
    });
})();
 $(".linkboxbtn input").val(postlinkv);
$(".linkboxbtn button").on("click",function(){
navigator.clipboard.writeText(postlinkv);
// copied
$(".linkboxbtn button").text("Link copied");
 })
