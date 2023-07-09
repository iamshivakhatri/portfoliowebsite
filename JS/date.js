/**
 * when we get the date by using
 * .getDate(); it gets the date in the utc
 * it converts the date in the UTC(Coordinated Universal Time) to the timezone you are using the laptop
 */

/** 
document.getElementById("downloadButton").addEventListener("click", function() {
    const pdfUrl = "PDF/shivakhatri-Resume.pdf"; // Replace with the actual path to your PDF file
    const fileName = "shivakhatri-Resume.pdf"; // Replace with the desired filename for the downloaded PDF
    
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank";
    link.download = fileName;
    
    // Simulate a click on the anchor element to trigger the download
    link.click();
  });
  */

  $(document).on("scroll", function () {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tags = $(".fadein")

    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i]

      if ($(tag).offset().top < pageBottom) {
        $(tag).addClass("visible")
      } else {
        $(tag).removeClass("visible")
      }
    }
  })

  document.getElementById("downloadButton").addEventListener("click", function() {
    const pdfUrl = "PDF/shivakhatri-Resume.pdf"; // Replace with the actual path to your PDF file
  
    // Open the PDF in a new tab or window
    window.open(pdfUrl, "_blank");
  });
  



let result = document.getElementById("result2");
let tDate = new Date();

    let d1 = 26;
    let m1 = 5;
    let y1 = 2001;
    let d2 = tDate.getDate();
    let m2 = tDate.getMonth()+1;
    let y2 = tDate.getFullYear();
    let min2 = tDate.getMinutes();
    let h2 = tDate.getHours();
    let s2 = tDate.getSeconds();

    let d3, m3, y3;
    y3 = y2 - y1; 

    if(m2 >= m1){
        m3 = m2- m1;
    }else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1){
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = 30 + d2 -d1; 

    } 
    if(m3<0){
        y3--;
        m3 = 11;
    }

      function updatemainSeconds(){
        let now = new Date();
        let h2 = now.getHours();
        let min2 = now.getMinutes();
        let s2 = now.getSeconds();

        result.innerHTML = ` I am <span class = "red"> ${y3} </span> years,<span class = "red"> ${m3} </span> months, <span class = "red"> ${d3} </span>days,
        <span class = "red"> ${h2} </span> hours, ${min2} minutes, <span class = "red"> ${s2} </span> seconds old.`;
        

      }

      setInterval(updatemainSeconds, 1000);


/**
 * 
 * 
   


function calculateAge(){
    let birthDate = new Date(userInput.value);
    let d1 = birthDate.getUTCDate();
    let m1 = birthDate.getUTCMonth() +1;
    let y1 = birthDate.getUTCFullYear();
    console.log("Input Values:", d1, m1, y1);


    let todayDate = new Date();
    let d2 = todayDate.getDate();
    let m2 = todayDate.getMonth()+1;
    let y2 = todayDate.getFullYear();

    let min2 = todayDate.getMinutes();
    let h2 = todayDate.getHours();
    let s2 = todayDate.getSeconds();

    

    let d3, m3, y3;
    y3 = y2 - y1; 

    if(m2 >= m1){
        m3 = m2- m1;
    }else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1){
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = 30 + d2 -d1; //how much short is the day to be 30  if birthday is on 10 and we are at 9 so it i one more day for birthday
                            // so 30 - 1 and to get 1 we do d2 -d1

                            //using getlastDay will help us track of extra days or less days because
                            // we think 30 days a month so do claculation so if birth  month was 28 like may 28 and at june 28 we think it as
                            //30 days but it is not the case we have find the month last day of birth month 
                            //if it is 31 and we are 10 more days to get birthdate then we subract 31 - 10 because we will have 21 days already
                            //because there was one day extra on birthday month.
    } 
    if(m3<0){
        y3--;
        m3 = 11;
    }

    if(m3 == 0 && d3 == 0){
        result.innerHTML  = `Congratulations, Happy birthday to you..
        <br> you are ${y3} years old.`;
        console.log("Happy birthday to you");
    }else{
        result.innerHTML = `You are ${y3} years, ${m3} months and ${d3} days old`;
        result1.innerHTML = `You are ${h2} hours, ${min2} minutes, ${s2} seconds`
    }

    function updateSeconds() {
        let now = new Date();
        let h2 = now.getHours();
        let min2 = now.getMinutes();
        let s2 = now.getSeconds();
        result1.innerHTML = `You are ${h2} hours, ${min2} minutes, ${s2} seconds`
      }
      
      // Update the seconds every second
      setInterval(updateSeconds, 1000);

}

function getlastDay(year,month){
    return new Date(year,month,0).getDate();
}

 */   

