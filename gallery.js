window.addEventListener('DOMContentLoaded', function(){
    if(window.localStorage){            //sprawdzamy czy mamy cos w LS
            LS=1;
            var Like = [];
            if(localStorage.getItem('likes')){
                loadLikes();
            }
        function loadLikes() {
            Like = JSON.parse(localStorage.likes);
            for(let i=0;i<Like.length;i++){
                if(Like[i]!=0){
                let addId = document.getElementById(Like[i]);
                addId.classList.add('like');
                }
            }
        }
        function giveLikes(photoId) {
            let istnieje=0;
            for(let i = 0;i < Like.length; i++){
                    if(Like[i]==photoId){
                    istnieje=1;
                    Like.splice(i,1);
                    }
                }
            if(istnieje==0){
                Like[Like.length]=photoId;
            }
            
        localStorage.clear;
        localStorage.likes = JSON.stringify(Like); 
        }

        
        var serca = document.querySelectorAll('.heart');
        serca.forEach(function(event){
            event.addEventListener('click',like);
        });
        function like(){
        this.classList.toggle('like');
        let photoId = (this.id);
        giveLikes(photoId);
        }
    }/////////////////LOCAL STORAGE OPERATIONS///////////////////////

    howManyPerRow.addEventListener('change', function(){
        let ile = howManyPerRow.value;
        document.querySelector('.gridGall').style.gridTemplateColumns="repeat("+ile+", 1fr)";
    })
    

});