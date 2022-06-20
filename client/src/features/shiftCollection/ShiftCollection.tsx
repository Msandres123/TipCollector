import { useEffect } from 'react';
import LoadingComponents from '../../app/layout/LoadingComponents';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { fetchShiftsAsync, shiftSelectors } from './collectionSlice';
import ShiftList from './ShiftList';

export default function ShiftCollection() {
  const shifts = useAppSelector(shiftSelectors.selectAll);
  const { shiftsLoaded, status } = useAppSelector((state) => state.collection);
  const dispatch = useAppDispatch();
  const { user }: any = useAppSelector((state) => state.account);

  useEffect(() => {
    if (!shiftsLoaded) dispatch(fetchShiftsAsync());
  }, [shiftsLoaded, dispatch]);

  let userShifts: any = [];
  shifts.forEach((shift) => {
    if (shift.user === user.username) {
      userShifts.push(shift);
    }
  });

  let sortedShifts = userShifts.sort((a : any, b : any) => {
    return new Date(a.shiftDay).getTime() - new Date(b.shiftDay).getTime()
  }).reverse()

  if (status.includes('pending')) return <LoadingComponents />;

  return (
    <>
      {userShifts.length >= 1 ? (
        <>
          <h1>Your Shifts</h1>
          <ShiftList shifts={sortedShifts} />
        </>
      ) : (
        <h1>Please add a new shift</h1>
      )}
    </>
  );
}
