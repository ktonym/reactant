export default (result = null) => {
    if ( result.success){
        return;
    }
    return result.msg;
}