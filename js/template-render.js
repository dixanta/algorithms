<div id="content">

</div>
<template id="row">
    <tr>
        <td>Name: {{name}}</td>
        <td>Employees: {{employees.name}}</td>
    </tr>
</template>
<script>
    records=[
        {
            id:1,
            name:'rms',
            employees:[
                {
                    id:1,
                    name:'bibek'
                },
                {
                    id:2,
                    name:'ripesh'
                }
            ]
        },
        {
            id:2,
            name:'pms',
            employees:[
                {
                    id:3,
                    name:'manish'
                },
                {
                    id:2,
                    name:'ripesh'
                }
            ]
        }
    ];

    var template=document.getElementById('row');
    data=template.innerHTML.match(/{{(.*?)}}/g);
    //console.log(data);

    var content=template.innerHTML;
    records.forEach(function(row,index) {
        for(attr in row){
            data.forEach(function(d,i){

                if(d=='{{'+attr+'}}'){
                    console.log(row[attr]);
                }else if(d.startsWith('{{'+attr+'.')){
                    tokens=d.split(/{{(.*?)\.(.*?)}}/g);
                    row[attr].forEach((r,i)=>{
                        console.log(r[tokens[2]]);
                    });
                }
            });
        }
        
    });

    document.getElementById('content').innerHTML=content;
</script>
