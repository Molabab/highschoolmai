/* ==========================================
   RAJKIYEKRIT +2 HIGH SCHOOL MAI
   Bonafide Certificate
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

document.getElementById("todayDate").innerHTML =
new Date().toLocaleDateString("en-IN");

/* ==========================================
   Check Application Number
========================================== */

if (!applicationNo) {

    alert("Application Number Missing.");

    throw new Error("Application Number Missing");

}

/* ==========================================
   Load Student Data
========================================== */

loadCertificate();

async function loadCertificate() {

    try {

        const response = await fetch(
            SCRIPT_URL + "?app=" + encodeURIComponent(applicationNo)
        );

        const data = await response.json();

        if (data.status !== "success") {

            alert("Application Not Found.");

            return;

        }

        fillData(data);

    }

    catch (error) {

        console.log(error);

        alert("Unable to Load Certificate.");

    }

}

/* ==========================================
   Safe Fill Function
========================================== */

function setValue(id, value) {

    const el = document.getElementById(id);

    if (el) {

        el.innerHTML = value || "";

    }

}

/* ==========================================
   Fill Certificate Data
========================================== */

function fillData(data) {

    setValue("applicationNo", data.applicationNo);

    setValue("studentName", data.studentName);
    setValue("studentName2", data.studentName);

    setValue("fatherName", data.fatherName);
    setValue("fatherName2", data.fatherName);

    setValue("motherName", data.motherName);

    setValue("dob",
        data.dob ? data.dob.split("T")[0] : "");

    setValue("admissionDate",
        data.admissionDate
        ? data.admissionDate.split("T")[0]
        : "");

    setValue("bsebRegNo", data.bsebRegNo);
    setValue("bsebRegNo2", data.bsebRegNo);

    setValue("category", data.category);

    setValue("session", data.session);
    setValue("session2", data.session);

    setValue("stream", data.stream);
    setValue("stream2", data.stream);

    setValue("studentClass", data.studentClass);

    setValue("completionYear", data.completionYear);

}