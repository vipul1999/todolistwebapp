$("ul").on("click","li",function(){
  $(this).toggleClass("completed");
	
});
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
	if(event.which===13 && $(this).val()!=="")
	{
	 //grabbing string that is in input
	 var todotext=$(this).val();
	 $("ul").append("<li><span><i class='far fa-trash-alt'></i></span>"+todotext+"</li>");
	 $(this).val("");
	}
})

$(".fa-plus-circle").click(function(){
	$("input[type='text']").fadeToggle();
})