var myFunction = function(link){
    window.open(link)
    
}

$(".gitlink0").on("click", function(){
    myFunction($(this).attr("link"))
})
    