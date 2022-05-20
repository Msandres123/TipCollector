import { useEffect } from "react";
import { array } from "yup";
import LoadingComponents from "../../app/layout/LoadingComponents";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { fetchShiftsAsync, shiftSelectors } from "./collectionSlice";
import ShiftList from "./ShiftList";


export default function ShiftCollection() {
  const shifts = useAppSelector(shiftSelectors.selectAll);
  const {shiftsLoaded, status} = useAppSelector(state => state.collection);
  const dispatch = useAppDispatch();
  const { user }: any = useAppSelector((state) => state.account); 


  useEffect(() => {
    if(!shiftsLoaded) dispatch(fetchShiftsAsync())
  }, [shiftsLoaded, dispatch]);

    let userShifts: any = []

    shifts.forEach((shift) => {
      if (shift.user === user.username) {
        userShifts.push(shift)
      }
      
    })
  console.log(userShifts)

  if (status.includes('pending')) return <LoadingComponents/>
  return (
    <>
    <h1>Your Shifts</h1>
    <ShiftList shifts={userShifts}/>
      </>
  )
}
