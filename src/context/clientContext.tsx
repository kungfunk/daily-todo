import { SupabaseClient } from "@supabase/supabase-js";
import { createContext, useContext } from "react";

export const ClientContext = createContext<SupabaseClient | null>(null);

export const useClient = () => {
  const context = useContext(ClientContext);
  if (!context) {
    throw new Error(
      "Wrap your Component in a ClientContext.Provider component"
    );
  }

  return context;
};
