const text = document.getElementById('area');
const counter = document.getElementById("counter")
const text1 = document.getElementById('area-1');
const counter1 = document.getElementById("counter-1")

counter.onmousedown = function(e){
  e.preventDefault();
}


// FIRST ATTEMPT
text.addEventListener('input', function handleChange(event) {
  currentText = event.target.innerText.replace(/<\/span>/g,'').replace(/<span>/g, '')
  counter.value = getWordCount(currentText)
  highlightWord(getLongestWord(currentText), currentText)
});

function getWordCount(text) {
  return text.trim().split(/\s+/g).length;
}

const getLongestWord = (text) => {
  let longestWord = "";
  const stringArray = text.trim().split(/\s+/g);
  stringArray.forEach(string => {
      string.split(" ").forEach(word => {
          longestWord = (word.length > longestWord.length) ? word : longestWord 
      })
  })
  return longestWord
}

function highlightWord(longestWord, currentText){
  text.innerHTML = currentText.replace(longestWord, `<span>${longestWord}</span>`);
}

//SECOND ATTEMPT
function count(){
  console.log(text1)
  const currentText = text1.innerText;
  counter1.value = getWordCount(currentText);
  highlightWord1(getLongestWord(currentText), currentText)

}

function highlightWord1(longestWord, currentText){
  const stringArray = currentText.trim().split(/\s+/g);
  text1.innerHTML = currentText.replace(longestWord, `<span>${longestWord}</span>`);
  if(longestWord === stringArray[stringArray.length-1]){
    text1.innerHTML+="&nbsp;";
}
}