
var app = angular.module("appModule", ["google-maps"]);
app.controller("MyController", function($scope, $http){
    $scope.searchQuery; 
//    $scope.locations = [{ "_id" : { "$oid" : "53adb87adfd0c6d78ee5b714"} , "continent" : "Africa" , "country" : "South Africa" , "city" : "Johannesburg" , "address" : " ThoughtWorks South Africa 17 Melle Street 2nd Floor, South Point Building Braamfontein Johannesburg 2001" , "email" : "info-za@thoughtworks.com" , "phone" : "+27 (0)10 003 2728" , "latitude" : -26.194082 , "longitude" : 28.035857},{ "_id" : { "$oid" : "53adb87adfd0c6d78ee5b715"} , "continent" : "Africa" , "country" : "Uganda" , "city" : "Kampala" , "address" : "ThoughtWorks Uganda Limited Soliz House, 23, Lumumba Avenue Nakasero Kampala" , "email" : "info-ug@thoughtworks.com" , "phone" : "+256 (0)204 007 007" , "latitude" : 0.322955 , "longitude" : 32.576605},{ "_id" : { "$oid" : "53adb87adfd0c6d78ee5b716"} , "continent" : "Australia" , "country" : "Australia" , "city" : "Brisbane" , "address" : " ThoughtWorks Australia Pty. Ltd.  Level 19,127 Creek Street Brisbane, QLD 4000, Australia " , "email" : "info-au@thoughtworks.com" , "phone" : "+61 7 3129 4506" , "latitude" : -27.465812 , "longitude" : 153.027588},{ "_id" : { "$oid" : "53adb87adfd0c6d78ee5b717"} , "continent" : "Australia" , "country" : "Australia" , "city" : "Melbourne" , "address" : " ThoughtWorks Australia Pty. Ltd.  Level 23, 303 Collins Street Melbourne, VIC 3000, Australia GPO Box 4701, VIC 3001 " , "email" : "info-au@thoughtworks.com" , "phone" : "+61 3 9691 6500" , "latitude" : -37.817357 , "longitude" : 144.959681},{ "_id" : { "$oid" : "53adb87adfd0c6d78ee5b718"} , "continent" : "Australia" , "country" : "Australia" , "city" : "Perth" , "address" : " ThoughtWorks Australia Pty. Ltd.  Level 20, 44 St Georges Terrace Perth, WA 6000, Australia " , "email" : "info-au@thoughtworks.com" , "phone" : "+61 8 6369 1040" , "latitude" : -31.955227 , "longitude" : 115.859348},{ "_id" : { "$oid" : "53adb87adfd0c6d78ee5b719"} , "continent" : "Asia" , "country" : "Singapore" , "city" : "Singapore" , "address" : " ThoughtWorks Singapore Pte. Ltd.  87B Amoy Street, Level 3 Singapore 069906 " , "email" : "info-sg@thoughtworks.com" , "phone" : "+65 6513 6970 / 71" , "latitude" : 1.280914 , "longitude" : 103.847075},{ "_id" : { "$oid" : "53adb87adfd0c6d78ee5b71a"} , "continent" : "Australia" , "country" : "Australia" , "city" : "Sydney" , "address" : " ThoughtWorks Australia Pty Ltd.  Level 8, 51 Pitt St Sydney NSW 2000 Australia " , "email" : "info-au@thoughtworks.com" , "phone" : "+61 2 9224 1700" , "latitude" : -33.863048 , "longitude" : 151.209082},{ "_id" : { "$oid" : "53adb87adfd0c6d78ee5b71b"} , "continent" : "Asia" , "country" : "China" , "city" : "Beijing" , "address" : " ThoughtWorks Software Technologies Ltd.  Room 1105, 11th Floor GuoHua Plaza No.3 Dongzhimen South Street, Dongcheng District Beijing, China, 100007 " , "email" : "info-cn@thoughtworks.com" , "phone" : "+86 10 5693 3000" , "latitude" : 39.937086 , "longitude" : 116.453834},{ "_id" : { "$oid" : "53adb87adfd0c6d78ee5b71c"} , "continent" : "Asia" , "country" : "China" , "city" : "Chengdu" , "address" : " ThoughtWorks Software Technologies (Chengdu) Ltd.  Room 5,7th floor, Area E1 Tianfu Software Park, No.1268 Tianfu Avenue Middle Rd Gaoxin District, Chengdu, Sichuan, 610041 " , "email" : "info-cn@thoughtworks.com" , "phone" : "+86 28 8531 8996" , "latitude" : 30.539098 , "longitude" : 104.068058},{ "_id" : { "$oid" : "53adb87adfd0c6d78ee5b71d"} , "continent" : "Asia" , "country" : "China" , "city" : "Shanghai" , "address" : " ThoughtWorks Software Technologies (Shanghai) Ltd.  Room Temp 208 No. 369, Kaixuan Road Changning District, Shanghai, 200051 " , "email" : "info-cn@thoughtworks.com" , "phone" : "+86 21 6252 3338" , "latitude" : 31.203589 , "longitude" : 121.419139},{ "_id" : { "$oid" : "53adb87adfd0c6d78ee5b71e"} , "continent" : "Asia" , "country" : "China" , "city" : "Wuhan" , "address" : " ThoughtWorks Software Technologies (Wuhan) Ltd.  16F-16 Guang Gu World City Plaza, Luoyu Rd. Hongshan District Wuhan, China 430070 " , "email" : "info-cn@thoughtworks.com" , "phone" : "+86 27 8722 7933" , "latitude" : 30.5058906 , "longitude" : 114.4028664},{ "_id" : { "$oid" : "53adb87adfd0c6d78ee5b71f"} , "continent" : "Asia" , "country" : "China" , "city" : "Xi'an" , "address" : " ThoughtWorks Software Technologies Ltd.  Room 01, 15th floor, Building 1, IT Incubator 2nd Area of National Service Outsourcing Demonstration Base No.34 1st Jinye Road, Hi-tech Development District Xi'an, Shaanxi, China, 710062 " , "email" : "info-cn@thoughtworks.com" , "phone" : "+86 (0)29 6865 9600" , "latitude" : 34.191446 , "longitude" : 108.88258},{ "_id" : { "$oid" : "53adb87adfd0c6d78ee5b720"} , "continent" : "Europe" , "country" : "Germany" , "city" : "Hamburg" , "address" : " ThoughtWorks Deutschland GmbH Grosser Burstah 46-48 20457 Hamburg Germany " , "email" : "info-de@thoughtworks.com" , "phone" : "+49 (040) 300 95 880" , "latitude" : 53.548754 , "longitude" : 9.988496},{ "_id" : { "$oid" : "53adb87adfd0c6d78ee5b721"} , "continent" : "Europe" , "country" : "UK" , "city" : "London" , "address" : " ThoughtWorks Ltd.  9th Floor Berkshire House 168-173 High Holborn London, WC1V 7AA UK " , "email" : "info-uk@thoughtworks.com" , "phone" : "+44 (0)20 7497 4500" , "latitude" : 51.515735 , "longitude" : -0.125313},{ "_id" : { "$oid" : "53adb87adfd0c6d78ee5b722"} , "continent" : "Europe" , "country" : "UK" , "city" : "Manchester" , "address" : " ThoughtWorks Ltd.  26th Floor City Tower Piccadilly Plaza Manchester, M1 4BT UK " , "email" : "info-uk@thoughtworks.com" , "phone" : "+44 (0)161 923 6810" , "latitude" : 53.48027 , "longitude" : -2.238339},{ "_id" : { "$oid" : "53adb87adfd0c6d78ee5b723"} , "continent" : "Asia" , "country" : "India" , "city" : "Bangalore" , "address" : " ThoughtWorks Technologies (India) Pvt Ltd.  ACR Mansion G + 3floors 147/F, 8th Main, 3rd Block Koramangala, Bangalore-560034, India " , "email" : "info-in@thoughtworks.com" , "phone" : "+91 80 307 52586" , "latitude" : 12.928663 , "longitude" : 77.628977},{ "_id" : { "$oid" : "53adb87adfd0c6d78ee5b724"} , "continent" : "Asia" , "country" : "India" , "city" : "Chennai" , "address" : " ThoughtWorks Technologies (India) Pvt Ltd.  Ascendas International Tech Park Zenith - 9th Floor Tharamani Road Tharamani Chennai - 600 113, India " , "email" : "info-in@thoughtworks.com" , "phone" : "+91 44 660 44766" , "latitude" : 12.983741 , "longitude" : 80.246487},{ "_id" : { "$oid" : "53adb87adfd0c6d78ee5b725"} , "continent" : "Asia" , "country" : "India" , "city" : "Gurgaon" , "address" : " ThoughtWorks Technologies (India) Pvt Ltd.  6th Floor, Tower B Building No. 14 DLF Cyber City Phase III Gurgaon-122002, Haryana India " , "email" : "info-in@thoughtworks.com" , "phone" : "+91 124 493 4900" , "latitude" : 28.488772 , "longitude" : 77.099613},{ "_id" : { "$oid" : "53adb87adfd0c6d78ee5b726"} , "continent" : "Asia" , "country" : "India" , "city" : "Pune" , "address" : " ThoughtWorks Technologies (India) Pvt Ltd.  6th Floor, Binarius Building, Deepak Complex, National Games Road, Beside Sales Tax Office, Shastrinagar, Yerawada Pune, Maharashtra 411006 " , "email" : "info-in@thoughtworks.com" , "phone" : "+91 20 4105 7863/78" , "latitude" : 18.5543555 , "longitude" : 73.8924805},{ "_id" : { "$oid" : "53adb87adfd0c6d78ee5b727"} , "continent" : "North America" , "country" : "USA" , "city" : "Atlanta" , "address" : " Colony Square 100 1175 Peachtree Street NE Suite 1400 Atlanta, GA 30361 USA " , "email" : "info-us@thoughtworks.com" , "phone" : "+1 404 481 4100" , "latitude" : 33.786811 , "longitude" : -84.382669},{ "_id" : { "$oid" : "53adb87adfd0c6d78ee5b728"} , "continent" : "North America" , "country" : "USA" , "city" : "Austin" , "address" : " Suite 205, 611 South Congress Avenue Austin, TX 78704 USA " , "email" : "info-us@thoughtworks.com" , "phone" : "+1 (512) 623-7844" , "latitude" : 30.255376 , "longitude" : -97.747069},{ "_id" : { "$oid" : "53adb87adfd0c6d78ee5b729"} , "continent" : "North America" , "country" : "USA" , "city" : "Chicago" , "address" : "200 E Randolph St 25th Floor Chicago, IL 60601-6501 " , "email" : "USA" , "phone" : "info-us@thoughtworks.com" , "latitude" : "+1 312 373 1001" , "longitude" : 41.885047 , "field8" : -87.621548},{ "_id" : { "$oid" : "53adb87adfd0c6d78ee5b72a"} , "continent" : "North America" , "country" : "USA" , "city" : "Dallas" , "address" : " 15540, Spectrum Drive Addison, TX 75001 USA " , "email" : "info-us@thoughtworks.com" , "phone" : "+1 972 764 3400" , "latitude" : 32.960008 , "longitude" : -96.822076},{ "_id" : { "$oid" : "53adb87adfd0c6d78ee5b72b"} , "continent" : "North America" , "country" : "USA" , "city" : "New York" , "address" : " 99 Madison Ave 15th Floor New York NY 10016 USA " , "email" : "info-us@thoughtworks.com" , "phone" : "+1 646 412 5200" , "latitude" : 40.74474 , "longitude" : -73.984935},{ "_id" : { "$oid" : "53adb87adfd0c6d78ee5b72c"} , "continent" : "North America" , "country" : "USA" , "city" : "San Francisco" , "address" : " 315 Montgomery Street 16th Floor San Francisco, CA 94104 USA " , "email" : "info-us@thoughtworks.com" , "phone" : "+1 415 273 1389" , "latitude" : 37.79218 , "longitude" : -122.40285},{ "_id" : { "$oid" : "53adb87adfd0c6d78ee5b72d"} , "continent" : "North America" , "country" : "Canada" , "city" : "Toronto" , "address" : " ThoughtWorks Canada Corporation 1 Yonge Street, Suite 1903 Toronto, ON, Canada, M5E 1W7 " , "email" : "info-ca@thoughtworks.com" , "phone" : "+1 416 214 7737" , "latitude" : 43.64196 , "longitude" : -79.374618},{ "_id" : { "$oid" : "53adb87adfd0c6d78ee5b72e"} , "continent" : "South America" , "country" : "Brazil" , "city" : " Porto Alegre ThoughtWorks Brazil Avenida Ipiranga, 6681 - prédio 99a - 14 andar - sala 1402 Porto Alegre - RS Partenon 90619 - 900, Brazil " , "address" : "info-br@thoughtworks.com" , "email" : "+55 51 3079 3550" , "phone" : -30.060757 , "latitude" : -51.170926},{ "_id" : { "$oid" : "53adb87adfd0c6d78ee5b72f"} , "continent" : "South America" , "country" : "Ecuador" , "city" : "Quito" , "address" : " ThoughtWorks Ecuador Av. República del Salvador N34-107 y Suiza Edificio Brescia I, piso 9 " , "email" : "Quito" , "phone" : "Ecuador info-ec@thoughtworks.com" , "latitude" : "+593 (2) 2274906" , "longitude" : -0.185837 , "field8" : -78.48192},{ "_id" : { "$oid" : "53adb87adfd0c6d78ee5b730"} , "continent" : "South America" , "country" : "Brazil" , "city" : "Recife" , "address" : " ThoughtWorks Brazil Av. Gov. Agamenon Magalhães, 4779, 12º andar Empresarial Isaac Newton Ilha do Leite, Recife - PE 50070 160 - Brazil " , "email" : "+55 (81) 3059 3011" , "phone" : -8.064944 , "latitude" : -34.896934 , "longitude" : "South America"},{ "_id" : { "$oid" : "53adb87adfd0c6d78ee5b731"} , "continent" : "Brazil" , "country" : "São Paulo" , "city" : " ThoughtWorks Brazil Avenida Paulista, 2073 Edifício Horsa II - Conjunto 1702 Cerqueira César São Paulo - SP, 01311-300, Brazil " , "address" : "info-br@thoughtworks.com" , "email" : "+55 11 3373-3538" , "phone" : -23.56472 , "latitude" : -46.652182}];

$scope.remoteLocations = function(){
};

$http({method: 'GET', url: 'http://localhost:9000/locations'}).
    success(function(data, status, headers, config) {
        console.log(data)
        $scope.locations = data
    }).
    error(function(data, status, headers, config) {
        console.log(data)
    });

$scope.map = {
    center: {
        latitude: 45,
        longitude: -73
    },
    zoom: 2
};
}); 