$(function() {
    loadContent();
});

function loadContent() {
    $.getJSON( "data.json", function( data ) {

        const img = new Image();
        const body = {
            width: 1024,
            height: 600
        }
        const content = $("#content").add("img")
        content.hide()
        img.src = data.content.src;

        img.onload = function() {
            const constraints = {
                width: this.width * (data.content.size / 100),
                height: this.height * (data.content.size / 100),
            }
            const position = {
                top: (body.height - constraints.height) / 2,
                left: (body.width - constraints.width) / 2
            }

            content.width(constraints.width).height(constraints.height);
            content.css({top: position.top + "px", left: position.left + "px"});
            content.fadeIn("slow")
        }

        content.attr("src",img.src);

        setTimeout(loadContent, 10000);
    });
}


