// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function
//  should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default
//   value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country) {
    return "".concat(city, " is in ").concat(country);
}
console.log(describe_city("karachi", "Pakistan"));
console.log(describe_city("kabul", "afghanistan"));
console.log(describe_city("london", "England"));
