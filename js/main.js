$(".watch-vdo-play-button").click(function () {
  $(this).remove();
  $(".watch-vdo").css("background-color", "black");
  $(".watch-vdo").append(
    `<video class="watch-vdo-video" src="/assets/video/VID_20180502_170435.mp4" controls height=100% width=100%></video>`
  );
});

$(window).scroll(function () {
  const top = $(window).scrollTop();
  if (top >= 20) {
    $(".upbutton").css("visibility", "visible");
  } else {
    $(".upbutton").css("visibility", "hidden");
  }
});

$(".slider-button").click(function () {
  $(".portfolios-box").removeClass("active");
  $(".slider-button").removeClass("active");
  if ($(this).hasClass("tab-1")) {
    $(".tab-1").addClass("active");
  } else if ($(this).hasClass("tab-2")) {
    $(".tab-2").addClass("active");
  } else {
    {
      $(".tab-3").addClass("active");
    }
  }
});

$(".send-message-right-button").click(function () {
  let sendInfo={
    name: '',
    email:'',
    phone: Number,
    message:''
  };
  sendInfo.name=$("#sendname").val();
  sendInfo.email= $("#sendemail").val();
  sendInfo.phone= $("#sendphone").val();
  sendInfo.message= $("#sendmessagetext").val();
  alert(
    `Name: ${sendInfo.name},
     email: ${sendInfo.email},
     Phone: ${sendInfo.phone},
     Message: ${sendInfo.message}`
  );
});
