import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}



  let body = document.querySelector('body');

  body.addEventListener('click', function(){
    // let main = document.querySelector('.main')

    for(let i = 0; i < 5; i++){
      let article = document.createElement('article');
      let articleText = makeid(5)
      article.innerText = articleText;
      article.classList.add('message')
      body.prepend(article);
    }
  })

});
