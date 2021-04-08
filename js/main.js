// load json function

function loadColors() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var recordCount = 0;
            var records = JSON.parse(this.responseText);
            var newInnerHTML = '';
            records.forEach(function (record, index) {

                // get values
                var id = String(record.id).trim();
                var r = colorValue(record.color.r);
                var g = colorValue(record.color.g);
                var b = colorValue(record.color.b);
                var rgbColor = 'rgb(' + r + ',' + g + ',' + b + ')';

                // set output
                if (id != "") {
                    recordCount++;
                    newInnerHTML += '<span title="' + escapeHtml(id) + '\n' + escapeHtml(rgbColor) + '" style="background-color: ' + escapeHtml(rgbColor) + '">';
                    newInnerHTML += '</span>';
                }
            });
            if (recordCount == 0)
                newInnerHTML = 'No colors found! 😭';

            // replace content
            document.getElementById("colorRecords").innerHTML = newInnerHTML;
        }
    };
    xmlhttp.open("GET", "data/colors.json", true);
    xmlhttp.send();
}

// helper functions

function escapeHtml(text) {
    var map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

function colorValue(value) {
    var x = parseInt(value);
    return (x < 0) ? 0 : (x > 255) ? 255 : x;
}
