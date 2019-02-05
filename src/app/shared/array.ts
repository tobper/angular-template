declare global
{
  interface Array<T>
  {
    /** Determines whether any element equals the specified value */
    contains(value: T): boolean

    /** Returns the elements of an array that is not null or undefined */
    defined(): T[]

    /** Returns the calculated sum of all elements based on the the value returned from specified callack function */
    sum(property: (value: T) => number): number

    /** Returns a record based on the array using keys extracted using the specified callback */
    toRecord<Key extends string | number | symbol>(key: (value: T) => Key): Record<Key, T>
  }
}

export function contains<T>(this: T[], value: T): boolean
{
  return this.indexOf(value) !== -1
}

export function defined<T>(this: T[]): T[]
{
  return this.filter(item => item !== undefined && item !== null)
}

export function sum<T>(this: T[], property: (value: T) => number): number
{
  return this.reduce((result, value) => result + property(value), 0)
}

export function toRecord<T, Key extends string | number | symbol>(this: T[], key: (value: T) => Key): Record<Key, T>
{
  return this.reduce<Record<Key, T>>((result, value) => { result[key(value)] = value; return result }, {} as Record<Key, T>)
}

if (!Array.prototype.contains)
  Array.prototype.contains = contains

if (!Array.prototype.defined)
  Array.prototype.defined = defined

if (!Array.prototype.sum)
  Array.prototype.sum = sum

if (!Array.prototype.toRecord)
  Array.prototype.toRecord = toRecord
