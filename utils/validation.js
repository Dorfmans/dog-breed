export default function validateEmail(email) {

    const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.match(validEmail)) {
        return true;
    } else {
        return false;
    }
}