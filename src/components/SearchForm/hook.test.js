import { act, renderHook } from '@testing-library/react-hooks'
import useForm from './hook'

test('should change keyword', () => {
  const { result } = renderHook(() => useForm())
  
  act(() => {
    result.current.updateKeyword('batman')
  })

  expect(result.current.keyword).toBe('batman')
})

test('should use initial value', () => {
  const { result } = renderHook(() => useForm({
    initialKeyword: "cup"
  }))

  expect(result.current.keyword).toBe('cup')
})

test('should update correctly times when used twice', () => {
  const { result } = renderHook(() => useForm({
    initialKeyword: "phone"
  }))

  act(() => {
    result.current.updateKeyword('b')
    result.current.updateKeyword('ba')
  })
  expect(result.current.times).toBe(2)
})