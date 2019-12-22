<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <div id="view"></div>
    <script>
        var components = [
        
            {
                type: 'text',
                name: 'last name',
                order: 2,
                required: false
            },
            {
                type: 'email',
                name: 'email',
                order: 3,
                required: true
            },
            {
                type: 'text',
                name: 'first name',
                order: 1,
                required: true
            },
            {
                type: 'textarea',
                name: 'remarks',
                order: 4,
                required: false
            },
            {
                type: 'select',
                name: 'type',
                order: 4,
                required: true,
                data: ['Casual', 'Part Time', 'Full Time','On Call']
            },
            ,
            {
                type: 'select',
                name: 'status',
                order: 4,
                required: true,
                data: ['Pending', 'Completed', 'Running']
            },
            {
                type: 'radio',
                name: 'Gender',
                order: 4,
                required: false,
                data: ['Male', 'Female', 'Other']
            },
            {
                type: 'checkbox',
                name: 'Skills',
                order: 4,
                required: true,
                data: ['Java', 'Php', 'Javascript']
            }
        ];

        var view = document.getElementById('view');
        var form = document.createElement('form');
        components.sort((a, b) => (a.order > b.order) ? 1 : -1)

        components.forEach((row, index) => {
            var input = null;
            var isMultiple = false;
            switch (row.type) {
                case 'text':
                case 'email':
                    input = document.createElement('input');
                    break;
                case 'textarea':
                    input = document.createElement('textarea');
                    break;
                case 'select':
                    input = document.createElement('select');
                    if (row.data !== undefined) {
                        row.data.forEach((v, i) => {
                            var option = document.createElement('option');
                            option.value = v;
                            option.innerText = v;
                            input.appendChild(option);
                        });
                    }
                    break;
                case 'radio':
                case 'checkbox':
                    input = document.createElement('div');
                    isMultiple = true;
                    if (row.data !== undefined) {
                        row.data.forEach((v, i) => {
                            var lbl=document.createElement('label');
                            
                            var option = document.createElement('input');
                            option.type = row.type;
                            option.required = row.required;
                            option.name = row.name.replace(' ', '');
                            lbl.appendChild(option);
                            lbl.append(v);
                            input.appendChild(lbl);
                        });
                    }
                    break;

            }
            if (input != null) {
                var div = document.createElement('div');
                var label = document.createElement('label');
                label.innerHTML = row.name;
                div.appendChild(label);
                if (!isMultiple) {
                    input.type = row.type;
                    input.required = row.required;
                    input.name = row.name.replace(' ', '');
                }
                div.appendChild(input);

                form.appendChild(div);
            }
        });
        var button=document.createElement('button');
        button.type="submit";
        button.innerHTML="Save";
        form.appendChild(button);
        view.appendChild(form);
    </script>
</body>

</html>
