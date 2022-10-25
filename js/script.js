//https://api.telegram.org/bottoken/getUpdates

$('#button') .on('click',function(e){
    e.preventDefault();

    let name=$('#name').val().trim();
    let email=$('#email').val().trim();

    if(name==''){
        $('#error-name').text('Enter your name')
    }else if(email==''){
        $('#error-email').text('Enter your email')
    }


    $.ajax({
        url:'ajax/telegram.php',
        type:'POST',
        cache:false,
        data:{'email':email,'name':name},
        dataType:'html',
        success:function(){
            $('#name').val('');
            $('#email').val('');
        }

    })
})