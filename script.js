var app = angular.module('myApp', []);
app.controller('certController', function ($scope, $timeout) {
    // Extract cert parameter from URL
    var urlParams = new URLSearchParams(window.location.search);
    var certParam = urlParams.get('cert');
    // Default valid cert ID from user request
    var validCertId = "efdb3a43ecc102387080c46e0af44cc0";
    // Mock Data
    var mockData = {
        certid: "efdb3a43ecc102387080c46e0af44cc0",
        certissuedate: "04 Oct 2025",
        studentname: "Abhishek  Tiwari",
        institute: "G L Bajaj Institute of Technology & Management",
        eventname: "ALTERYX DATA ANALYTICS PROCESS AUTOMATION VIRTUAL INTERNSHIP (JUL - SEP 2025)",
        grade: ""
    };
    $scope.errmsg = "";
    $scope.certnotverified = false;
    $scope.certverified = false;
    // Simulate loading
    $timeout(function () {
        if (certParam === validCertId || !certParam) {
            // If ID matches or no ID provided (for demo purposes show success)
            $scope.cert = mockData;
            $scope.certverified = true;
        } else {
            $scope.certnotverified = true;
            $scope.errmsg = "Sorry certificate details not found";
        }
    }, 500);
});
