twitter311Module.controller('query1Ctrl', ['$scope', 'dataSvc',
    function ($scope, dataSvc) {
        var series = [];

        dataSvc.query1().success(function(data) {
            for (i = 0; i < data.length; i++) {
                series.push({"data":[data[i].num], "name": data[i].word});
            }

            $('#container').highcharts({
                chart: {
                    type: 'bar',
                    type: 'column'
                },
                title: {
                    text: 'Problems in each Department'
                },
                subtitle: {
                    text: 'Source: KCMO 311 Dataset'
                },
                xAxis: {
                    title: {
                        text: 'Department'
                    }
                },
                yAxis: {

                    title: {
                        text: 'Problems'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                series: series
            });
        });
    }
]);