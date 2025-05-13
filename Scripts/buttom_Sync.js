//Sync both buttoms of the password lenght selector


function sync_range () {
    //Linking numbers selector with range selector

    //Value of number
    const value_number_input = document.getElementById("passwordLength");
    //Parsing the value
    const value_number = parseInt(value_number_input.value);

    document.getElementById("passwordRange").value = value_number;
}





function sync_numbers () {
    //Linking range selector with numbers selector

    //Value of range
    const value_range_input = document.getElementById("passwordRange");
    //Parsing the value
    const value_range = parseInt(value_range_input.value);

    document.getElementById("passwordLength").value = value_range;
}