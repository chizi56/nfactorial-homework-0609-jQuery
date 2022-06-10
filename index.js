// if($.inArray('active', $('#profile').attr('class')) == -1){
    
    $('#form-mad').submit(function() {
        console.log("MAD LIBS")
        const arr = $(this).serializeArray();
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": `https://linguatools-sentence-generating.p.rapidapi.com/realise?object=${arr[0].value}&subject=${arr[1].value}&verb=${arr[2].value}`,
            "method": "GET",
            "headers": {
                "X-RapidAPI-Key": "20356a079fmsh4a26c4ee4925664p194b77jsn56247cdc1db2",
                "X-RapidAPI-Host": "linguatools-sentence-generating.p.rapidapi.com"
            }
        };

        $.ajax(settings).done(function (response) {
            $('#panel-mad').html(`  <h2>Dalida's crazy "MadLibs" story</h2>
            <h3 style="margin-top: 25% !important">${response.sentence}</h3>
                                    <p>Generated by linguatools sentence generating</p>
            `);
            $('#panel-mad').slideDown(500);
        });
        return false
});


    $('#form-tom').submit(function(e) {
        e.preventDefault();
        const arr = $(this).serializeArray();
        const output = (arr[0].value * arr[1].value * arr[2].value) / 1024;
        $('#panel').html(`<p style="margin-top: 25% !important">File size is ${output}kB which is ok</p>`)
        $('#panel').slideDown("slow")
        
    })

