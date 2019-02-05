import { MonoTypeOperatorFunction, OperatorFunction } from 'rxjs'
import { map, tap } from 'rxjs/operators'

export function mapPayload<Payload>(): OperatorFunction<ActionWithPayload<Payload>, Payload>
export function mapPayload<Payload, Result>(project: (payload: Payload) => Result): OperatorFunction<ActionWithPayload<Payload>, Result>
export function mapPayload<Payload, Result>(project?: (payload: Payload) => Result)
{
  return map<ActionWithPayload<Payload>, Payload | Result>(action => project ? project(action.payload) : action.payload)
}

export function tapToConsole<T>(): MonoTypeOperatorFunction<T>
{
  return tap<T>(value => console.log(value))
}

interface ActionWithPayload<P>
{
  payload: P
}
