/* ==========================================
   RAJKIYEKRIT +2 HIGH SCHOOL MAI
   Application Preview
========================================== */

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz-UoC9MxI-kMFF_PN7zukUwbpoKHU6qkSiou-_xqaT7W73Y1CQFG5nIWrWv6qgJBp0GQ/exec";

/* ==========================================
   Get Application Number
========================================== */

const params = new URLSearchParams(window.location.search);

const applicationNo = params.get("app");

/* ==========================================
   Today's Date
========================================== */

const today = new Date();

document.getElementById("todayDate").innerHTML =
today.toLocaleDateString("en-IN");

/* ==========================================
   If Application Number Missing
========================================== */

if(!applicationNo){

    alert("Application Number Missing.");

    throw new Error("No Application Number");

}

/* ==========================================
   Fetch Student Data
========================================== */

loadApplication();

async function loadApplication(){

    try{

        const response = await fetch(

            SCRIPT_URL + "?app=" + encodeURIComponent(applicationNo)

        );

        const data = await response.json();

        if(data.status!="success"){

            alert("Application Not Found.");

            return;

        }

        fillData(data);

    }

    catch(error){

        console.log(error);

        alert("Unable to Load Application.");

    }

}
/* ==========================================
   Fill Student Data
========================================== */

function fillData(data){

    document.getElementById("applicationNo").innerHTML =
    data.applicationNo;

    document.getElementById("studentName").innerHTML =
    data.studentName;

    document.getElementById("fatherName").innerHTML =
    data.fatherName;

    document.getElementById("motherName").innerHTML =
    data.motherName;

    document.getElementById("dob").innerHTML =
    data.dob.split("T")[0];

    document.getElementById("bsebRegNo").innerHTML =
    data.bsebRegNo;

    document.getElementById("category").innerHTML =
    data.category;

    document.getElementById("gender").innerHTML =
    data.gender;

    document.getElementById("studentClass").innerHTML =
    data.studentClass;

    document.getElementById("admissionDate").innerHTML =
    data.admissionDate ? data.admissionDate.split("T")[0] : "";

    document.getElementById("completionYear").innerHTML =
    data.completionYear;

    document.getElementById("session").innerHTML =
    data.session;

    document.getElementById("stream").innerHTML =
    data.stream;

    document.getElementById("roll").innerHTML =
    data.roll;

    document.getElementById("mobile").innerHTML =
    data.mobile;
    
    document.getElementById("email").innerHTML =
    data.email;

    document.getElementById("address").innerHTML =
    data.address;

    document.getElementById("purpose").innerHTML =
    data.purpose;

}