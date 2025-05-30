import { getToday } from "../utils/helper";
import supabase from "./supabase";

export async function getReservations(){
    let { data,  error } = await supabase
  .from('reservations')
  .select('*,patients(*),bookings(*)')

  if(error){
    throw new Error('bookings cannot be loaded');
  }
  return data;
}

export async function creteReservation(newReservations){
    
    const { data, error } = await supabase
    .from('reservations')
    .insert([newReservations])
    .select()
    if(error){
        console.error(error);
        throw new Error("new reservations cannot be reserved");
    }
    return data;
    }

    export async function getReservationInfo(id){
      
        const{data, error}=await supabase
        .from('reservations')
        .select()
        .eq('id',id)
        .single()
        
        if(error){
            console.log('error');
        }
        return data;
      }
  
export async function updateReservation(id, updatedData){
  const { data, error } = await supabase
  .from('reservations')
  .update(updatedData)
  .eq('id', id);

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function updateReservationColumn(id,columnName, value){
  const updates = {
    [columnName]: value,
  };
  const { data, error } = await supabase
  .from('reservations')
  .update(updates)
  .eq("id",id)

  if (error) {
     console.log('error');
  }
  return data;
}

export async function getReservationsAfterDate(date) {
  const { data, error } = await supabase
    .from("reservations")
    .select("created_at, bookings(*)")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}