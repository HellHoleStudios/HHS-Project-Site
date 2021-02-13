var data;
var tablehead;
var mode;

const MODE_SONG = 1;
const MODE_INDEX = 0;

var dec_template = {
    "name": "",
    "link": "",
    "author": "",
    "release": "",
    "coauthor": "",
    "category": "",
    "subcategory": "",
    "status": "",
    "lang": "",
    "tool": "",
    "layout": "",
    "comment": "", //optional
    "rating": 0, //optional,0-4,default is 0. 
}

var template = {
    "name": "",
    "link": "",
    "author": [],
    "release": "",
    "coauthor": [],
    "tag": [],
    "rating": 0
}

function initTable() {
    for (var i = 0; i < data.length; i++) {
        if (data[i]["rating"] == undefined) {
            data[i]["rating"] = 0;
        }
    }
}

/*
Rating System
0=no one uses
1=You are using
2=some people in HHS are using
3=some people out of HHS are using
4=everyone should know this project
*/
var __tablehead = [
    ["Name", "name", true],
    ["Author", "author", true],
    ["Coauthor", "coauthor", true, 'width:10%;'],
    ["Release Date", "release", true, 'min-width:95px;'],
    ["Tag", "tag", true],
    ["Link", "link", true],
    ["Hot", "rating", true]
]

var __songth = [
    ["Name", "name", true, "width:30%;"],
    ["Author", "author", true],
    ["Release Date", "release", true, 'min-width:95px;'],
    ["Tag", "tag", true],
    ["Length", "length", true],
    ["Source", "source", true]
]

function sort(by, dir) {
    function cmp(a, b) {
        if (a[by] < b[by]) {
            return -1;
        }
        if (a[by] > b[by]) {
            return 1;
        }
        var aa = "" + JSON.stringify(a);
        var bb = "" + JSON.stringify(b);
        //console.log(aa);
        //console.log(bb);
        //console.log(aa<bb);
        if (aa < bb) {
            return -1;
        }
        if (aa > bb) {
            return 1;
        }
        return 0;
    }
    data.sort(function (a, b) {
        return cmp(a, b) * (dir ? 1 : -1);
    });
}

var curSort = "";
var curDir = true;

var importantOnly = true;

function toggleImportant() {
    importantOnly = !importantOnly;
    refreshTable();
}

function Msort(by, dir) {
    sort(by, dir);
    curSort = by;
    curDir = dir;
    refreshTable();
}

function toBadgeString(name) {
    var str = ""

    if (name.trim() == "") {
        return "";
    }

    if (badges[name] == undefined) {
        console.log("Error:" + name);
        return name;
    }

    str += '<span data-toggle="tooltip" style="margin-top:2px;" title="' + badges[name]["tooltip"] + '" class="badge ' + badges[name]["kind"] + '">' + badges[name]["display"] + '</span>';

    return str;
}

function FilterSearch(item, id, filter) {

    var tag = item[id];

    for (var j = 0; j < tag.length; j++) {
        if (tag[j] == '') {
            continue;
        }
        if (badges[tag[j]] == undefined || badges[tag[j]]["display"].toLowerCase().includes(filter)) {
            return true;
        }
    }

    return false;
}

function FilterCheck(item, filter) {

    if (item["name"].toLowerCase().includes(filter)) {
        return true;
    }
    if (item["release"].toLowerCase().includes(filter)) {
        return true;
    }

    // if(mode == MODE_SONG && item["supplement"]!=undefined && item["supplement"].toLowerCase().includes(filter)){
    //     return true;
    // }

    if (mode == MODE_SONG && item["audio"] != undefined && filter == "audio") {
        return true;
    }
    if (mode == MODE_SONG && item["supplement"] != undefined && filter == "supplement") {
        return true;
    }
    if (mode == MODE_SONG && REP(item["source"]).toLowerCase().includes(filter)) {
        return true;
    }

    // console.log(item)
    if (FilterSearch(item, "tag", filter)) {
        return true;
    }

    // console.log("tag ")
    if (FilterSearch(item, "author", filter)) {
        return true;
    }

    // console.log("author ")
    if (mode == MODE_INDEX && FilterSearch(item, "coauthor", filter)) {
        return true;
    }

    // console.log("coauthor ")
    return false;

}

function filterCheck(item) {

    var filter = document.getElementById("filter").value;
    var incList = filter.split(",")
    // console.log(tag+" by "+incList);
    for (var i = 0; i < incList.length; i++) {
        var trimmed = incList[i].toLowerCase().trim();
        if (!FilterCheck(item, trimmed)) {
            return false;
        }

    }
    return true;
}

String.prototype.replaceAll = function (FindText, RepText) {
    regExp = new RegExp(FindText, "g");
    return this.replace(regExp, RepText);
}

function renderLink(link) {
    var rules = [
        ["github.com", "Link to Github", "fa fa-github", false],
        ["blog.hellholestudios.top", "Link to HHS Blog", "fa fa-wordpress", true],
        ["drive.google.com", "Link to Google Drive", "fa fa-google", false],
        ["drive.xizcm.site", "Link to XIZCM's Drive", "fa fa-database", true],
        ["xiaogenintendo.github.io", "Link to XGN's Blog", "fa fa-envelope", false],
        ["itch.io", "Link to Itch.io", "fa fa-gamepad", false]
    ]

    var tmp = ""
    if (link == "") {
        tmp += "<i data-toggle=\"tooltip\" title=\"No Link Available\" class=\"fa fa-close\"></i>";
    } else {
        var found = false;
        for (var item = 0; item < rules.length; item++) {
            if (link.includes(rules[item][0])) {
                tmp += "<a data-toggle=\"tooltip\" target=\"_blank\"  title=\"" + rules[item][1] + "\" href=\"" + link + "\"><i class=\"" + rules[item][2] + "\"></i></a>";
                if (rules[item][3]) {
                    tmp += "<sup><i data-toggle=\"tooltip\" class=\"fa fa-exclamation\" title=\"WARNING: Link probably dead/unupdated\"></sup>"
                }
                tmp += "</td>";
                found = true;
                break;
            }
        }
        if (!found) {
            tmp += "<a data-toggle=\"tooltip\" target=\"_blank\"  title=\"Link to the Resources\" href=\"" + link + "\"><i class=\"fa fa-external-link\"></i></a>";
        }
    }

    return tmp;
}

function REP(txt) {
    return txt.replaceAll("#A#", "上海アリス幻樂団").replaceAll("#O#", "Original")
}

function addAudio(i) {
    document.getElementById("audio-" + i).outerHTML = `<audio src="${data[i]["audio"]}" controls="controls">Audio Not Supported :(</audio> <br/>`
}

function refreshTable() {
    var node = document.getElementById("table");

    var tmp = "";
    var supc = 1;

    tmp += "<table class=\"table table-sm table-hover table-striped table-bordered\">";
    //start rendering th
    tmp += "<thead><tr>";
    for (var i = 0; i < tablehead.length; i++) {
        if (importantOnly && !tablehead[i][2]) {
            continue;
        }
        tmp += "<th ";
        if (tablehead[i][3]) {
            tmp += 'style="' + tablehead[i][3] + '" ';
        }
        if (tablehead[i][1] == curSort) {
            if (curDir) {
                tmp += "onclick=\"Msort('" + tablehead[i][1] + "',false)\">" + tablehead[i][0] + "<i class=\"fa fa-sort-up\"></i></th>";
            } else {
                tmp += "onclick=\"Msort('" + tablehead[i][1] + "',true)\">" + tablehead[i][0] + "<i class=\"fa fa-sort-down\"></i></th>";
            }
        } else {
            tmp += "onclick=\"Msort('" + tablehead[i][1] + "',true)\">" + tablehead[i][0] + "<i class=\"fa fa-sort\"></i></th>";
        }

    }
    tmp += "</tr></thead><tbody>";

    var itemCount = 0;

    var nowTime = new Date().getTime()

    //start rendering data
    for (var i = 0; i < data.length; i++) {

        if (!filterCheck(data[i])) {
            continue;
        }

        itemCount++;

        if (mode == MODE_SONG && (data[i]["supplement"] != undefined || data[i]["audio"] != undefined)) {
            tmp += '<tr data-toggle="collapse" data-target="#supplement' + i + '">';
        } else {
            tmp += '<tr>'
        }
        for (var j = 0; j < tablehead.length; j++) {
            if (tablehead[j][1] == "name") {
                tmp += "<td>" + data[i][tablehead[j][1]];
                if (data[i]["supplement"] != undefined) {
                    tmp += ' <i class="fa fa-ellipsis-h" title="Supplement Available" data-toggle="tooltip"></i>';
                }
                if (data[i]["audio"] != undefined) {
                    tmp += ' <i class="fa fa-headphones" title="Audio Available" data-toggle="tooltip"></i>';
                }
                if (data[i]["comment"] != null) {
                    tmp += "<sup><a id=\"src" + supc + "\" href=\"#com" + supc + "\" title=\"" + data[i]["comment"] + "\">[" + supc + "]</a></sup>";
                    supc++;
                }
                tmp += "</td>";
            } else if (tablehead[j][1] == "link") {

                var link = data[i][tablehead[j][1]]

                if (typeof link == "string") {
                    tmp += "<td class=\"text-center\">" + renderLink(link) + "</td>"
                } else {

                    var cls = ""

                    for (var k in link) {
                        cls += `${k}:${renderLink(link[k])}<br/>`
                    }

                    tmp += `
                    <div class="modal fade" id="modal${i}">
                      <div class="modal-dialog">
                        <div class="modal-content">
                     
                          <!-- 模态框头部 -->
                          <div class="modal-header">
                            <h4 class="modal-title">Links</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                          </div>
                     
                          <!-- 模态框主体 -->
                          <div class="modal-body">
                            ${cls}
                          </div>
                     
                          <!-- 模态框底部 -->
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          </div>
                     
                        </div>
                      </div>
                    </div>
                    `

                    tmp += `<td class="text-center">
                    <span data-toggle="modal" data-target="#modal${i}">
                        <i data-toggle="tooltip" title="Multiple Links Available. Click for more" class="fa fa-ellipsis-h"></i>
                    </span>
                    </td>`;
                }

            } else if (tablehead[j][1] == "rating") {
                var dat = data[i][tablehead[j][1]];
                tmp += "<td class=\"text-center\"> <i title=\"Popularity:" + dat + "\" class=\"fa fa-thermometer-" + dat + "\"></i>" + dat + "</td>"
            } else if (tablehead[j][1].match("release|length|source") != null) {
                //release date just normal
                tmp += "<td>" + REP(data[i][tablehead[j][1]]) + "</td>";
            } else {
                //badge showing
                tmp += "<td>"
                for (var k = 0; k < data[i][tablehead[j][1]].length; k++) {

                    tmp += toBadgeString(data[i][tablehead[j][1]][k]) + " "
                }
                tmp += "</td>"
            }

        }
        tmp += "</tr>";

        if (mode == MODE_SONG && (data[i]["supplement"] != undefined || data[i]["audio"] != undefined)) {
            tmp += '<tr style="background-color:#ffc;"><td colspan=6 style="padding:0px;">';
            tmp += '<div id="supplement' + i + '" class="collapse"><div style="padding:.3rem;">';
            if (data[i]["audio"] != undefined) {
                tmp += `<button class="btn btn-primary" id="audio-${i}" onclick="addAudio(${i});">Load audio</button><br>`
            }
            if (data[i]["supplement"] != undefined) {
                tmp += data[i]["supplement"].trim().replaceAll("\n", "<br/>");
            }
            tmp += "</div></div></td>"
            tmp += "</tr>";
            tmp += "<tr></tr>"; //to show a strip
        }
    }
    tmp += "</tbody></table>";

    supc = 1;
    var comtmp = "";
    for (var i = 0; i < data.length; i++) {
        if (data[i]["comment"] != null && filterCheck(data[i])) {
            comtmp += "<p id=\"com" + supc + "\"><a href=\"#src" + supc + "\">[" + supc + "]</a>: " + data[i]["comment"] + "</p>"
            supc++;
        }
    }

    node.innerHTML = tmp;
    document.getElementById("comments").innerHTML = comtmp;
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    })

    $('#resC').text(itemCount)
    $("#resT").text(new Date().getTime() - nowTime + "ms")
}