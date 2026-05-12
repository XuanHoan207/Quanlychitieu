import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tzbcezupmaynezkmqxvj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6YmNlenVwbWF5bmV6a21xeHZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1NTc3NzMsImV4cCI6MjA5NDEzMzc3M30.WDJbNac0IKhgJdvVMnRgn_9XBbV7CgU-PXxZ0U36x-c'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)

