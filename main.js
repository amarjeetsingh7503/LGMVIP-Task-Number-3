const myForm = document.getElementById("myForm");

    
var img = document.createElement("img");
img.id="preview_img";
const uploaded_img = document.getElementById("img");
let uploaded_img_src="";

uploaded_img.addEventListener("change",e=>{
    uploaded_img_src=URL.createObjectURL(e.target.files[0]);
});

myForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    alert("Student Enrolled!");
   var std_result = document.getElementById("std_result"); ;
   
   var t_row = document.getElementById("t_row");
   t_row.style.display="inline-flex";

   var e_row = document.createElement("div");
   e_row.classList.add("enroll", "row");
   e_row.id="std_row";
   std_result.appendChild(e_row);
   var std_row1 = document.getElementById("std_row");

   //Data of Enrolled Student
   var e_data = document.createElement("div");
   e_data.classList.add("e_data", "coloumn");
   e_data.id = "e_std_data";
   std_row1.appendChild(e_data);
   var e_std_data = document.getElementById("e_std_data");

   //Enrolled Student Name
   const e_name = document.createElement("p");
   e_name.id="e_name";
   e_name.innerText = document.getElementById("name").value;
   e_std_data.appendChild(e_name);

   //Enrolled Student Gender
   const e_gender = document.createElement("p");
   e_gender.id="e_gender";
   var e_radio = document.getElementsByName("gender");
   for(i=0 ; i<e_radio.length ; i++){
       if(e_radio[i].checked){
            e_gender.innerHTML = e_radio[i].value;
       }
   }
   e_std_data.appendChild(e_gender);

   //Enrolled Student Email
   const e_email = document.createElement("p");
   e_email.id="e_email";
   e_email.innerText = document.getElementById("email").value;
   e_std_data.appendChild(e_email);

   //Enrolled Student Website
   const e_website = document.createElement("p");
   e_website.id="e_website";
   e_std_data.appendChild(e_website);
   const e_link = document.createElement("a");
   e_link.href = document.getElementById("website").value;
   e_link.innerText = document.getElementById("website").value;
   e_website.appendChild(e_link);
   //Enrolled Student Skills
   const e_skills = document.createElement("p");
   e_skills.id="e_skills";
   e_std_data.appendChild(e_skills);
   var e_checkbox = document.getElementsByName("skills");
   for (i=0 ; i<e_checkbox.length ; i++){
       if(e_checkbox[i].checked){
           i===0 ? 
            e_skills.innerText += e_checkbox[i].value:
            e_skills.innerText += ", " + e_checkbox[i].value;
       }
   }

   //Image of Student
   var e_image = document.createElement("div");
   e_image.classList.add("e_image", "coloumn");
   e_image.id = "e_std_image";
   std_row1.appendChild(e_image);
   var e_std_image = document.getElementById("e_std_image");
   
   e_std_image.appendChild(img);
   img.src=uploaded_img_src;
   console.log("Working");
});