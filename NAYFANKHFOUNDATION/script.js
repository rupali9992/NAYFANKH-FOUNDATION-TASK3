
document.querySelector("#account").addEventListener("click", function () {
  document.getElementById("registrationForm").style.display = "none";
  document.querySelector(".modal-backdrop").style.display = "block";
  document.querySelector("#GFG").style.display = "block";
  document.querySelector(".modal-dialog").style.display = "block ";
  document.querySelector(".show").style.opacity = "1";
  document.getElementById("loginForm").style.display = "block";
  // document.getElementById("registrationForm").style.display ="block";
});
function toggleForms(formId) {
  var loginForm = document.getElementById("loginForm");
  var registrationForm = document.getElementById("registrationForm");

  if (formId === "loginForm") {
    loginForm.classList.remove("hidden");
    registrationForm.classList.add("hidden");
  } else if (formId === "registrationForm") {
    loginForm.classList.add("hidden");
    registrationForm.classList.remove("hidden");
  }
}

function toggleForms(formId) {
  // Hide all forms
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registrationForm").style.display = "none";

  // Show the selected form
  document.getElementById(formId).style.display = "block";
}

document
  .querySelector("#successfullogin")
  .addEventListener("click", function () {
    document.querySelector("#GFG").style.display = "none";
    document.querySelector(".modal-dialog").style.display = "none ";
    document.querySelector(".show").style.opacity = "0";
    document.querySelector(".modal-backdrop").style.display = "none";
  });

document
  .querySelector("#successfulregister")
  .addEventListener("click", function () {
    document.querySelector("#GFG").style.display = "none";
    document.querySelector(".modal-dialog").style.display = "none ";
    document.querySelector(".show").style.opacity = "0";
    document.querySelector(".modal-backdrop").style.display = "none";


  });


// ////community join us form
          function joinUs() {

            var joinName = document.getElementById('joinName').value;
            var joinEmail = document.getElementById('joinEmail').value;

          
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            var emailHelp = document.getElementById('emailHelp');

            if (!emailRegex.test(joinEmail)) {

                emailHelp.textContent = 'Please enter a valid email address.';
                return;
            }

            // Continue with the join logic
            console.log("Joining the community:", joinName, joinEmail);
           
            $('#joinUsModal').modal('hide');
        }
    
// ////////community examples //
                function previewImage() {
                  var input = document.getElementById("imageInput");
                  var container = document.getElementById("imageContainer");
                  var storyText = document.getElementById("storyText").value;

                  var file = input.files[0];
                  var reader = new FileReader();

                  reader.onloadend = function () {
                    var imgContainer = document.createElement("div");
                    imgContainer.classList.add("media", "mt-3");

                    var img = document.createElement("img");
                    img.src = reader.result;
                    img.classList.add("mr-3", "image-preview");
                    imgContainer.appendChild(img);

                    var mediaBody = document.createElement("div");
                    mediaBody.classList.add("media-body");

                    var textContainer = document.createElement("div");
                    textContainer.classList.add("story-text");
                    textContainer.textContent = storyText;

                    var readMoreLink = document.createElement("span");
                    readMoreLink.classList.add("read-more");
                    readMoreLink.textContent = "Read More";
                    readMoreLink.onclick = function () {
                      alert(storyText);
                    };

                    textContainer.appendChild(readMoreLink);
                    mediaBody.appendChild(textContainer);
                    imgContainer.appendChild(mediaBody);

                    container.appendChild(imgContainer);
                  };

                  if (file) {
                    reader.readAsDataURL(file);
                  }
                }

                function previewVideo() {
                  var input = document.getElementById("videoInput");
                  var preview = document.getElementById("videoPreview");

                  var file = input.files[0];
                  var reader = new FileReader();

                  reader.onloadend = function () {
                    preview.src = reader.result;
                  };

                  if (file) {
                    reader.readAsDataURL(file);
                  } else {
                    preview.src = "";
                  }
                }

                function submitStory() {

                  var storyText = document.getElementById("storyText").value;
                  var imageContainer =
                    document.getElementById("imageContainer");
                  var videoFile =
                    document.getElementById("videoInput").files[0];


                  console.log("Submitted Story:", storyText);


                  var imagePreviews =
                    imageContainer.getElementsByClassName("image-preview");
                  for (var i = 0; i < imagePreviews.length; i++) {
                    console.log("Image Preview:", imagePreviews[i].src);
                  }

                  console.log("Video File:", videoFile);


}



