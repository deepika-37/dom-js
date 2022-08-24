// 1. Write the code to access element which is having id as "text"
const e1=document.getElementById ("text");
console.log(e1.innerText);

// 2. Write the code to access element which is having tag as "h1"
const e2 = document.getElementsByTagName("h1");
console.log(e2[0].innerText);

// 3. write the code to access element which is having class as "box".
const e3 =  document.getElementsByClassName("box");
console.log(e3[0].innerText);

// 4. "<h1>Hello </h1>
//Change the heading from ""Hello"" to ""Hello World"" using DOM functions"
function changeMe(){
    let change =  document.getElementsByClassName("change");
     change[0].innerText='Hello World';
    //console.log(change[0].innerText);
}

// 5. Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.
 function direction(){
    e4 = document.getElementsByClassName("container");
    e4[0].style.flexDirection  = "column";
 }

/* What’s the difference between window vs document?
    Document Object: The document object represent a web page that is loaded
        in the browser. By accessing the document object, we can access the
        element in the HTML page. With the help of document objects,
        we can add dynamic content to our web page. The document object
        can be accessed with a window.document or just document.
    Window Object: The window object is the topmost object of the DOM hierarchy.
        It represents a browser window or frame that displays the contents of the
        webpage. Whenever a window appears on the screen to display the contents
        of the document, the window object is created. */
 

 // 7. "<h1>Hello </h1>
//Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"
const element = document.getElementById("heading");
element.style.color ="red";


// 8. Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"
function changeText(){
    const e5 = document.getElementsByTagName("p");
    e5[0].innerText = "Welcome to Elevation academy";
}

// 9. Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second
function displayclock (){
    let time = new Date();
  let hrs = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  
  
  if(hrs>12){
    hrs = hrs -12;
  }
  
    if(hrs==0){
      hrs = 12;
    }
    document.getElementById("clock").innerHTML = hrs + ":" + min + ":" + sec;
  }
  
  setInterval(displayclock,1000)



  // 10. Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected
  function yearChange() {
    let selectedYear = document.getElementById("yearSelect").value;
    document.getElementById("year").innerText = selectedYear;
}

// 11. "Create a form having name ,email, phone no. , birth year 
//Add validations - phone no. should start with 91 , it should be 10 digits
//email should be domain prepbytes.com
//birth year should be > 95"
function emailCheck() {
    let a = document.getElementById("email").value;
    if (!a.endsWith("prepbytes.com")) {
        let b = document.getElementById("emailcheck");
        b.style.display = "inline";
    } else {
        let b = document.getElementById("emailcheck");
        b.style.display = "none";
    }
}

function numberCheck() {
    let a = document.getElementById("phoneno").value;
    if (!a.startsWith("91")) {
        let b = document.getElementById("startcheck");
        b.style.display = "inline";

    } else {
        let b = document.getElementById("startcheck");
        b.style.display = "none";
    }
    if (a.length == 10) {
        let b = document.getElementById("digitcheck");
        b.style.display = "inline";
    } else {
        let b = document.getElementById("digitcheck");
        b.style.display = "none";
    }
}

function bYearCheck() {
    let a = document.getElementById("byear").value;
    if (a < 1995) {
        let b = document.getElementById("byearcheck");
        b.style.display = "inline";
    } else {
        let b = document.getElementById("byearcheck");
        b.style.display = "none";
    }
}