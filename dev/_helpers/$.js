module.exports = function ( child, options ) {
    if ( typeof child !== 'object' ) {
        return '';
    }
    child['$_'] = this;
    return options.fn( child );
}