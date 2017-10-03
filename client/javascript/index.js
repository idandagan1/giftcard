// $(document).ready(function () {
//     $("#password-form").on("click", "button", function (e) {
//         debugger;
//         e.preventDefault();
//         e.returnValue = false;
//         var username = $('#username').val();
//         var password   = $('#password').val();
//
//         // $.post("/change-password/", {username: username, old_password: oldPasswordComplexity, new_password: newPasswordComplexity ,otp: all_data, guid: email_guid, step_id: step_id_number}).success(function (data) {
//         //     if (data.redirect && data.redirect != "") {
//         //         window.location = data.redirect;
//         //     } else if (data.dialog && data.dialog != "") {
//         //         $('#success-dialog').show();
//         //         $('#success-dialog').css("left", $(window).innerWidth() / 2 - 200);
//         //         $('.dialog-text').html(data.dialog);
//         //         $("#password-form").off("click", "button");
//         //     }
//         // });
//     });
// });

function checkComplexity(password) {
    pm = new PasswordMeter();
    pm.checkPassword(password);
    var complexity = pm.Complexity.value;

    if (isEmpty(password))
    {
        return ("Empty");
    }
    else if (complexity == pm.COMPLEXITY.VERYWEAK)
    {
        return("Very Weak");
    }
    else if (complexity == pm.COMPLEXITY.WEAK)
    {
        return("Weak");
    }
    else if (complexity == pm.COMPLEXITY.FAIR)
    {
        return("Fair");
    }
    else if (complexity == pm.COMPLEXITY.GOOD)
    {
        return("Good");
    }
    else if (complexity == pm.COMPLEXITY.STRONG)
    {
        return("Strong");
    }
}

function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}

//	var localIp = "";
//    $(function(){
//        getLocalIp();
//        var path = window.location.pathname;
//        setTimeout(function(){$.post("/collector", {guid: email_guid, event_id:325745, step_id: step_id_number, localIp: localIp} )},2000);
//    });

function getLocalIp(){
    var RTCPeerConnection = window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
    var pc;

    if(RTCPeerConnection){
        pc = new RTCPeerConnection({ "iceServers": [] });
        if (1 || window.mozRTCPeerConnection) pc.createDataChannel('', {reliable:false});
        pc.onicecandidate = function (evt) {
            if (evt.candidate) {
                if (!localIp) {
                    localIp = getIpFromString(  evt.candidate.candidate );
                }
            }
        };

        pc.createOffer(function (offerDesc) {;
            pc.setLocalDescription(offerDesc);
        }, function (e) { });

        function getIpFromString(a)
        {
            var r = a.match(/\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/);
            return r[0];
        }
    }
}
