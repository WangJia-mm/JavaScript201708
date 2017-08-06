var stuList = document.getElementById('stuList'),
    stuHead = stuList.tHead,
    stuBody = stuList.tBodies[0],
    stuHeadList = stuHead.getElementsByTagName('th'),
    stuRows = stuBody.rows;

//->AJAX获取数据然后做数据绑定
~function () {
    //->GET DATA
    var stuData = null;
    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'json/data.json', false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            stuData = utils.toJSON(xhr.responseText);
        }
    };
    xhr.send(null);

    //->BIND DATA
    var str = ``;
    for (var i = 0; i < stuData.length; i++) {
        var cur = stuData[i];
        str += `<tr>
            <td>${cur.id}</td>
            <td>${cur.name}</td>
            <td>${cur.age}</td>
        </tr>`;
    }
    stuBody.innerHTML = str;
}();