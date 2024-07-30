const scoresField = document.getElementsByClassName('summaryScore');
const continueButton = document.getElementById('continueButton');
const scoreDesc = document.getElementById('scoreDesc');
const scoreHead = document.getElementById('scoreHead');
const scoreDescMap = new Map([
    ['horribleScore', "You did terrible. No words to say."],
    ["badScore", "You failed. Do better next time."],
    ["ehhScore", "You barely passed the mark. keep trying."],
    ["okayScore", "You scored higher than 65% of the people who have taken these tests."],
    ["greatScore", "Good job. You passed the requirements of this test."],
    ["awesomeScore", "Great job! You are now part of the 10% category!"],
    ["perfectScore", "Awesome Job! You got a pefect score! Pat yourself on the back."]
  ]);
  const scoreHeadMap = new Map([
    ['horribleScore', "Horrible"],
    ['badScore', "Bad"],
    ["ehhScore", "Passable"],
    ["okayScore", "Okay"],
    ["greatScore", "Great"],
    ["awesomeScore", "Awesome"],
    ["perfectScore", "Perfect"]
  ]);

document.addEventListener("DOMContentLoaded", function () {
    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data.length);
            const scoresArray = [];
            continueButton.onclick = () => {
                if (sessionStorage.clickcount) {
                    sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
                  } else {
                    sessionStorage.clickcount = 0;
                    }
                console.log(sessionStorage.clickcount);
                location.reload();
              }
              let z = Number(sessionStorage.clickcount);
              console.log(z);
              if (z === data.length - 1) {
                //resets JSON data back to 0.
                sessionStorage.clear();
              }
                data[z].forEach(post => {
                    scoresArray.push(post.score);
                });  
                displayScores(scoresArray);
                results(scoresArray);
        })
        
        .catch(error => console.error("Error fetching JSON data:", error));
        
});

function displayScores(arrayScores) {
    let x = 0;
    for (let i of scoresField) {
        for (; x < arrayScores.length;) {
            i.textContent = arrayScores[x];
            break;
        }
        x++;
    }
}


async function results(resultsArray) {
    const average = array => array.reduce((a, b) => a + b) / array.length;
    let result = average(resultsArray);
    let resultRounded = Math.round(result);
    console.log(resultRounded);
    console.log(typeof resultRounded);
    if(resultRounded === 0) {
        scoreDesc.textContent = scoreDescMap.get('horribleScore');
        scoreHead.textContent = scoreHeadMap.get('horribleScore');
    } else if (resultRounded <= 50) {
        scoreDesc.textContent = scoreDescMap.get('badScore');
        scoreHead.textContent = scoreHeadMap.get('badScore');
    } else if (resultRounded <= 64) {
        scoreDesc.textContent = scoreDescMap.get('ehhScore');
        scoreHead.textContent = scoreHeadMap.get('ehhScore');
    } else if (resultRounded <= 75) {
        scoreDesc.textContent = scoreDescMap.get('okayScore');
        scoreHead.textContent = scoreHeadMap.get('okayScore');
    } else if (resultRounded <= 89) {
        scoreDesc.textContent = scoreDescMap.get('greatScore');
        scoreHead.textContent = scoreHeadMap.get('greatScore');
    } else if (resultRounded <= 99) {
        scoreDesc.textContent = scoreDescMap.get('awesomeScore');
        scoreHead.textContent = scoreHeadMap.get('awesomeScore');
    }  else if (resultRounded === 100) {
        scoreDesc.textContent = scoreDescMap.get("perfectScore");
        scoreHead.textContent = scoreHeadMap.get('perfectScore');
    }
    let myPromise = new Promise(function(resolve) {
      resolve(resultRounded);
    });
    document.getElementById("result").innerHTML = await myPromise;
  }