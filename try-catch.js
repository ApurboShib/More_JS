function checkAge() {
    // console.log("Button clicked");
    const ageFeild = document.getElementById('age');
    const ageValue = ageFeild.value;
    errorTag = document.getElementById('error');
    finalOut = document.getElementById('done');

   // console.log(bHAH)
    try {
        //console.log(sjkjd);
        const age = parseInt(ageValue);
        if(isNaN(age)) {
            //console.log('age not found', age, ageValue);
            throw "Please enter a number";
        }
        else if(age < 18) {
            throw "baccha kaccha not allowed";
        }
        
    }
    catch (err) {
       console.log(err);
       
        errorTag.innerHTML = 'something wrong';
    }
    finally {
        console.log('ALL done on try ans catch');
        finalOut.innerHTML = 'ALL done on try ans catch';
    }
    console.log(192929)
}

