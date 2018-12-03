$('.viewMore').click(function(){
    $(this).text(function(i,old){
        return old=='MORE' ?  'LESS' : 'MORE';
    });
});
