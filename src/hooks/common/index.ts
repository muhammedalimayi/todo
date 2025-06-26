// Redux typed hooks
import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../../store'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

// Common hooks exports
// export * from './useToggle'
// export * from './useLocalStorage'
