/*
 Javascript Code / Custom Made jQuery DataTable Plugin
 Written By: Dixanta Bahadur Shrestha
 Creators Institute of Business & Technology
 https://creators.institute
*/

(function ($) {
    $.fn.dataTable = function (params) {
        var $el = $(this);
        var dataset = null;
        $el.html('<h1>Loading.....</h1>');
        
        function renderColumnHeading(columns,$thead){
            var $headingRow = $('<tr/>');
            columns.forEach(function (row, index) {
                $('<th/>').html(row.title).appendTo($headingRow);
            });
            $headingRow.appendTo($thead);
        }
        function renderBody(data){
            dataset = data;
            $el.html('');
            var $table = $('<table/>');
            $table.addClass(params.className);
            var $thead = $('<thead/>');
            renderColumnHeading(params.columns,$thead);
            $thead.appendTo($table);
            var $tbody = $('<tbody/>');
            data.forEach(function (row, index) {
                var $tr = $('<tr>');
                
                if (params.ondblClick !== undefined) {
                    $tr.on('dblclick', function (e) {
                        params.ondblClick(index,row);
                    });
                }
                
                if (params.rowStyler !== undefined) {
                    var styler = params.rowStyler(index, row);
                    if (typeof styler === 'object') {
                        $tr.css(params.rowStyler(index, row));
                    }
                }

                params.columns.forEach(function (r, i) {
                    var match = false;
                    var $td = $('<td/>');
                    var $html='';
                    for (attr in row) {
                        if (r.field == attr) {
                            if (r.formatter !== undefined) {
                                $html=r.formatter(index, row);
                            } else {
                                $html=row[attr];
                            }
                            match = true;
                        }
                    }
                    if (!match) {
                        if (r.formatter !== undefined) {
                            $html=r.formatter(index, row);
                        }
                    }
                    if (r.editable !== undefined && r.editable) {

                        $td.on('click','div', function (e) {
                            console.log('i am here');
                            var $input = $('<input class="form-control"/>');
                            var $html=$(this).html();
                            $input.val($(this).text());
                            $input.css('z-index',0);
                            $input.on('blur',function(ie){
                                $td.find('div').html($html)
                                //$input.val($td.text());
                               $input.remove();
                            });
                           
                            $td.html('').append($input);
                        });
                    }
                    $td.html('<div>'+$html+'</div>');
                    if(r.align!==undefined){
                        $td.css('text-align',r.align);
                    }
                $td.appendTo($tr);

                });
                $tr.appendTo($tbody);
            });
            $tbody.appendTo($table);
            $table.appendTo($el);
        }
        $.get(params.url, function (data) {
            renderBody(data);
        });
        return this;
    };

}(jQuery));
