import { useEffect } from "react";
import LoadingComponents from "../../app/layout/LoadingComponents";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { fetchShiftsAsync, shiftSelectors } from "./collectionSlice";
import ShiftList from "./ShiftList";

export default function ShiftCollection() {
  const shifts = useAppSelector(shiftSelectors.selectAll);
  const {shiftsLoaded, status} = useAppSelector(state => state.collection);
  const dispatch = useAppDispatch();



  useEffect(() => {
    if(!shiftsLoaded) dispatch(fetchShiftsAsync())
  }, [shiftsLoaded, dispatch]);

  if (status.includes('pending')) return <LoadingComponents/>
  return (
    <>
    <h1>Your Shifts</h1>
    <ShiftList shifts={shifts}/>
      </>
  )
}
