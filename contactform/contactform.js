// jQuery(document).ready(function($) {
//   "use strict";

//   //Contact
//   $('form.contactForm').submit(function() {
//     var f = $(this).find('.form-group'),
//       ferror = false,
//       emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

//     f.children('input').each(function() { // run all inputs

//       var i = $(this); // current input
//       var rule = i.attr('data-rule');

//       if (rule !== undefined) {
//         var ierror = false; // error flag for current input
//         var pos = rule.indexOf(':', 0);
//         if (pos >= 0) {
//           var exp = rule.substr(pos + 1, rule.length);
//           rule = rule.substr(0, pos);
//         } else {
//           rule = rule.substr(pos + 1, rule.length);
//         }

//         switch (rule) {
//           case 'required':
//             if (i.val() === '') {
//               ferror = ierror = true;
//             }
//             break;

//           case 'minlen':
//             if (i.val().length < parseInt(exp)) {
//               ferror = ierror = true;
//             }
//             break;

//           case 'email':
//             if (!emailExp.test(i.val())) {
//               ferror = ierror = true;
//             }
//             break;

//           case 'checked':
//             if (! i.is(':checked')) {
//               ferror = ierror = true;
//             }
//             break;

//           case 'regexp':
//             exp = new RegExp(exp);
//             if (!exp.test(i.val())) {
//               ferror = ierror = true;
//             }
//             break;
//         }
//         i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
//       }
//     });
//     f.children('textarea').each(function() { // run all inputs

//       var i = $(this); // current input
//       var rule = i.attr('data-rule');

//       if (rule !== undefined) {
//         var ierror = false; // error flag for current input
//         var pos = rule.indexOf(':', 0);
//         if (pos >= 0) {
//           var exp = rule.substr(pos + 1, rule.length);
//           rule = rule.substr(0, pos);
//         } else {
//           rule = rule.substr(pos + 1, rule.length);
//         }

//         switch (rule) {
//           case 'required':
//             if (i.val() === '') {
//               ferror = ierror = true;
//             }
//             break;

//           case 'minlen':
//             if (i.val().length < parseInt(exp)) {
//               ferror = ierror = true;
//             }
//             break;
//         }
//         i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
//       }
//     });
//     if (ferror) return false;
//     else var str = $(this).serialize();
//     var action = $(this).attr('action');
//     if( ! action ) {
//       action = 'contactform/contactform.php';
//     }
//     $.ajax({
//       type: "POST",
//       url: action,
//       data: str,
//       success: function(msg) {
//         // alert(msg);
//         if (msg == 'OK') {
//           $("#sendmessage").addClass("show");
//           $("#errormessage").removeClass("show");
//           $('.contactForm').find("input, textarea").val("");
//         } else {
//           $("#sendmessage").removeClass("show");
//           $("#errormessage").addClass("show");
//           $('#errormessage').html(msg);
//         }

//       }
//     });
//     return false;
//   });

// });

function sendmail()
{
  
const subject= document.getElementById("subject").value;
const body= document.getElementById("mailbody").value;
const emailfrom= document.getElementById("email").value;
const emailfromname="Sent by :" + document.getElementById("name").value;
  Email.send({
    // Host:"smtp.mailtrap.io",
    // Username:"bf2983b37ffbb9",
    // Password:"ce9650b154406e",
    SecureToken:"0c2ee06a-8ef0-4c54-b901-0d76f60fa323",
    To:"mitkotak.laptop@gmail.com",
    From:"mitkotak.laptop@gmail.com",
    Subject:subject,
    Body:emailfromname+"<br/> Email Address:"+emailfrom+" <br/><br/>Subject:"+subject+"<br/> <br/>"+body,
  }).then(succesful() )
}
function succesful()
{
  $("#sendmessage").addClass("show");
  $("#errormessage").removeClass("show");
  $('.contactForm').find("input, textarea").val("");
}

// 3527d889-d808-4d85-908e-ff7fdf5bf5f4