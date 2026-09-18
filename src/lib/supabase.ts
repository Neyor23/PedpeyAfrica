import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://shqmiootdkwajmkyvdez.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNocW1pb290ZGt3YWpta3l2ZGV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk1NDU1MDAsImV4cCI6MjEwNTEyMTUwMH0.HIXg6PJLE613-JhIELKzFpB1mAez6XwS68zxJeCsj5o'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)