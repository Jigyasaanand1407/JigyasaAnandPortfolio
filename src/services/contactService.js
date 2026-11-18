
import { supabase } from "./supabaseClient";

// POST: Submit contact form message
export const addContactMessage = async (contactData) => {

  const { error } = await supabase
    .from("contact_messages")
    .insert([contactData]);

  if (error) {
    throw error;
  }

  return true;
};
