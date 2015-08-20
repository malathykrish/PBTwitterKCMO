twitter311Module.controller('query3Ctrl', ['$scope', 'dataSvc',
    function ($scope, dataSvc) {
        var series = [];

        dataSvc.query3().success(function(data) {
            for (i = 0; i < data.length; i++) {
                series.push([data[i].word, data[i].num]);
            }

            $('#container').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: 1,//null,
                    plotShadow: false
                },
                title: {
                    text: 'Sources from which Problem has been reported'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            }
                        }
                    }
                },
                series: [{
                    type: 'pie',
                    name: 'Source of Complain Share',
                    data: series
                }]
            });

        });
    }]);


















