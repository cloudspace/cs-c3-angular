/*
  EXAMPLE USE

  <div cs-c-three
       id='container'
       container='"#container"'
       columns='csC3Ctrl.columns'
       axes='csC3Ctrl.axes'
       colors='csC3Ctrl.colors'
       type='"spline"'
       legend='true'
       ytwo='true'>
  </div>
 */

var d3      = require('d3');
var c3      = require('c3');
var angular = require('angular');

module.exports = angular
  .module('csC3', [])
  .directive('csCThree', [function() {
    return {
      restict: 'A',
      scope: {
        columns:   '&',
        axes:      '&',
        container: '&',
        type:      '&',
        legend:    '&',
        colors:    '&',
        ytwo:      '&'
      },
      bindToController: true,
      controllerAs: 'csC3',
      controller: [function() {

      }],
      link: function(scope, element, attr, ctrl) {

        ctrl.chart = c3.generate({
          bindto: ctrl.container(),
          data: {
            columns: ctrl.columns(),
            axes:    ctrl.axes(),
            type:    ctrl.type(),
            colors:  ctrl.colors()
          },
          axis: {
            y2: {
              show: ctrl.ytwo()
            }
          },
          legend: {
            show: ctrl.legend()
          }
        });

      }
    };
  }]);
