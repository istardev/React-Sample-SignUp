module.exports.validateUserInput = (
    name,
    email,
    phonenumber,
    address,
    zipcode
) => {
    const errors = {};
    if( name.trim() === '' ) {
        errors.name = 'Name must not be empty';
    }

    if( email.trim() === '' ) {
        errors.email = 'Email must not be empty';
    }

    if( phonenumber.trim() === '' ) {
        errors.phonenumber = 'Phone number must not be empty';
    }

    if( address.trim() === '' ) {
        errors.address = 'Address must not be empty';
    }

    if( zipcode.trim() === '' ) {
        errors.zipcode = 'ZipCode must not be empty';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}