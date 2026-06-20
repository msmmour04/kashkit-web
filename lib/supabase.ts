import { createClient } from '@supabase/supabase-js';

// Public anon client. Used both server-side (loan_products fetch) and client-side
// (waitlist insert). RLS gates writes — see sql/waitlist_rls.sql for the policy
// that allows the anon role to insert into public.waitlist.
const url = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(url, anon, {
  auth: { persistSession: false, autoRefreshToken: false },
});

export type LoanProduct = {
  id: string;
  loan_amount: number;
  repayment_type: 'single' | 'biweekly';
  acquisition_fee: number;
  interest_charge: number;
  finance_charge: number;
  apr: number;
  active: boolean;
};

export async function fetchActiveLoanProducts(): Promise<LoanProduct[]> {
  const { data, error } = await supabase
    .from('loan_products')
    .select('id, loan_amount, repayment_type, acquisition_fee, interest_charge, finance_charge, apr, active')
    .eq('active', true)
    .order('loan_amount', { ascending: true })
    .order('repayment_type', { ascending: true });
  if (error) {
    console.warn('[supabase] fetchActiveLoanProducts error:', error.message);
    return [];
  }
  return (data || []) as LoanProduct[];
}

/** Insert a row into public.waitlist as the anon role. RLS policy
 *  "Anyone can join waitlist" permits this without auth. */
export async function joinWaitlist(email: string, source: string = 'web'): Promise<{ ok: boolean; error?: string }> {
  const trimmed = email.trim().toLowerCase();
  if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return { ok: false, error: 'Please enter a valid email address.' };
  }
  const { error } = await supabase.from('waitlist').insert({ email: trimmed, source });
  if (error) {
    console.warn('[supabase] joinWaitlist error:', error.message);
    return { ok: false, error: 'Something went wrong. Please try again.' };
  }
  return { ok: true };
}
