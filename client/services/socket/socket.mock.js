'use strict';

angular.module('soundgether')
  .factory('Socket', function (socketFactory) {

    return {
      socket: {
        connect: angular.noop,
        on: angular.noop,
        emit: angular.noop,
        receive: angular.noop
      },
      syncModel: angular.noop,
      unsyncModel: angular.noop
    };

  });
