$('.button').on("click", function(){//any button on click
    var input = $('#input').val();//make things in input element to variable input
    if(!input){//check in input is empty
        alert("Please dont click without entering number");//if yes alert them
        return;
    }
    else{//if no use append put inout to the id tasks
        $("#tasks").append(input);
    }
});