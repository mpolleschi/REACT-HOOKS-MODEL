import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tiedipaszvhzhrxfmqlu.supabase.co';

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpZWRpcGFzenZoemhyeGZtcWx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwOTc3MjUsImV4cCI6MjA2NTY3MzcyNX0.agjzZWQdSs1woKst_QVEiXXPxwD7BUUN2zONFsC4cF8';

export const supabase = createClient(supabaseUrl, supabaseKey);