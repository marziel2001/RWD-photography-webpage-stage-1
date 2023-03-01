window.addEventListener('DOMContentLoaded', function(){
    
    var rodzaj = 1;

    orderMore.addEventListener('click', addOption);
        
    function addOption(){
        let swap;
        let box = document.createDocumentFragment();
        rodzaj++;

        swap = document.querySelector('label[for="rodzaj1"]').cloneNode(true);
        swap.setAttribute('for','rodzaj'+rodzaj+'');
        box.appendChild(swap);

        swap = document.querySelector('select#rodzaj1').cloneNode(true);
        swap.setAttribute('id','rodzaj'+rodzaj+'');
        box.appendChild(swap);
        swap = document.createElement('br');
        box.appendChild(swap);

        swap = document.querySelector('label[for="ilosc1"]').cloneNode(true);
        swap.setAttribute('for','ilosc'+rodzaj+'');
        box.appendChild(swap);
    
        swap = document.querySelector('input#ilosc1').cloneNode(true);
        swap.setAttribute('id','ilosc'+rodzaj+'');
        swap.value = 0;
        console.log(swap);
        box.appendChild(swap);
        swap = document.createElement('br');
        box.appendChild(swap);
      
        formularz.insertBefore(box,orderMore);

        let max = document.querySelectorAll('#rodzaj1 option').length;
        if(rodzaj==max){
            orderMore.removeEventListener('click',addOption);
        }
        waliduj();
    }
        
    order.addEventListener('click', countPrice);

    function countPrice(){
    var sum = 0;
    let cenaOdb, ilOdb;
        for(let i = 1; i <= rodzaj; i++){
            cenaOdb = document.querySelector('#rodzaj'+i).value;
            ilOdb = document.querySelector('#ilosc'+i).value;
           sum+=cenaOdb*ilOdb;
        }
        if(kupon.checked){
            sum=0.9*sum;
        }

        sum=Math.floor(sum);
        
        let klocek;
        klocek = document.createElement('span');
        klocek.appendChild(document.createTextNode("Koszt odbitek wynosi: "+sum+"zł"));

        if(sum>0){
        dialog.textContent = "";
        dialog.appendChild(document.createElement('br'));
        dialog.appendChild(klocek);
        $( "#dialog").dialog( "open" );
        }

        
    }
    
function waliduj(){
    var inputy = document.querySelectorAll('input[type="number"]');
    inputy.forEach(function(event){
        event.addEventListener('change',validate);
    });
    function validate(){
      if(this.value<0){
        this.value=0;
        }
    }
}
    $( "#dialog" ).dialog({ autoOpen: false });
    
})