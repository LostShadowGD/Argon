let url_label = $("#url_label");
let toggle = $("#url_type");
let form = $("#form");

let switchStatus;
let video_url = "https://lostgdps.github.io/py-yt/endpoint/index.html";
let song_url = "https://lostgdps.github.io/py-yt/endpoint/audio/index.html";

function change() {
  switchStatus = $(this).is(':checked');
  url_label.html(switchStatus ? "Song URL" : "Video URL");
  form.attr('action', switchStatus ? song_url : video_url)
}

//run change for the first time so the URL is correct
change()
toggle.on('change', change);