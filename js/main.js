let pageArr = document.querySelectorAll(".quiz-form_content_page");
let counter = 1;
let pageCurr = pageArr[0];
let counterOut = document.querySelector(".quiz-form_counter");
let buttonsFooter = document.querySelector(".quiz-form_footer");
let prev = document.querySelector(".quiz_prev");
let next = document.querySelector(".quiz_next");



next.onclick = (e) => {
  if(counter !== pageArr.length){
    counter++;
  }
  pageChanger();
}
prev.onclick = (e) => {
  if (counter !== 1) {
    counter--;
  }
  pageChanger();
}



// page changer function:
let pageChanger = () => {
  counterOut.innerHTML = counter + "/" + pageArr.length;

  for (let i = 0; i < pageArr.length; i++) {
    if(i == counter - 1){
      pageArr[i].style.display = "block";
    }
    else{
      pageArr[i].style.display = "none";
    }
  }

  if (counter == pageArr.length){
    next.innerHTML = "Done";
  }
  else if (counter == 1){
    prev.style.display = "none";
    next.innerHTML = "Next";
    buttonsFooter.style.flexDirection = "row-reverse";
  }
  else{
    next.style.display = "block";
    prev.style.display = "block";
    next.innerHTML = "Next";
    buttonsFooter.style.flexDirection = "row";
  }


}
pageChanger();




// console.log(pageArr);
// console.log(pageCurr);
