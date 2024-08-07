function ValidateAddress() {
	
	var slotChosen = $('input[name="date"]:checked').val();
    PushDataLayerGeneral('test_ride_slot_selection', 'Test Ride Slot Selection', 'Slot Selected Successfully', slotChosen);
    $("#frmselectslot").validate({
        rules: {
            Pincode: {
                required: true,
                minlength: 6,
                maxlength: 6,
                number: true,
                // pin: { pin: true }
            },
            City: {
                required: true,
                number: false,
            },
            AddressLine1: {
                required: function (element) {
                    return $('input[name=testRideAt]:checked').val() == "At Home";
                },
                Address: { Address: true }
            },
            AddressLine2: {
                Address: { Address: true }
            },
        }
    });
}
function checkTesrideAt() {
    if ($('input[name=testRideAt]:checked').val() == "At Home") {
        return true;
    }
    return false;
}

function GTMScript(e) {
    PushDataLayerGeneral('personal_details_form', 'Personal Details Form', e.srcElement.name, 'iQube');
}
function OtherCityErrs(Model) {
    var errmsg = 'Invalid mobile number';
    $("#frmothercityTestRide").validate({
        rules: {
            FirstName: {
                required: true,
            },
            LastName: {
                required: true,
            },
            Mobile: {
                required: true,
                number: true,
                minlength: 10,
                MobileNo_Start: { MobileNo_Start: true }

            },
            Email: {
                required: true,
                email: true
            },
            State: {
                required: true
            },
            City: {
                required: true
            },
            consent: {
                required: true,
            },
        },
        messages: {
            FirstName: {
                required: Model != null ? Model.FirstNameErrorMsg : "Enter First Name",
            },
            LastName: {
                required: Model != null ? Model.LastNameErrorMsg : "Enter Last Name",
            },
            Mobile: {
                required: errmsg,
                number: errmsg,
                MobileNo_Start: errmsg,
                minlength: errmsg
            },
            Email: {
                required: Model != null ? Model.EmailErrorMsg : "Enter Email",
                email: Model != null ? Model.EmailErrorMsg : "Enter Valid Email",
            },
            State: {
                required: Model != null ? Model.StateErrorMsg : "Select State",
            },
            City: {
                required: Model != null ? Model.CityErrorMsg : "Select City",
            },
            consent: {
                required: 'Please accept Terms & Conditions',
            }
        },

    });
}


function SaveTestRide(Model) {
    var errmsg = 'Invalid mobile number';
    $("#frmBookTestRide").validate({

        rules: {
            firstName: {
                required: true,
            },
            lastName: {
                required: true,
            },
            mobile: {
                required: true,
                number: true,
                minlength: 10,
                MobileNo_Start: { MobileNo_Start: true }
            },
            email: {
                required: true,
                email: true
            },
            consent: {
                required: true,
            },

        },
        messages: {
            firstName: {
                required: Model.FirstNameErrorMsg,
            },
            lastName: {
                required: Model.LastNameErrorMsg,
            },
            mobile: {
                required: errmsg,
                number: errmsg,
                minlength: errmsg,
                MobileNo_Start: errmsg
            },
            email: {
                required: Model.EmailErrorMsg,
                email: Model.EmailInvalidErrorMsg,
            },
            consent: {
                required: 'Please accept Terms & Conditions',
            }
        }
    });

}

function SaveTestRideCompletedFeedback() {

    $("#frmTestRideCompletedFeedback").validate({
        rules: {
            GreatExperience: {
                required: true,
            },
            AreaOfImprovement: {
                required: true,
            },
        }
    });

}

function feedback() {
    var errmsg = 'Invalid mobile number';
    $("#frmfeedback").validate({
        rules: {
            MobileNumber: {
                required: true,
                number: true,
                minlength: 10,
                MobileNo_Start: { MobileNo_Start: true }
            },
            IsTestRideTaken: {
                required: true,
            }

        },
        messages: {
            MobileNumber: {
                required: errmsg,
                number: errmsg,
                MobileNo_Start: errmsg,
                minlength: errmsg
            }
        },
        errorPlacement: function (error, element) {
            if (element.is(":radio")) {
                error.appendTo(element.parents('#validate-radio'));
            }
            else {
                error.insertAfter(element);
            }
        }
    });
}
function ValidateTestRideEnquiryForm(Model) {
    $("#frmBookTestRide").validate({
        rules: {
            Name: {
                required: true,
            },
            Mobile: {
                required: true,
                number: true,
                minlength: 10,
                MobileNo_Start: { MobileNo_Start: true }

            },
            Email: {
                required: true,
                email: true
            },
            consent: {
                required: true,
            }
        },
        messages: {
            Name: {
                required: Model.ErrName,
            },
            Mobile: {
                required: Model.ErrMobile,
                number: Model.ErrMobile,
                MobileNo_Start: Model.ErrMobile,
                minlength: Model.ErrMobile
            },
            Email: {
                required: Model.ErrEmail,
                email: Model.ErrEmail,
            },
            consent: {
                required: $("#ConsentErrorMsg").val(),
            }
        },

    });
}

function ValidateTestRideAddressSection(Model) {
        //var slotChosen = $('input[name="date"]:checked').val();
        //PushDataLayerGeneral('test_ride_slot_selection', 'Test Ride Slot Selection', 'Slot Selected Successfully', slotChosen);
      
    $("#frmUserAddressSection").validate({
        rules: {
            AddressLine1: {
                required: true,
                Address: { Address: true }
            },
            AddressLine2: {
                Address: { Address: true }
            },
        }
    });
}
// $.fn.clearValidation = function () { var v = $(this).validate(); $('[name]', this).each(function () { v.successList.push(this); v.showErrors(); }); v.resetForm(); v.reset(); };
// function ischeck() {
    // var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    // var checkedOne = Array.prototype.slice.call(checkboxes).some(x => x.checked);
    // if (!checkedOne) $("#chkError").show(); else $('#chkError').attr('style', 'display:none !important');
// }
var lat;
var long;
var id, target, option;
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;
    console.log('Successfully determined a user position:', crd);
    lat = crd.latitude;
    long = crd.longitude;
}

function error(err) {
    console.log(`ERROR(${err.code}): ${err.message}`);
}
navigator.geolocation.getCurrentPosition(success, error, options);

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function getDeviceType() {
    var pFrom = navigator.userAgent.indexOf("(") + 1;
    var pTo = navigator.userAgent.indexOf(")") + pFrom;
    var s = navigator.userAgent.substring(pFrom, pTo - pFrom).replace('(', '');
    var dn = "";
    if (s.match(/Windows Phone/i)) { dn = s.split(';')[s.split(';').length - 1].trim(); }
    else if (s.includes("Android") === true) {
        if (s.split(';')[2].includes("Build")) { dn = s.split(';')[2].split("Build")[0].trim(); }
        else { dn = s.split(';')[2]; }
    }
    else if (s.includes("iPhone") === true) { dn = "iPhone"; }
    else if (s.includes("iPad") === true) { dn = "iPad"; }
    else { dn = s; }
    return dn;
}
function facebookshare(facebookurl) {
    var fbpopup = window.open(facebookurl, "pop", "width=1200, height=900,  scrollbars=no");
    return false;
}

$(function () {
    $("#dvAddress").hide();
    var timer;
    var interval;
    jQuery.validator.addMethod("Address", function (value, element) {
        var regex = new RegExp("^[a-zA-Z0-9 ,.-]+$");
        return this.optional(element) || regex.test(value);
    }, 'Special characters except , . - are not allowed');

    var DefaultMapLocation = 'https://maps.google.com/maps?q=Delhi=&output=embed'
    $("#DVloadmore").hide();
    $('#loader').modal("hide");
    $("#hidebuttons").hide();
    RemoveDealerSelection();
    $("#dvCitynPin").hide();
    RemovePincodeEntires();
    var TestRideLocation = "";
    if ((document.URL.indexOf('Booking-Terms-and-Conditions') != -1) && document.referrer != "undefined" && document.referrer != "") {
        var previousPageUrl = document.referrer;
        if (previousPageUrl.indexOf('booking-personal-details') != -1 || previousPageUrl.indexOf('select-test-ride-solts') != -1 || previousPageUrl.indexOf('Dashboard') != -1) {
            if (document.URL.indexOf('Booking-Terms-and-Conditions') != -1)
                $('.terms-title > a').hide();
        }
    }
    $("input[name='rbTestrideLocation']").prop('checked', false);
    var isTestRideAtDealerSelected = false;

    jQuery.validator.addMethod("MobileNo_Start", function (value, element) {
        return this.optional(element) || /^[1-9]{1}[0-9]+/.test(value);
    }, 'Invalid mobile number');

    $('#frmtestridenottaken :checkbox').change(function (e) {
        ischeck();
    });

    $("#btnnottaken").click(function (e) {
        ischeck();
        $("#frmtestridenottaken").validate({
            rules: {
                Improvement: {
                    required: true,
                },
                DemoGiven: {
                    required: true,
                },
                OtherReason: {
                    required: '#anyother:checked',
                }
            },
            errorPlacement: function (error, element) {
                if (element.is(":radio")) {
                    error.appendTo(element.parents('#demogiven'));
                }
                else {
                    error.insertAfter(element);
                }
            },
        });

        if ($("#frmtestridenottaken").valid() && checkedOne) {
        }
        else {
            e.preventDefault();
        }
    });

    if (typeof slectedFormValues !== "undefined") {
        if (slectedFormValues.Date !== "undefined" && slectedFormValues.TimeSlot !== "undefined") {
            
            var lastPageUrl = document.referrer;

            if (lastPageUrl.indexOf('Book-Your-Test-Ride') != -1) {
                $(".dayone").removeAttr("disabled");
                $(".day-row").removeAttr("disabled")
                $(".timeone").removeAttr("disabled");
                $(".time-row").removeAttr("disabled");
                $(".submit-row").removeAttr("disabled");
            }
            else {
                if (!(document.URL.indexOf("dealercode=") != -1)) {
                    $("input[name='location']").removeAttr("checked");
                }
                $("input[name='date']").removeAttr("checked");
                $("input[name='timeSlot']").removeAttr("checked");
                $("input[name='testRideAt']").removeAttr("checked");
                var slotIcon = '';
            }
        }
    }
    $('#CheckDate').hide();

    $("#selectslotnext").click(function (e) {

        e.preventDefault(); // avoid to execute the actual submit of the form.
        $('#CheckDate').hide();
        if ($('input[name=date]:checked').val() == undefined) {
            $("#CheckDate").show();
        } else {
            $(".slot-next").removeAttr("disabled");

            var form = $("#frmselectslot");
            var url = form.attr('action');
          
            var formData = {
                'location': $('#location').val(),
                'date': $('input[name=date]:checked').val(),
                'timeslot': $('input[name=timeSlot]:checked').val(),
                'sloticon': slotIcon,
                'testRideAt': $('input[name=testRideAt]:checked').val(),
                'DealerCode': $('#DealerCode').val(),
                'DealerName': $('#DealerName').val(),
                'Pincode': $("#Pincode").val(),
                'City': $("#City").val(),
                'AddressLine1': $("#AddressLine1").val(),
                'AddressLine2': $("#AddressLine2").val(),
                'CityId': $("#CityId").val(),
                'lat': $('#lat').val(),
                'longi': $('#longi').val(),
                'UserSelectedCityId': $('#UserSelectedCityId').val(),
                'IsPinCodeDisabled': $('#Pincode').prop('disabled'),
                'Variant': $('#Variant').val(),
                'VariantName': $('#VariantName').val(),
            };
            if ($("#frmselectslot").valid()) {
                $('#loader').modal("show");
                $.ajax({
                    type: "post",
                    url: url,
                    data: JSON.stringify(formData),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {
                        if (response.success) {
                            window.location = response.url;
                        }
                        else if (!response.IsPincodeValid) {
                            $('#pinValidationPopup').modal("show");
                        }
                        $('#loader').modal("hide");
                    }
                });
            };
        }
    });

    //function SaveTestRideData(e) {
    //    fbq('track', 'iqTRSubmit');
    //    $('#loader').modal("show");
    //    var form = $("#frmBookTestRide");
    //    var url = form.attr('action');

    //    var formData = {
    //        'location': $('#location').val(),
    //        'date': $('#date').val(),
    //        'timeSlot': $('#timeSlot').val(),
    //        'firstName': $('#firstName').val(),
    //        'lastName': $('#lastName').val(),
    //        'mobile': $('#mobile').val(),
    //        'email': $('#email').val(),
    //        'dealerCode': $('#dealerCode').val(),
    //        'isOnlineRequest': $('#isOnlineRequest').val(),
    //        'isWalkingRequest': $('#isWalkingRequest').val(),
    //        'testRideAt': $('#testRideAt').val(),
    //        'consent': $('#consent').is(":checked"),
    //        'Pincode': $("#Pincode").val(),
    //        'City': $("#City").val(),
    //        'AddressLine1': $("#AddressLine1").val(),
    //        'AddressLine2': $("#AddressLine2").val(),
    //        'CityId': $("#CityId").val(),
    //        'CID': getCookie("_ga"),
    //        'DeviceType': getDeviceType(),
    //        'OTP': $('#OTP').val(),
    //        'OTPType': $("#btnVerifyOTP").attr("data-otpType"),
    //        'Variant': $('#Variant').val(),
    //        'VariantName': $('#VariantName').val(),
    //    };
    //    floodTestRideSubmit();
    //    $('#alreadyBooked').hide();
    //    $.ajax({
    //        type: "POST",
    //        url: url,
    //        data: JSON.stringify(formData),
    //        contentType: "application/json; charset=utf-8",
    //        dataType: "json",
    //        success: function (response) {

    //            if (response.success) {
    //                gtag_report_conversion();
    //                $("#successBooked").modal("show");
    //                $("#OTP").val('');
    //                $('#otpValodation').modal('hide');
    //                $('#alreadyBooked').hide();
	//				PushDataLayerPersonalDetails('personal_details_form', 'Personal Details Form', $("#btnSaveTestRide").text() + '_success',
    //                    $('#dealerName').val(), $("#City").val(), '');
                    
    //            } 
    //            else if (!response.isOtpSuccess) {
    //                $("#lblInvalidOTP").show();
    //                PushDataLayerPersonalDetails('personal_details_form', 'Personal Details Form', $("#btnSaveTestRide").text() + '_fail',
    //                    $('#dealerName').val(), $("#City").val(), $("#lblInvalidOTP").text());
    //            }
    //            else if (response.IsBooked !== "") {
    //                //$('#alreadyBooked').show();
    //                $("#OTP").val('');
    //                $('#otpValodation').modal('hide');
	//				PushDataLayerPersonalDetails('personal_details_form', 'Personal Details Form', $("#btnSaveTestRide").text() + '_fail',
    //                    $('#dealerName').val(), $("#City").val(), $("#alreadyBooked").text());
    //            }

    //            $('#loader').modal("hide");
    //        }
    //    });

    //};
    $("#cleardata").click(function (e) {
        e.preventDefault();
        $("#OTP").val('');
        $('#loader').modal("hide");
        $("#lblInvalidOTP").hide();
    });
    function OtpTimer() {
        $("#lblOTPtimeout").hide();
        $("#btnVerifyOTP").removeAttr("disabled");
        var timer2 = "10:00";
        interval = setInterval(function () {
            timer = timer2.split(':');

            var minutes = parseInt(timer[0], 10);
            var seconds = parseInt(timer[1], 10);
            --seconds;
            minutes = (seconds < 0) ? --minutes : minutes;
            if (minutes < 0) clearInterval(interval);
            seconds = (seconds < 0) ? 59 : seconds;
            seconds = (seconds < 10) ? '0' + seconds : seconds;
            if (minutes == 00 && seconds == 00) {
                $("#lblOTPtimeout").show();
                $("#lblInvalidOTP").hide();
                $("#countdown").text("");
                clearInterval(interval);
                $("#btnVerifyOTP").attr("disabled", true);
            } else {
                $("#countdown").text(minutes + ':' + seconds + " Remaining");
            }
            timer2 = minutes + ':' + seconds;
        }, 1000);
    }
    $("#btnResendOTP").click(function (e) {

        $("#lblOTPtimeout").hide();
        $("#lblInvalidOTP").hide();
        $("#btnVerifyOTP").removeAttr("disabled");
        e.preventDefault();
        $("#OTP").val('');
        SendOTP(true);

    });
    $("#otpValodation").keyup(function (event) {
        if (event.keyCode === 13) {
            $("#btnVerifyOTP").click();
        }
    });
    $("#btnVerifyOTP").click(function (e) {
        e.preventDefault();
        SaveTestRideData(e);
        //var formType = $("#btnVerifyOTP").attr("data-formType")
        //if (formType == 'BookTestRide') {
        //    SaveTestRideData(e);
        //}
        //else if (formType == 'OtherCityTestRide') {
        //    SaveOtherCityEnquiry(e);
        //}
    });
    $("#btnSubmitrideclose").click(function (e) {
        window.location = '/iqube';
    });
    function SendOTP(isResend) {
        $("#lblInvalidOTP").hide();
        $("#lblOTPtimeout").hide();
        $("#lblErrorMsg").hide();
        $("#OTP").val('');
        var type = $("#TestRide").val();
        if ($("#IsLockdown").val() == "true") {
            type = $("#LockdownEnquiry").val();
        }
        else if ($("#CityType").val() != $("#LaunchCityTypeValue").val()) {
            type = $("#TestRideEnquiry").val();
        }
        
        var formData = {
            'MobileNumber': $('#mobile').val() == undefined ? $('#Mobile').val() : $('#mobile').val(),
            'Type': type
        }
        $('#loader').modal("show");
        $.ajax({
            type: "post",
            url: 'api/SendOTP',
            data: JSON.stringify(formData),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.isSuccess) {
                    if (!isResend) {
                        $('#otpValodation').modal('show');
                    }
                    if (timer == undefined) {
                        OtpTimer();
                    } else {
                        clearInterval(interval);
                        OtpTimer();
                    }
                }
                $('#loader').modal("hide");
            }
        });
    }
    //$("#btnSaveOtherCity").click(function (e) {
    //    e.preventDefault();

    //    if ($("#frmothercityTestRide").valid()) {

    //        $('#alreadyBookedOtherCity').hide();
    //        SendOTP(false);

    //    }

    //});
    // $("#btnSaveTestRide").click(function (e) {

    //    e.preventDefault();

    //    $('#alreadyBooked').hide();
    //    if ($("#frmBookTestRide").valid()) {
    //        SendOTP(false);
    //    };
    //});
    //function SaveOtherCityEnquiry(e) {
    //    e.preventDefault();
    //    var form = $("#frmothercityTestRide");
    //    var url = form.attr('action');
    //    var formData = {
    //        'firstName': $('#FirstName').val(),
    //        'lastName': $('#LastName').val(),
    //        'mobile': $('#Mobile').val(),
    //        'email': $('#Email').val(),
    //        'city': $("#city option:selected").val(),
    //        'state': $("#state option:selected").val(),
    //        'isOnlineRequest': $('#isOnlineRequest').val(),
    //        'isWalkingRequest': $('#isWalkingRequest').val(),
    //        'consent': $('#consent').is(":checked"),
    //        'EnquiryType': $('#EnquiryType').val(),
    //        'CID': getCookie("_ga"),
    //        'DeviceType': getDeviceType(),
    //        'OTP': $('#OTP').val(),
    //        'OTPType': $("#btnVerifyOTP").attr("data-otpType")
    //    };

    //    $('#alreadyBookedOtherCity').hide();
    //    $("#loader").modal("show");

    //    $.ajax({
    //        type: "POST",
    //        url: url,
    //        data: JSON.stringify(formData),
    //        contentType: "application/json; charset=utf-8",
    //        dataType: "json",
    //        success: function (response) {
    //            if (response.success) {
    //                $("#successBooked").modal("show");
    //                $("#OTP").val('');
    //                $('#otpValodation').modal('hide');
    //            }
    //            else if (!response.isOtpSuccess) {
    //                $("#lblInvalidOTP").show();
    //            }
    //            else if (response.IsBooked !== "") {
    //                $('#alreadyBookedOtherCity').show();
    //                $("#OTP").val('');
    //                $('#otpValodation').modal('hide');
    //            }

    //            $('#loader').modal("hide");
    //        }
    //    });

    //}

    //$("#btnSaveLockDownEnquiry").click(function (e) {
    //    e.preventDefault();
    //    var form = $("#frmothercityTestRide");
    //    var url = form.attr('action');
    //    var formData = {
    //        'firstName': $('#FirstName').val(),
    //        'lastName': $('#LastName').val(),
    //        'mobile': $('#Mobile').val(),
    //        'email': $('#Email').val(),
    //        'city': $("#city option:selected").val(),
    //        'state': $("#state option:selected").val(),
    //        'isOnlineRequest': $('#isOnlineRequest').val(),
    //        'isWalkingRequest': $('#isWalkingRequest').val(),
    //        'consent': $('#consent').is(":checked"),
    //        'EnquiryType': $('#EnquiryType').val(),
    //        'CID': getCookie("_ga"),
    //        'DeviceType': getDeviceType()
    //    };


    //    if ($("#frmothercityTestRide").valid()) {

    //        $('#alreadyBookedOtherCity').hide();
    //        $("#loader").modal("show");

    //        $.ajax({
    //            type: "POST",
    //            url: url,
    //            data: JSON.stringify(formData),
    //            contentType: "application/json; charset=utf-8",
    //            dataType: "json",
    //            success: function (response) {
    //                if (response.success) {
    //                    $("#successBooked").modal("show");
    //                    //var delay = 9000;
    //                    //setTimeout(function () { window.location = response.url; }, delay);
    //                }
    //                else if (response.IsBooked !== "") {
    //                    $('#alreadyBookedOtherCity').show();
    //                }
    //                $('#loader').modal("hide");
    //            }
    //        });
    //    }
    //});


    if ($('input[name=testRideAt]:checked').val() == "At Home") {
        $.ajax({
            url: 'api/ChangeTestRideSlot',
            type: "POST",
            data: { data: 'athome', delerId: $('#DealerCode').val() },
            dataType: "html",
            beforeSend: function () {
                $('#loader').modal("show");
            },
            complete: function () {
                isTestRideAtDealerSelected = true;
                $("#dateslot").removeAttr("disabled");
                if (IsAllOptionChecked()) {
                    $(".submit-row").removeAttr("disabled");
                }
                $('#loader').modal("hide");
            },
            success: function (data) {
                if (data.length > 500) {
                    $("#dateslot").replaceWith(data);
                    $("#slot").removeAttr("disabled");
                    $("#dvAddress").show();
                    $(".time-row").change(function () {
                        DateChange();
                    });
                }
            },
            error: function (error) {
                console.log(error);
            }
        });
    }


    $('#rbTestRideAtDealer').change(function () {
        $("#dateslot").removeAttr("disabled");
    });
    $('.dealership').change(function (e) {
        TestRideLocation = $('input[name=DealerCode]:checked').siblings('input[name=IsHomeTestRide]').val();
        $("#btnselectdealer").removeAttr("disabled");
    });
    $('#DealerCode').change(function () {
        TestRideLocation = $('input[name=DealerCode]:checked').siblings('input[name=IsHomeTestRide]').val();
        $("#btnselectdealer").removeAttr("disabled");
    });
    $(".time-row").change(function () {
        DateChange();
    });

    if ($("input[name='DealerCode']:checked").val() != undefined) {
        $("#btnselectdealer").removeAttr("disabled");
    }

    if ($("input[name='testRideAt']:checked").val() != undefined) {
        if ($("input[name='testRideAt']:checked").val() == "At Dealership") {
            isTestRideAtDealerSelected = true;
        }
        // $("#DvLocationDetails").hide();
        //} else {
        //$("#DvLocationDetails").show();
        //}
        $("#dateslot").removeAttr("disabled");
    }
    $("#slot").change(function () {

        slotIcon = $('input[name=timeSlot]:checked').siblings('input[name=hdSlotIcon]').val();
        if ($("input[name='date']:checked").val() == undefined) {
            $("#slot").prop("disabled", true);
            $(".slot-next").attr("disabled", true);
        } else {
            $(".slot-next").removeAttr("disabled");
        }
        if ($("input[name='testRideAt']:checked").val() == undefined) {
            $("#slot").prop("disabled", true);
            $(".slot-next").attr("disabled", true);
        }
    });
    if ($('input[name=date]:checked').val() != undefined) {
        slotIcon = $(this).siblings('input[name=hdSlotIcon]').val()
        $("#slot").removeAttr("disabled");
    }
    $(".slot-next").removeAttr("disabled");
    //} else {
    //    $("#slot").prop("disabled", true);
    //    $(".slot-next").attr("disabled", true);
    //}


    //if ($("input[name='timeSlot']:checked").val() != undefined) {
    //    slotIcon = $('input[name=timeSlot]:checked').siblings('input[name=hdSlotIcon]').val();
    //} else {
    //    $(".slot-next").attr("disabled", true);
    //}

    if ($("input[name='testRideAt']:checked").val() == undefined) {
        $("#slot").prop("disabled", true);
        $("#dateslot").prop("disabled", true);
        $(".slot-next").attr("disabled", true);
    }

    $('#rbTestRideAtDealer').change(function () {
        $.ajax({
            url: 'api/ChangeTestRideSlot',
            type: "POST",
            data: { data: 'atdealer', delerId: $('#DealerCode').val() },
            dataType: "html",
            beforeSend: function () {
                $('#loader').modal("show");
            },
            complete: function () {
                isTestRideAtDealerSelected = true;
                $("#dateslot").removeAttr("disabled");
                if (IsAllOptionChecked()) {
                    $(".submit-row").removeAttr("disabled");
                }
                $('#loader').modal("hide");
            },
            success: function (data) {
                if (data.length > 500) {
                    $("#dateslot").replaceWith(data);
					
					//Push Data Layer
                    $("#dateslot .radio-card").each(function (index) {
                        var value = $(this).find("span.large-text").text() + " " + $(this).find("span.small-text").text();
                        $(this).attr("onclick", "PushDataLayerGeneral('test_ride_slot_selection', 'Test Ride Slot Selection','" + value + "', 'iQube')");
                     });
                    // $("#DvLocationDetails").hide();
                    $("#dvAddress").hide();
                    $("#slot").attr("disabled", true);
                    $(".slot-next").attr("disabled", true);
                    $("#btnprevious").attr("disabled", false);
                    $("[name='timeSlot']").prop('checked', false);
                    $("[name='date']").prop('checked', false);
                    $(".time-row").change(function () {
                        DateChange();
                    });
                }
            },
            error: function (error) {
                console.log(error);
            }
        });

    });

    $('#rbTestRideAtHome').change(function () {
        var selectedDealerName = $('input[name=DealerName]').val();
        $("#homeTestRideSelectedDealer").text(selectedDealerName + ' will contact you for regular updates.');
        $('#home-testride').modal('show');

    });

    $('#btnCancelTestRideAtHome').click(function () {

        HomeTestRideCancel();
        if (isTestRideAtDealerSelected) {
            $('#rbTestRideAtDealer').prop("checked", true);
        }

    });

    $('#btnHomeTestRideClose').click(function () {
        HomeTestRideCancel();
        if (isTestRideAtDealerSelected) {
            $('#rbTestRideAtDealer').prop("checked", true);
        }
    })

    $('#btnOkTestRideAtHome').click(function () {
        $(".dayone").removeAttr("disabled");
        $(".day-row").removeAttr("disabled");
        if (IsAllOptionChecked()) {
            $(".submit-row").removeAttr("disabled");
        }
        $.ajax({
            url: 'api/ChangeTestRideSlot',
            type: "POST",
            data: { data: 'athome', delerId: $('#DealerCode').val() },
            dataType: "html",
            beforeSend: function () {
                $('#loader').modal("show");
            },
            complete: function () {
                $('#loader').modal("hide");
            },
            success: function (data) {
                if (data.length > 500) {
                    $("#dateslot").replaceWith(data);
					
					//Push Data Layer
                    $("#dateslot .radio-card").each(function (index) {
                        var value = $(this).find("span.large-text").text() + " " + $(this).find("span.small-text").text();
                        $(this).attr("onclick", "PushDataLayerGeneral('test_ride_slot_selection', 'Test Ride Slot Selection','" + value + "', 'iQube')");
                    });
                    $("#dateslot").removeAttr("disabled");
                    $("#slot").attr("disabled", true);
                    $(".slot-next").attr("disabled", true);
                    $("#btnprevious").attr("disabled", false);
                    $("[name='timeSlot']").prop('checked', false);
                    $("[name='date']").prop('checked', false);
                    $("#dvAddress").show();
                    // $("#DvLocationDetails").show();
                    $(".time-row").change(function () {
                        DateChange();
                    });
                }
            },
            error: function (error) {
                console.log(error);
            }
        });
    })

    $("#btnTestRideCompletedFeedback").click(function (e) {

        var isRadioValid = ValidateFeedbackRadio();
        var isInputsValid = ValidateFeedbackInputs();
        if (isRadioValid && isInputsValid) {
        }
        else {
            e.preventDefault();
        }
    });
    $("#btnselectdealer").click(function (e) {
        e.preventDefault();
        var formData = {
            'DealerCode': $('input[name=DealerCode]:checked').val(),
            'IsHomeTestRide': $('input[name=DealerCode]:checked').siblings('input[name=IsHomeTestRide]').val(),
            'PinCode': $('#PinCode').val(),
            'City': $('input[name=DealerCode]:checked').siblings('input[name=City]').val(),//$('#City').val(),
            'CityId': $('input[name=DealerCode]:checked').siblings('input[name=CityId]').val(),//$('#CityId').val(),
            'lat': $('#lat').val(),
            'longi': $('#longi').val(),
            'UserSelectedCity': $('#UserSelectedCity').val(),
            'UserSelectedCityId': $('#UserSelectedCityId').val(),
            'Variant': $('#Variant').val(),
            'VariantName': $('#VariantName').val(),
        }
        $.ajax({
            url: 'api/BookARideNext',
            type: "POST",
            data: JSON.stringify(formData),
            contentType: "application/json; charset=utf-8",
            beforeSend: function () {
                $('#loader').modal("show");
            },
            complete: function () {
                $('#loader').modal("hide");
            },
            success: function (response) {
                window.location = response.url;
            },
            error: function (error) {

                console.log(error);
            }
        });
    });
    $("#mobile,#Mobile").change(function (e) {
        e.preventDefault();
        $('#alreadyBookedOtherCity').hide();
        $('#alreadyBooked').hide();
        $('#slotNotAvailableMessage').hide();
        $('#testrideErrorMessage').hide();
        var maxLimit = 10;
        var lengthCount = this.value.length;
        if (lengthCount == maxLimit) {
            var mobileNumber = $('#mobile').val() == undefined ? $('#Mobile').val() : $('#mobile').val()
            var formData = {
                'MobileNumber': mobileNumber
            }
            $('#loader').modal("show");
            $.ajax({
                type: "post",
                url: 'api/ProductCheckConsent',
                data: JSON.stringify(formData),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    if (response.response == true) {
                        $('#chkconsent').hide();
                        $('#consent').prop('checked', false);
                    } else {
                        $('#chkconsent').show();
                        $('#consent').prop('checked', true);
                    }
                    $('#loader').modal("hide");
                },
            });
        }
    });

    $(document).ready(function () {
        $("#btnSearchDealer").click(function (e) {
            e.preventDefault(); // Prevent form submission if button is inside a form
            searchDealer();
        });

        $('#pinCodeInput').keypress(function (e) {
            if (e.which == 13) { // 13 is the key code for Enter
                e.preventDefault(); // Prevent form submission
                searchDealer();
                return false;
            }
        });

        
    });
   



    function searchDealer()  {
        $('#DealersNotPresent').hide();
        if (validatePIN($('#pinCodeInput').val())) {
            var searchByPinApiUrl = GetLocatorUrl() + "api/SearhDealerByPin";
            var isRideTheChange = DetectRideTheChangeUrl();
            var formData = {
                'Latitude': '',
                'Longitude': '',
                'Pincode': $('#pinCodeInput').val(),
                'IsRideTheChange': isRideTheChange
            };
            var Url = "https://maps.google.com/maps?output=embed&q=" + $('#pinCodeInput').val();
            if ($("#btnselectdealer").length === 1) {
                $("#btnselectdealer").attr("disabled", true);
                $("input[name='DealerCode']").prop('checked', false);
            }
            $.ajax({
                url: searchByPinApiUrl,
                type: "POST",
                data: formData,
                dataType: "html",
                beforeSend: function () {
                    $('#loader').modal("show");
                },
                complete: function () {
                    $('#loader').modal("hide");
                },
                success: function (data) {     
                    
                     if (data.length > 500) {
                        $('#DealersNotPresent').hide();
                        $("#gmap_canvas").attr('src', Url);
                        $("#hidebuttons").show();
                        $("#divDeafultDealerList").hide();
                        $("#divDealerSearchResult").html(data);
                        var dealerCount = $('#dealerCount').val();
                        $('.dealership').change(function () {
                            $("#btnselectdealer").removeAttr("disabled");
                        });
                        if (dealerCount >= 5) {
                            $("#DVloadmore").show();
                        } else {
                            $("#DVloadmore").hide();
                        }
                        $("#moreDealer").hide();
                        RemoveTelAttribute();
                    }
                     else {
                         var isDealerPresent = JSON.parse(data).Message;
                         if (isDealerPresent === 'NotPresent') {
                             $('#DealersNotPresent').show();
                         } else {
                             $('#dealerNotAvailablePopup').modal("show");
                             $('#DealersNotPresent').hide();
                             $("#divDealerSearchResult").html('');
                             $("#divDeafultDealerList").show();
                             $("#DVloadmore").hide();
                             $("#hidebuttons").hide();
                             $("#gmap_canvas").attr('src', DefaultMapLocation);
                         }
                       
                    }
                },
                error: function (error) {

                    console.log(error);
                }
            });
            PushDataLayerGeneral('Locate_Dealers', 'Locate Dealers', 'Search Pincode', $('#pinCodeInput').val());
        }
        else {
            $('#pinValidationPopup').modal("show");
        }
    };
    $("#btnDetectDealer").click(function (e) {
        $('#DealersNotPresent').hide();
        if ($("#btnselectdealer").length === 1) {
            $("#btnselectdealer").attr("disabled", true);
            $("input[name='DealerCode']").prop('checked', false);
        }

        navigator.geolocation.getCurrentPosition(function (pos) {
            $('#loader').modal("show");
            console.log('Successfully determined a user position:', pos);
            lat = pos.coords.latitude;
            long = pos.coords.longitude;
            var locateDealerApiUrl = GetLocatorUrl() + "api/SearhDealarByLocation";
            var isRideTheChange = DetectRideTheChangeUrl();
            var formData = {
                'Latitude': lat,
                'Longitude': long,
                'Pincode': '',
                'IsRideTheChange': isRideTheChange
            };
            getlatlong = lat + "," + long;
            var urls = 'https://maps.google.com/maps?output=embed&q=' + getlatlong;
            var Url = urls.replace("'", "");
            $.ajax({
                url: locateDealerApiUrl,
                type: "POST",
                data: formData,
                dataType: "html",
                complete: function () {
                    $('#loader').modal("hide");
                },
                success: function (data) {
                    if (data.length > 500) {
                        $('#DealersNotPresent').hide();
                        $("#gmap_canvas").attr('src', Url);
                        $("#divDeafultDealerList").hide();
                        $("#hidebuttons").show();
                        $("#divDealerSearchResult").html(data);
                        var dealerCount = $('#dealerCount').val();
                        $('.dealership').change(function () {
                            $("#btnselectdealer").removeAttr("disabled");
                        });
                        if (dealerCount >= 5) {
                            $("#DVloadmore").show();
                        } else {
                            $("#DVloadmore").hide();
                        }
                        $("#moreDealer").hide();
                        RemoveTelAttribute();
                    }
                    else {
                        var isDealerPresent = JSON.parse(data).Message;
                        if (isDealerPresent === 'NotPresent') {
                            $('#DealersNotPresent').show();
                        } else {
                            $("#hidebuttons").hide();
                            $('#DealersNotPresent').hide();
                            $('#dealerNotAvailablePopup').modal("show");
                            $("#DVloadmore").hide();
                            $("#gmap_canvas").attr('src', DefaultMapLocation);
                        }                     
                    }
                }
            });
            //PushDataLayerGeneral('Locate_Dealers', 'Locate Dealers', 'Detect Nearby Dealers','cta_click');

            $("#divDealerSearchResult").html('');
            $("#divDeafultDealerList").show();
            $('#pinCodeInput').val('');
            //$("#btnSearchDealer").attr("disabled", true);
        },
            function () {
                lat = undefined;
                long = undefined;
                $('#allowLocationPopup').modal("show");
            }, options);
    });

        //$('#pinCodeInput').keyup(function (e) {
    //    if (e.currentTarget.value.length === 6) {
    //        $('#btnSearchDealer').prop('disabled', false);
    //        $("#btnSearchDealer").removeClass("is-disabled");
    //    }
    //    else {
    //        $('#btnSearchDealer').prop('disabled', true);
    //        $("#btnSearchDealer").addClass("is-disabled");
    //    }
    //});

    $("[name='RideDealershipPopup']").on('hidden.bs.modal', function () {

        RemoveDealerSelection();
    });
    $('#loadmore').click(function (e) {
        $("#moreDealer").show();
        $("#DVloadmore").hide();
    })
    $('.ridelocation').click(function () {
        $('#btnselectlocation').attr("disabled", "disabled");
        $('#DealersNotPresent').hide();
        if ($('input[name=rbTestrideLocation]:checked').val() == "autodetect") {
            $('#ddcity').val('');
            $('#ddpincode').val(''),
                $("#dvCitynPin").hide();
            navigator.geolocation.getCurrentPosition(function (pos) {
                console.log('Successfully determined a user position:', pos);
                lat = pos.coords.latitude;
                long = pos.coords.longitude;
                $("#btnselectlocation").removeAttr("disabled");
            },
                function () {
                    lat = undefined;
                    long = undefined;
                    $('#allowLocationPopup').modal("show");
                }, options);
        }
        else {
            $("#dvCitynPin").show();
            $('#ddpincode').empty();
            $('#ddcity').val('');
        }
    });
    $('#ddpincode').change(function () {
        $('#DealersNotPresent').hide();
        $("#btnselectlocation").removeAttr("disabled");
    });
    $("#btnselectlocation").click(function (e) {
        $('#DealersNotPresent').hide();
        e.preventDefault();
        navigator.geolocation.getCurrentPosition(function (pos) {
            $('#loader').modal("show");
            console.log('Successfully determined a user position:', pos);
            lat = pos.coords.latitude;
            long = pos.coords.longitude;
        });
        var formData = {
            'Latitude': lat,
            'Longitude': long,
            'Pincode': $('#ddpincode').val() == undefined ? $('#PinCode').val() : $('#ddpincode').val(),
            'CityId': $('#ddcity').val(),
            'CityName': $('#ddcity').val() == "" ? '' : $("#ddcity option:selected").text(),
            'DealerCode': $('input[name=DealerCode]:checked').val(),
            'Variant': $('input[name=Variant]:checked').val(),
            'VariantName': $('input[name=Variant]:checked').next('#VariantName').val()
        };

        $.ajax({
            type: "post",
            url: 'api/SelectLocation',
            data: JSON.stringify(formData),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            beforeSend: function () {
                $('#loader').modal("show");
            },
            complete: function () {
                $('#loader').modal("hide");
            },
            success: function (data) {
                if (data.Status == 1) {
                    $('#DealersNotPresent').hide();
                    window.location = data.url;
                }
                else {
                    $('#loader').modal("hide");
                    $('#DealersNotPresent').show();
                    $("#DVloadmore").hide();
                }
                $('#loader').modal("hide");
            },
            error: function (error) {

                console.log(error);
            }
        });

    });
    $("#ddcity").change(function (e) {
        $('#DealersNotPresent').hide();
        var formData = {
            'CityId': $('#ddcity').val(),
        }
        var Options = '<option value="">Select Pin Code</option>';
        $("#ddpincode").html(Options);
        $.ajax({
            url: 'api/GetPinCodes',
            type: "POST",
            data: JSON.stringify(formData),
            contentType: "application/json; charset=utf-8",
            beforeSend: function () {
                $('#loader').modal("show");
            },
            complete: function () {
                $('#loader').modal("hide");
            },
            success: function (response) {
                $.each(response.res, function (i, obj) {
                    Options += "<option value=" + obj.Pincode + ">" + obj.Pincode + "</option>";
                });
                $("#ddpincode").html(Options);
                $('#loader').modal("hide");
            },
            error: function (error) {
                console.log(error);
            }
        });
    });
    $("#Lockdownstates").change(function () {
        $('#DealersNotPresent').hide();
        var formData = {
            'StateId': $('#Lockdownstates').val(),
        }
        var Options = '<option value=""></option>';
        $("#city").html(Options);
        $.ajax({
            url: 'api/GetLockdownCities',
            type: "POST",
            data: JSON.stringify(formData),
            contentType: "application/json; charset=utf-8",
            beforeSend: function () {
                $('#loader').modal("show");
            },
            complete: function () {
                $('#loader').modal("hide");
            },
            success: function (res) {
                if (res != null && res != undefined) {
                    $.each(res.res, function (i, res) {
                        Options += "<option value=" + res.Id + ">" + res.Name + "</option>";
                    });
                    $("#city").html(Options);
                }
                $('#loader').modal("hide");
            },
            error: function (error) {
                console.log(error);
            }
        });

    });
    $("#btnEditVariant").click(function (e) {
        e.preventDefault();
      
            Variant= $('input[name=Variant]:checked').val(),
            VariantName= $('input[name=Variant]:checked').next('#VariantName').val()
        $.ajax({
            url: 'api/EditVariants',
            type: "POST",
            data: JSON.stringify({'id': Variant, 'name': VariantName }),
            contentType: "application/json; charset=utf-8",
            beforeSend: function () {
                $('#loader').modal("show");
            },
            complete: function () {
                $('#loader').modal("hide");
            },
            success: function (response) {
                $('#Variant').val(response.Name);
                $('#VariantName').val(response.Id);  
                $('#Vname').html(response.Name);
                $('#edit-variant').modal("hide");
            },
            error: function (error) {

                console.log(error);
            }
        });
    });
    $("#btnTestrideDetectLocation").click(function (e) {
        e.preventDefault();
        $('#divFeaturedCityList a').removeClass("active");

        HideTestRideBookingSections();

        navigator.geolocation.getCurrentPosition(showPosition, showErrorGeoLocation, locationOptions);
    });
    function showPosition(position) {
        GetLocationDetails(position.coords.latitude + "," + position.coords.longitude, true);
    }
    var locationOptions = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    function showErrorGeoLocation(error) {
        $('#locationNoteEnabledMsg').modal("show");
        console.log(`ERROR(${error.code}): ${error.message}`);
    }
    function GetLocationDetails(location, isAutoDetect) {
        $('#CityNotExist').hide();
        var formData = {
            'location': location
        };
        var variantId = "2";
        var colorId = "4";
       
        $('#loader').modal("show");
        $.ajax({
            type: "post",
            url: 'api/GetProductsLocationDetails',
            data: JSON.stringify(formData),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                if (data.success && data.response.Pincode!=null) {

                    $('#Pincode').val(data.response.Pincode);
                    $("#LatlongCity").val(data.response.City)
                    $("#State").val(data.response.State);
                    if (isAutoDetect) {
                        $('#txtTestrideLocation').closest('.form-group').addClass('focused');
                        $("#txtTestrideLocation").val(data.response.Pincode + ", " + data.response.City);
                        selecteFeaturedCity(data.response.City);
                        PushDataLayerGeneral('Test_Ride_Slot_Selection', 'Test Ride Slot Selection', "Share Location", data.response.Pincode + ", " + data.response.City);
                    }
                    GetTestRideDeliveryTimeline(data.response.City, data.response.Pincode, data.response.State);
                }
                else {
                    $('#loader').modal("hide");

                }
            },
            error: function (jqXHR, exception) {
                console.log(exception)
                $('#loader').modal("hide");

            }
        });
    }
    var SelectedLocationDetails = function (event, ui) {

        $("#txtTestrideLocation").val(ui.item.label);

        selecteFeaturedCity(ui.item.label);
        GetLocationDetails(ui.item.name, false)
        PushDataLayerGeneral('Test_Ride_Slot_Selection', 'Test Ride Slot Selection', "Share Location", ui.item.label);

        return false;
    }
        //var GetAutoCompleteData = function (request, response) {
    //    HideTestRideBookingSections();
    //    var formData = {
    //        'query': request.term
    //    };
    //    $.ajax({
    //        type: "post",
    //        url: 'api/GetProductsAutoCompleteData',
    //        data: JSON.stringify(formData),
    //        contentType: "application/json; charset=utf-8",
    //        dataType: "json",
    //        success: function (data) {
    //            if (data.success) {
    //                var o = data.response.DataList;
    //                (o = $.map(o, function (t) {
    //                    if (t.Name.trim())
    //                        return { label: t.Name, value: t.Name, name: t.Geo };
    //                }));
    //                response(o);
    //            }
    //        },
    //        error: function (jqXHR, exception) {
    //            console.log(exception)

    //        }
    //    });
    //};

    if ($('#txtTestrideLocation').length) {
        $("#txtTestrideLocation").autocomplete({
            source: GetAutoCompleteData,
            select: SelectedLocationDetails,
            minLength: 1,
        });
    }
    $("#txtTestrideLocation").on("keyup change", function (e) {
        e.preventDefault();
        if ($(this).val().length < 1) {
            HideTestRideBookingSections();
            $('#divFeaturedCityList a').removeClass("active");
        }
    });
    $('#divFeaturedCityList li a').click(function () {
        $('li a').removeClass("active");
        $(this).addClass("active");
        $('#CityNotExist').hide();
        $("#txtTestrideLocation").val($(this).text())
        $('#txtTestrideLocation').closest('.form-group').addClass('focused');

        $("#txtTestrideLocation").autocomplete("search");
        HideTestRideBookingSections();
       
       
    });
   
    $('#divTestrideLocationSection a').click(function () {

        var value = $(this).attr("data-value");
        if (value == $("#AtHome").val())
        {
            $('#home-testride').modal('show');
        }
         else if (value == $("#AtDealership").val()) {
             $('#divTestRideDaySection').hide();
             $('#divTestRideSlotSection').hide();
            $('#divDealerListSection').hide();
            $('#divTestrideLocationSection a').removeClass("active");
            $('#divPersonalDetailsSection').hide();

            $(this).addClass("active");
            $('#divUserAddressSection').hide();
            GetDealersList(2);
         }
        PushDataLayerGeneral('Test_Ride_Slot_Selection', 'Test Ride Slot Selection', "Preferred Location", value);

    });
    $('#btnConfirmTestRideAtHome').click(function () {
        GetDealersList(1);
        $('#divTestRideDaySection').hide();
        $('#divTestRideSlotSection').hide();
        $('#divDealerListSection').hide();
        $('#divPersonalDetailsSection').hide();
        
      
        $("#angTestrideAtHome").addClass("active");
        $("#angAtDealership").removeClass("active");
    });
    $('#btnCancelTestRideAtHomePopup').click(function () {
        $('#divUserAddressSection').hide();
        $('#divAddressNextBtn').hide();
        $("#angTestrideAtHome").removeClass("active");
    });
    $(document).on('click', '#divDealerListSection a', function () {
        $('#divDealerListSection a').removeClass("active");
        $('#divTestRideDaySection').hide();
        $('#divTestRideSlotSection').hide();
        $('#divPersonalDetailsSection').hide();

        $(this).addClass("active");
        var dealerId = $(this).attr("data-dealerId");
        var dealerStartDay = $(this).attr("data-dealerStartDay");
        var testrideLocationId = 0;//at dealership
        if ($('#TestRideLocation').val() == 1)//at home
        {
            testrideLocationId=1
        }
        GetTestrideDays(dealerId, dealerStartDay, testrideLocationId, $('#TestRideLocation').val())
        if ($("#divTestRideSlotSection").length) {
            $('#divTestRideSlotSection a').removeClass("active");
        }
        PushDataLayerGeneral('Test_Ride_Slot_Selection', 'Test Ride Slot Selection', 'Select Dealer', $(this).data("dealername"));
    });
    $(document).on('click', '#divTestRideDaySection a', function () {
        if ($(this).hasClass('disabled')) {
            return false;
        }
        $('#divTestRideDaySection a').removeClass("active");
        $(this).addClass("active");
        $("#testrideErrorMessage").hide();
        $("#slotNotAvailableMessage").hide();
        if ($("#divTestRideSlotSection").length)
        {
            $('#divTestRideSlotSection').show();
            $('body, html').animate({
                scrollTop: $('#divTestRideSlotSection').offset().top - 60,
            });
        }
        else
        {
            $('#selectedtestrideSlotValue').hide();
            showTestRideSelectionSummary();
        }
        var selecteddate = $("#divTestRideDaySection").find('a.active').data("date");
        $('#selectedTestrideDate').html(selecteddate);
        PushDataLayerGeneral('test_ride_slot_selection', 'Test Ride Slot Selection', 'Time Slot Selected', selecteddate);
    });
    $(document).on('click', '#divTestRideSlotSection a', function () {
        $('#divTestRideSlotSection a').removeClass("active");
        $(this).addClass("active");
        $('#selectedtestrideSlotValue').html($(this).data("slottext"));
        $('#selectedtestrideSlotValue').show();
        showTestRideSelectionSummary();
    });
    $("#btnSubmitTestrideEnquiry").click(function (e) {
        e.preventDefault();
      
        if ($("#frmBookTestRide").valid()) {

            $('#alreadyBookedOtherCity').hide();
            SendOTP(false);
            PushDataLayerGeneral('Test_Ride_Slot_Selection', 'Test Ride Slot Selection', $(this).text(), $("#txtTestrideLocation").val());
        }

    });
    $("#btnTestRideAddressSectionNext").click(function (e) {
        e.preventDefault();
        $('#divPersonalDetailsSection').hide();
        if ($("#frmUserAddressSection").valid()) {
            $('#divDealerListSection').show();
            $('#divAddressNextBtn').hide();
            $('body, html').animate({
                scrollTop: $('#divDealerListSection').offset().top - 60,
            });
            PushDataLayerGeneral('Test_Ride_Slot_Selection', 'Test Ride Slot Selection', 'Home Test Ride', $(this).text());
        }
    });
    $("#AddressLine1").on("keyup change", function (e) {
        e.preventDefault();
        $('#divAddressNextBtn').show();
        $('#divDealerListSection').hide();
        $('#divTestRideDaySection').hide();
        $('#divTestRideSlotSection').hide();
        $('#divPersonalDetailsSection').hide();

    });
    $("#btnSubmitTestrideBooking").click(function (e) {

        e.preventDefault();

        $('#alreadyBooked').hide();
        $('#slotNotAvailableMessage').hide();
        if ($("#frmBookTestRide").valid()) {
            SendOTP(false);
            PushDataLayerGeneral('Test_Ride_Slot_Selection', 'Test Ride Slot Selection', $(this).text(), 'Book Test Ride CTA');
        }
        else
        {
             $('body, html').animate({
                 scrollTop: $('#divPersonalDetailsSection').offset().top - 60,
             });
        }
    });

});
function selecteFeaturedCity(selectedItem)
{
    var isSelected = false;

    $('#divFeaturedCityList li a').each(function (index, value) {

        if (selectedItem.includes($(this).clone().children().remove().end().text())) {
            $('#divFeaturedCityList a').removeClass("active");
            $(this).addClass("active");
            isSelected = true;
            return true;
        }

    });
    if (!isSelected)
    {
        $('#divFeaturedCityList a').removeClass("active");
    }
}
function showTestRideSelectionSummary()
{
    $('#divPersonalDetailsSection').show();
    $('#divDalerSelectionSummary').show();
    $('#btnSubmitTestrideBooking').show();
    $('#btnSubmitTestrideEnquiry').hide();
    if ($("#frmBookTestRide").data("validator") != undefined) {
        $("#frmBookTestRide").data("validator").resetForm();
    }
    var selectedLocation = $("#divTestrideLocationSection").find('a.active').data("value");
    if (selectedLocation == $("#AtHome").val()) {
        $('#spnATHomeText').show();
        $('#spnATDealershipText').hide();
    }
    else {
        $('#spnATDealershipText').show();
        $('#spnATHomeText').hide();
    }
    var selectedDealerAddress = $("#divDealerListSection").find('a.active #spnDealerAddress').text();
    $('#dealerAddressText').html(selectedDealerAddress);

    var selectedDealer = $("#divDealerListSection").find('a.active');
    var dealerName = $(selectedDealer).data("dealername");
    var dealerdistance = $(selectedDealer).data("dealerdistance");
    $('#dealerNameandDistance').html(dealerName + ", " + dealerdistance);
    var selecteddate = $("#divTestRideDaySection").find('a.active').data("date");
    $('#selectedTestrideDate').html(selecteddate);

    if ($("#divTestRideSlotSection").length) {
        var selectedSlot = $("#divTestRideSlotSection").find('a.active').data("slottext");
        $('#selectedtestrideSlotValue').html(selectedSlot);
        $('#divSelectedSlot').show();
    }
    else
    {
        $('#divSelectedSlot').hide();
    }

    $('body, html').animate({
        scrollTop: $('#divPersonalDetailsSection').offset().top - 60,
    });
}
function GetTestRideDeliveryTimeline(CityName, Pincode, State) {
    $('#CityNotExist').hide();
    var LaunchCityTypeValue = $('#LaunchCityTypeValue').val();
    $('#PincodeReadOnly').val(Pincode);
    $('#PincodeReadOnly').closest('.form-group').addClass('focused');
    var formData = {
        'cityName': CityName,
        'pincode': Pincode,
        'state': State
    };
    $.ajax({
        type: "post",
        url: 'api/GetTestRideDeliveryTimeline',
        data: JSON.stringify(formData),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            if (response.success) {
                $('#loader').modal("hide");

                $('#CityId').val(response.apiResponse.CityId);
                $('#CityType').val(response.apiResponse.CityType);
                $('#IsLockdown').val(response.apiResponse.Islockdown);
                $('#CityName').val(response.apiResponse.CityName);
                if (LaunchCityTypeValue == response.apiResponse.CityType && !response.apiResponse.Islockdown) {
                    $('body, html').animate({
                        scrollTop: $('#divTestrideLocationSection').offset().top - 50,
                    });
                    $('#notlaunchedmessage').hide();
                    $('#divLockdownMessage').hide();
                    $('#btnSubmitTestrideEnquiry').hide();
                    $('#divTestrideLocationSection').show();
                    $('#divPersonalDetailsSection').hide();
                }
                else {
                    $('body, html').animate({
                        scrollTop: $('#divPersonalDetailsSection').offset().top - 60,
                    });
                    if (response.apiResponse.Islockdown)
                    {
                        $('#divLockdownMessage').show();
                    }
                    else
                    {
                        $('#notlaunchedmessage').show();
                    }

                    $('#divPersonalDetailsSection').show();
                    $("#testrideErrorMessage").hide();
                    $("#slotNotAvailableMessage").hide();
                    if ($("#frmBookTestRide").data("validator") != undefined) {
                        $("#frmBookTestRide").data("validator").resetForm();
                    }
                    $('#btnSubmitTestrideBooking').hide();
                    $('#btnSubmitTestrideEnquiry').show();
                    $('#divTestrideLocationSection').hide();
                    $('#divUserAddressSection').hide();
                    $('#divDalerSelectionSummary').hide();
                    
                }

            }
            else {
                $('#loader').modal("hide");
                $('#CityNotExist').show();
            }
        },
        error: function (jqXHR, exception) {
            console.log(exception)
            $('#loader').modal("hide");
            $('#CityNotExist').show();
        }
    });

}
function GetDealersList(testRideLocation) {
    $('#dtrNotAvailableErrorMsg').hide();
    $('#htrNotAvailableErrorMsg').hide();

    $('#loader').modal("show");
    var formData = {
        'pincode': $('#Pincode').val(),
        'datasource': $('#Datasource').val(),
        'testRideLocation': testRideLocation
    };
    $.ajax({
        type: "post",
        url: 'api/GetDealersList',
        data: JSON.stringify(formData),
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            $('#loader').modal("hide");
            $('#divDealerListSection').html(response);
            if(testRideLocation==2)
            {
                if ($('#DealerCount').val() > 0) {
                    $('#divDealerListSection').show();
                    $('body, html').animate({
                        scrollTop: $('#divDealerListSection').offset().top - 60,
                    });
                }
                else
                {
                    $('#dtrNotAvailableErrorMsg').show();
                }
            }
            else if (testRideLocation == 1) {
                if ($('#DealerCount').val() > 0) {
                    $('#divUserAddressSection').show();
                    $('#divAddressNextBtn').show();
                    if ($("#frmUserAddressSection").data("validator") != undefined) {
                        $("#frmUserAddressSection").data("validator").resetForm();
                    }
                    $('body, html').animate({
                        scrollTop: $('#divUserAddressSection').offset().top - 60,
                    });

                }
                else {
                    $('#htrNotAvailableErrorMsg').show();
                }
            }
            

        },
        error: function (jqXHR, exception) {
            console.log(exception)
            $('#loader').modal("hide");
            $('#divDealerListSection').hide();
        }
    });

}
function GetTestrideDays(dealerCode, dealerStartDay, testrideLocationId, testRideLocation) {

    $('#loader').modal("show");
    var formData = {
        'dealerCode': dealerCode,
        'dealerStartDay': dealerStartDay,
        'testrideLocationId': testrideLocationId,
        'datasource': $('#Datasource').val(),
        'testRideLocation': testRideLocation
    };
    $.ajax({
        type: "post",
        url: 'api/GetTestrideDays',
        data: JSON.stringify(formData),
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            $('#loader').modal("hide");
            $('#divTestRideDaySection').html(response);
            $('#divTestRideDaySection').show();
            $('body, html').animate({
                scrollTop: $('#divTestRideDaySection').offset().top - 60,
            });
        },
        error: function (jqXHR, exception) {
            console.log(exception)
            $('#loader').modal("hide");
            $('#divTestRideDaySection').hide();
            $('#divTestRideSlotSection').hide();

        }
    });

}
function SaveTestRideData(e) {
    var formData = null;
   
    $('#loader').modal("show");
    var type = $("#TestRide").val();
    if ($("#IsLockdown").val() == "true") {
        type = $("#LockdownEnquiry").val();
    }
    else if ($("#CityType").val() != $("#LaunchCityTypeValue").val()) {
        type = $("#TestRideEnquiry").val();
    }
    var form = $("#frmBookTestRide");
    var url = form.attr('action');
    var SuccessPageLink = $('#frmBookTestRide').attr('data-SuccessPageLink')+'?type='+type;

    var selectedDealer = $("#divDealerListSection").find('a.active');
    var dealerName = $(selectedDealer).data("dealername");
   // var dealerdistance = $(selectedDealer).data("dealerdistance");
    var dealerid = $(selectedDealer).data("dealerid");
    var selectedDealerAddress = $(selectedDealer).data("dealerlocation");
    var selecteddate = $("#divTestRideDaySection").find('a.active').data("date");
    var selectedLocation = $("#divTestrideLocationSection").find('a.active').data("value");
    var selectedSlot =$("#divTestRideSlotSection").length? $("#divTestRideSlotSection").find('a.active').data("slot"):"";
    if (type == $("#TestRide").val()) {
        fbq('track', 'iqTRSubmit');
        floodTestRideSubmit();

        formData = {
            'location': selectedDealerAddress,
            'date': type == $("#TestRide").val() ? selecteddate : null,
            'timeSlot': selectedSlot,
            'FullName': $('#Name').val(),
            'mobile': $('#Mobile').val(),
            'email': $('#Email').val(),
            'dealerCode': type == $("#TestRide").val() ? dealerid : null,
            'isOnlineRequest': $('#isOnlineRequest').val(),
            'isWalkingRequest': $('#isWalkingRequest').val(),
            'testRideAt': selectedLocation,
            'consent': $('#consent').is(":checked"),
            'Pincode': $("#Pincode").val(),
            'City': $("#CityName").val(),
            'AddressLine1': $("#AddressLine1").val(),
            'AddressLine2': $("#AddressLine2").val(),
            'CityId': $("#CityId").val(),
            'CID': getCookie("_ga"),
            'DeviceType': getDeviceType(),
            'OTP': $('#OTP').val(),
            'OTPType': type,
            'EnquiryType': type,
            'Platform': $("#Platform").val(),
        };
    }
    else
    {
        formData = {
            'FullName': $('#Name').val(),
            'mobile': $('#Mobile').val(),
            'email': $('#Email').val(),
            'isOnlineRequest': $('#isOnlineRequest').val(),
            'isWalkingRequest': $('#isWalkingRequest').val(),
            'consent': $('#consent').is(":checked"),
            'Pincode': $("#Pincode").val(),
            'City': $("#CityName").val(),
            'CityId': $("#CityId").val(),
            'CID': getCookie("_ga"),
            'DeviceType': getDeviceType(),
            'OTP': $('#OTP').val(),
            'OTPType': type,
            'EnquiryType': type,
            'Platform': $("#Platform").val(),

        };
    }
    //$('#alreadyBooked').hide();
    //$('#alreadyBookedOtherCity').hide();
    $("#testrideErrorMessage").hide();
    $("#slotNotAvailableMessage").hide();
    $.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify(formData),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {

            if (response.success) {
                //$("#successBooked").modal("show");
                $("#OTP").val('');
                $('#otpValodation').modal('hide');
                if (type == $("#TestRide").val())
                {
                    gtag_report_conversion();
                    PushDataLayerPersonalDetails('personal_details_form', 'Personal Details Form', $("#btnSubmitTestrideBooking").text() + '_success',
                   dealerName, $("#CityName").val(), '');
                    PushDataLayerEnquiryAndTestRideSuccess("test_ride", $("#CityName").val(), "undefined");
                }
                PushDataLayerGeneral('Test_Ride_Slot_Selection', 'Test Ride Slot Selection', 'OTP Verfication', $("#btnVerifyOTP").text())
                window.location = SuccessPageLink;
            }
            else if (!response.isOtpSuccess) {
                $('#loader').modal("hide");
                $("#lblInvalidOTP").show();
                if (type == $("#TestRide").val()) {
                    PushDataLayerPersonalDetails('personal_details_form', 'Personal Details Form', $("#btnSubmitTestrideBooking").text() + '_fail',
                       dealerName, $("#CityName").val(), $("#lblInvalidOTP").text());
                }
            }
            else if (response.message !== "") {
                $('#loader').modal("hide");
                $("#OTP").val('');
                $('#otpValodation').modal('hide');
                $("#testrideErrorMessage").html(response.message);
                $("#testrideErrorMessage").show();
                if (type == $("#TestRide").val()) {
                    PushDataLayerPersonalDetails('personal_details_form', 'Personal Details Form', $("#btnSubmitTestrideBooking").text() + '_fail',
                        dealerName, $("#CityName").val(), response.message);
                  
                    //if (response.errorCode == "EAE-114")
                    //{
                    //    $("#slotNotAvailableMessage").show();
                    //}
                    
                }
            }

           
        }
    });

};
//function SaveTestRideData(e) {
//    fbq('track', 'iqTRSubmit');
//    $('#loader').modal("show");
//    var form = $("#frmBookTestRide");
//    var url = form.attr('action');

//    var formData = {
//        'location': $('#location').val(),
//        'date': $('#date').val(),
//        'timeSlot': $('#timeSlot').val(),
//        'firstName': $('#firstName').val(),
//        'lastName': $('#lastName').val(),
//        'mobile': $('#mobile').val(),
//        'email': $('#email').val(),
//        'dealerCode': $('#dealerCode').val(),
//        'isOnlineRequest': $('#isOnlineRequest').val(),
//        'isWalkingRequest': $('#isWalkingRequest').val(),
//        'testRideAt': $('#testRideAt').val(),
//        'consent': $('#consent').is(":checked"),
//        'Pincode': $("#Pincode").val(),
//        'City': $("#City").val(),
//        'AddressLine1': $("#AddressLine1").val(),
//        'AddressLine2': $("#AddressLine2").val(),
//        'CityId': $("#CityId").val(),
//        'CID': getCookie("_ga"),
//        'DeviceType': getDeviceType(),
//        'OTP': $('#OTP').val(),
//        'OTPType': $("#btnVerifyOTP").attr("data-otpType"),
//        'Variant': $('#Variant').val(),
//        'VariantName': $('#VariantName').val(),
//    };
//    floodTestRideSubmit();
//    $('#alreadyBooked').hide();
//    $.ajax({
//        type: "POST",
//        url: url,
//        data: JSON.stringify(formData),
//        contentType: "application/json; charset=utf-8",
//        dataType: "json",
//        success: function (response) {

//            if (response.success) {
//                gtag_report_conversion();
//                $("#successBooked").modal("show");
//                $("#OTP").val('');
//                $('#otpValodation').modal('hide');
//                $('#alreadyBooked').hide();
//                PushDataLayerPersonalDetails('personal_details_form', 'Personal Details Form', $("#btnSaveTestRide").text() + '_success',
//                    $('#dealerName').val(), $("#City").val(), '');

//            }
//            else if (!response.isOtpSuccess) {
//                $("#lblInvalidOTP").show();
//                PushDataLayerPersonalDetails('personal_details_form', 'Personal Details Form', $("#btnSaveTestRide").text() + '_fail',
//                    $('#dealerName').val(), $("#City").val(), $("#lblInvalidOTP").text());
//            }
//            else if (response.IsBooked !== "") {
//                //$('#alreadyBooked').show();
//                $("#OTP").val('');
//                $('#otpValodation').modal('hide');
//                PushDataLayerPersonalDetails('personal_details_form', 'Personal Details Form', $("#btnSaveTestRide").text() + '_fail',
//                    $('#dealerName').val(), $("#City").val(), $("#alreadyBooked").text());
//            }

//            $('#loader').modal("hide");
//        }
//    });

//};
function gtag_report_conversion() {
    var callback = function () {

        console.log('Google analytics is ready');
    };
    gtag('event', 'conversion', { 'send_to': 'AW-680377053/7m-ICMHL2rgBEN31tsQC', 'event_callback': callback }); return false;
}
function floodTestRideSubmit() {

    var axel = Math.random() + "";
    var a = axel * 10000000000000000;
    var flDiv = document.body.appendChild(document.createElement("div"));
    flDiv.setAttribute("id", "DCLK_FLDiv1");
    flDiv.style.position = "absolute";
    flDiv.style.top = "0";
    flDiv.style.left = "0";
    flDiv.style.width = "1px";
    flDiv.style.height = "1px";
    flDiv.style.display = "none";
    flDiv.innerHTML = '<iframe id="DCLK_FLIframe1" src="https://9876476.fls.doubleclick.net/activityi;src=9876476;type=iqube0;cat=proje003;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=' + a + '?" width="1" height="1" frameborder="0"><\/iframe>';
}
function HideTestRideBookingSections()
{
    $('#CityNotExist').hide();
    $('#CityId').val("");
    $('#notlaunchedmessage').hide();
    $('#divLockdownMessage').hide();
    $('#btnSubmitTestrideEnquiry').hide();
    $('#divTestrideLocationSection').hide();
    $('#divPersonalDetailsSection').hide();
    $('#btnSubmitTestrideEnquiry').hide();
    $('#divUserAddressSection').hide();
    $('#divTestrideLocationSection a').removeClass("active");
    $('#dtrNotAvailableErrorMsg').hide();
    $('#htrNotAvailableErrorMsg').hide();
    $('#divDealerListSection').hide();
    $('#divTestRideDaySection').hide();
    $('#divTestRideSlotSection').hide();
    $("#testrideErrorMessage").hide();
    $("#slotNotAvailableMessage").hide();
    

}
function ValidateFeedbackRadio() {

    var isCheckBoxValid = false;
    var productExperience = $("#chkProductExperience input[type=radio]:checked").length > 0 ? true : false;
    var acceleration = $("#chkAcceleration input[type=radio]:checked").length > 0 ? true : false;
    var handling = $("#chkHandling input[type=radio]:checked").length > 0 ? true : false;
    var vehicleSound = $("#chkVehicleSound input[type=radio]:checked").length > 0 ? true : false;
    var dashboardConnectedConsole = $("#chkDashboardConnectedConsole input[type=radio]:checked").length > 0 ? true : false;
    var vehicleStyling = $("#chkVehicleStyling input[type=radio]:checked").length > 0 ? true : false;
    var vehicleExplanationBySalesExecutive = $("#chkVehicleExplanationBySalesExecutive input[type=radio]:checked").length > 0 ? true : false;
    var appDemonstrationBySalesExecutive = $("#chkAppDemonstrationBySalesExecutive input[type=radio]:checked").length > 0 ? true : false;
    var vehicleStyling = $("#chkVehicleStyling input[type=radio]:checked").length > 0 ? true : false;


    //Set the Valid Flag to True if at-least one CheckBox is checked.
    if (productExperience && acceleration && handling && vehicleSound && dashboardConnectedConsole && vehicleStyling && vehicleExplanationBySalesExecutive && appDemonstrationBySalesExecutive && vehicleStyling) {
        isCheckBoxValid = true;
    }

    //Display error message if no CheckBox is checked.
    if (isCheckBoxValid) {
        $('#chkGroupError').attr('style', 'display:none !important');
    }
    else {
        $("#chkGroupError").show();
    }
    return isCheckBoxValid;
}

function ValidateFeedbackInputs() {

    var isInputValid = false;
    isInputValid = $("#frmTestRideCompletedFeedback").valid();
    return isInputValid;
}

function HomeTestRideCancel() {
    $('#rbTestRideAtHome').prop("checked", false);
}

function IsAllOptionChecked() {
    if ($("input[name='location']:checked").attr("checked") == "checked" && $("input[name='date']:checked").attr("checked") == "checked" && $("input[name='timeSlot']:checked").attr("checked") == "checked")
        return true;
    else
        return false;
}

function validatePIN(pin) {

    var pinRegx = new RegExp('^[1-9][0-9]{5}$');

    if (pinRegx.test(pin)) {
        return true;
    } else {
        return false;
    }
}
function validateLocation() {

    if (!navigator.geolocation) {
        return false;
    }
    if (lat === undefined && long === undefined) {
        return false;
    } else {
        return true;
    }
}

function RemoveDealerSelection() {
    if ($("[name='dealership']").length != 0) {
        $("[name='dealership']").prop('checked', false);
    }
}

function RemovePincodeEntires() {
    if ($("[name='dealership']").length != 0) {
        $('#pinCodeInput').val('');
    }
}

function GetLocatorUrl() {

   var baseUrl = window.location.origin + "/three-wheelers";

    // Get the current URL
    var currentUrl = window.location.href;

    // Check if the URL is the home page
    if (currentUrl === baseUrl) {
        return 'three-wheelers/';
    }
    else {
        return '';
    }
}
function DetectRideTheChangeUrl() {

    if (window.location.pathname.indexOf("select-test-ride-solts") != -1)
        return false;
    else
        return true;
}

function DateChange() {
    $('#CheckDate').hide();
    if ($("input[name='timeSlot']:checked").val() != undefined) {
        $(".slot-next").removeAttr("disabled");
    }
    $(".slot-next").removeAttr("disabled");
    $("#slot").removeAttr("disabled");
}
window.mobileCheck = function () {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

function RemoveTelAttribute() {
    if (window.location.pathname == "/iqube") {
        if (!window.mobileCheck()) {
            $("a[name=dealerPhone]").each(function () {
                this.href = this.href.replace(this.href, 'javascript:void(0);');
            });
        }
    }
}
function MapView(Url) {
    $("#gmap_canvas").attr('src', Url);
}


