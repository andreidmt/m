const type = require( "../core__type/type" )

/**
 * Validate field types
 *
 * @param  {Object}     arg1          Props
 * @param  {Object}     arg1.schema   Validation schema
 * @param  {String}     arg1.context  Name of function or object the error is
 *                                    relevant in
 *
 * @throws {TypeError}
 *
 * @return {undefined}  { description_of_the_return_value }
 */
module.exports = ( { schema, context } ) => input => {
  if ( type( schema ) === "String" && type( input ) !== schema ) {
    throw new TypeError( `Expected "input" to be "${schema}" in "${context}". Received "${input}", type "${type( input )}".` )
  }

  if ( type( schema ) === "Object" ) {
    const fieldPairs = Object.entries( schema )

    for ( let i = 0, length = fieldPairs.length; i < length; i++ ) {
      const [ field, expectedType ] = fieldPairs[ i ]

      if ( type( input[ field ] ) !== expectedType ) {
        throw new TypeError( `Expected "${field}" to be "${expectedType}" in "${context}". Received "${input[ field ]}", type "${type( input[ field ] )}".` )
      }
    }
  }

  return input
}
