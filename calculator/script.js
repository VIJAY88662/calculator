function appendtodisplay(value){
 document.getElementById("display").value+=value;   
}


function cleardisplay()
{
    document.getElementById("display").value=""; 
}

function calculateresult()
{
    try{ document.getElementById("display").value= eval(document.getElementById("display").value);
    }
    catch (error){
        document.getElementById("display").value="error";

    }
   
}