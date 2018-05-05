const test = require( "tape" )
const pick = require( "./pick" )

/**
 * Returns a partial copy of an object containing only the keys specified.
 * If the key does not exist, the property is ignored.
 *
 * @tag Object
 * @signature ( keys: Array[string] ) => ( source: Object ): Object
 *
 * @example
 * pick(["id", "name"])({id: 2, name: "lorem", description: "lorem ipsum"})
 * // => {id: 2, name: lorem}
 */
test( "object::pick( keys: string[] ) => ( source: Object ): Object", t => {
  const source = {
    lorem: "ipsum",
    dolor: "amet",
  }

  t.deepEqual(
    pick( [ "dolor", "lorem" ] )( source ), { lorem: "ipsum", dolor: "amet" },
    "All existing keys" )

  t.deepEqual(
    pick( [ "lorem", "not-exist" ] )( source ), { lorem: "ipsum" },
    "Some non-existing keys" )

  t.deepEqual(
    pick( [ "not-exist" ] )( source ), {},
    "All non-existing keys" )

  t.end()
} )
