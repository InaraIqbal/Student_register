var student_array=[];
var display_array=[];
var display_sorted_array=[];
function submit()
{
    for(j=1;j<=4;j++){
        var name=document.getElementById("name_of_the_student_"+j).value;
        console.log(name);
        student_array.push(name);
    }
    console.log(student_array);
    var len=student_array.length;
    for(k=0;k<len;k++){
       display_array.push("<h3>Name: "+ student_array[k] +"</h3>");
       console.log(display_array);
    }
    console.log(display_array);
    document.getElementById("display_name_with_commas").innerHTML=display_array;
    
    var remove_commas= display_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sort()
{
    student_array.sort();
    console.log(student_array);
    var length=student_array.length;
    console.log(length);

    for(k=0;k<length;k++){
        display_sorted_array.push("<H3> Name-"+ student_array[k] +"</H3>");
        console.log(display_sorted_array);
    }

    var remove_commas=display_sorted_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}

function new_update()
{
    document.getElementById("display_name_without_commas").innerHTML="<H3>"+ student_array +"</H3>";
}
