/* ==========================================
   HIGH SCHOOL +2 MAI
   Bonafide Application
========================================== */
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz-UoC9MxI-kMFF_PN7zukUwbpoKHU6qkSiou-_xqaT7W73Y1CQFG5nIWrWv6qgJBp0GQ/exec";

const session = document.getElementById("session");
const stream = document.getElementById("stream");
const roll = document.getElementById("roll");
const applicationNo = document.getElementById("applicationNo");

const mobile = document.getElementById("mobile");

const form = document.getElementById("bonafideForm");

/* ==========================================
   Application Number Generator
========================================== */

function createApplicationNumber(){

    let sessionValue = session.value.trim();

    let streamValue = stream.value;

    let rollValue = roll.value.trim();

    if(sessionValue !== "" &&
       streamValue !== "" &&
       rollValue !== ""){

        applicationNo.value =
        sessionValue + "/" +
        streamValue + "/" +
        rollValue;

    }else{

        applicationNo.value = "";

    }

}

session.addEventListener("keyup",createApplicationNumber);

session.addEventListener("change",createApplicationNumber);

stream.addEventListener("change",createApplicationNumber);

roll.addEventListener("keyup",createApplicationNumber);

/* ==========================================
   Mobile Validation
========================================== */

mobile.addEventListener("input",function(){

    this.value=this.value.replace(/[^0-9]/g,'');

    if(this.value.length>10){

        this.value=this.value.slice(0,10);

    }

});

/* ==========================================
   Roll Number Validation
========================================== */

roll.addEventListener("input",function(){

    this.value=this.value.replace(/[^0-9]/g,'');

});

/* ==========================================
   Form Validation
========================================== */

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    if (applicationNo.value == "") {
        alert("Application Number not generated.");
        return;
    }

    if (mobile.value.length != 10) {
        alert("Enter Valid Mobile Number");
        return;
    }

    if (!document.getElementById("agree").checked) {
        alert("Please accept Declaration.");
        return;
    }

    const data = {

        applicationNo: applicationNo.value,

        studentName: document.getElementById("studentName").value,

        fatherName: document.getElementById("fatherName").value,

        motherName: document.getElementById("motherName").value,

        dob: document.getElementById("dob").value,

        gender: document.getElementById("gender").value,

        session: document.getElementById("session").value,

        stream: document.getElementById("stream").value,

        roll: document.getElementById("roll").value,

        studentClass: document.getElementById("studentClass").value,

        mobile: document.getElementById("mobile").value,

        address: document.getElementById("address").value,

        purpose: document.getElementById("purpose").value

    };

    try {

        const response = await fetch(SCRIPT_URL, {

            method: "POST",

            body: JSON.stringify(data),

            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            }

        });

        const result = await response.json();

        if (result.status === "success") {

            alert("Application Submitted Successfully.");

                window.location.href =
                "application.html?app=" +
                encodeURIComponent(data.applicationNo);

        } else {

            alert("Submission Failed.");

        }

    } catch (error) {

        console.log(error);

        alert("Connection Error.");

    }

});
/* ==========================================
   Submit codowan 
========================================== */

const button = document.getElementById("btn");

button.addEventListener("click", codowan_time);

function codowan_time() {

    let time = 10;

    let timer = setInterval(function () {

        document.getElementById("codowan").innerHTML = `⏳ Please wait... ${time} sec`;
        document.getElementById("codowan").style.color="red";

        time--;

        if (time < 0) {
            clearInterval(timer); // Timer बंद
            document.getElementById("codowan").innerHTML = "✅ Done";
        }

    }, 1000);

}
