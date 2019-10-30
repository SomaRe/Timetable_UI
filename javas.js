
const arr =["A1","F1","D1","TB1","TG1","L6","B1","G1","E1","TC1","TAA1","L12","C1","A1","F1","V1","V2","D1","B1","G1","TE1","TCC1","L24","E1","C1","TA1","TF1","TD1","L30","A2","F2","D2","TB2","TG2","V3","B2","G2","E2","TC2","TAA2","V4","C2","A2","F2","TD2","TBB2","V5","D2","B2","G2","TE2","TCC2","V6","E2","C2","TA2","TF2","TDD2","V7",];

const arrtest =new Array();


function check(){
    for(let i=0;i<arr.length;i++){
    const checkbox = document.getElementById(arr[i]);
if(checkbox.checked == true ){
    document.getElementsByClassName("selected")[i].style.backgroundColor="mediumseagreen";
    
} else {
    document.getElementsByClassName("selected")[i].style.backgroundColor="black";
}
        }};


//WORKING JQUERY
$(document).ready(function(){
    
    $(".slots").hover(function(){
        $(this).css("background-color","grey");
            },
                      function()
                      {
                        for(let i=0;i<arr.length;i++)
                        {
                        var checkbox = document.getElementById(arr[i]);
                        if(checkbox.checked == true )
                        {
                        document.getElementsByClassName("selected")[i].style.backgroundColor="mediumseagreen";
                        } 
                            else 
                        {
                        document.getElementsByClassName("selected")[i].style.backgroundColor="black";
                        }
        
                        }
    
                        }); 
    

        
   
    $("#btn1").click(function(){
        
        for(let i=0, j=0;i<arr.length;i++,j++)
        {
            
        const checkbox = document.getElementById(arr[i]);  
        if(checkbox.checked == true )
        {
        //$("#showtest").append("<li>"+arr[i]+"</li>");
        arrtest[j]=arr[i];
        j=j+1;
        }
            
        }
     
        const sorted = arrtest.filter(function(item,index){
            
        if(arrtest.indexOf(item)== index)
        return item;
            
        });
        
        //$("#showtest").append("<li>"+sorted.length+"</li");
        /*for(let k=0;k<sorted.length;k++)
        {
        //$("#showtest").append("<li>"+sorted[k]+"</li>");
        }*/
         
                });
    

     
 $('#reset').click(function(){
          $('input:checkbox').prop('checked', false);
          check();
          reset()
    });   
    
      
    
function reset(){
    arrtest.length = 0;
    sorted.length = 0;
    $("#p").append(arrtest.length);
};
    
    
 /*$('.check:button').click(function(){
          var checked = !$(this).data('checked');
          $('input:checkbox').prop('checked', checked);
          $(this).val(checked ? 'uncheck all' : 'check all' )
          $(this).data('checked', checked);
          check();
    });
    */
    

    });









    
    




