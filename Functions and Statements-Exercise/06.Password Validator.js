function passwordValidator(pass) {
    let errors = [];

    if (pass.length < 6 || pass.length > 10) {
        errors.push('Password must be between 6 and 10 characters')
    }

    pattern = /^[a-z0-9]+$/i;
    if (!pattern.test(pass)) {
        errors.push('Password must consist only of letters and digits')
    }


    let digitPattern = /\d.*\d/;
    if (!digitPattern.test(pass)) {
        errors.push('Password must have at least 2 digits')

    }

    if (errors.length) {
        console.log(errors.join('\n'));
    } else {
        console.log('Password is valid');
    }
}