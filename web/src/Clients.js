import{ createClient } from '@supabase/supabase-js'


const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuZWZob2ZteHBpc3l6dnB4eXh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc3NjkxNzEsImV4cCI6MTk4MzM0NTE3MX0.jv-rbuucN1DeHUZWOMbh0X_wok5KaO2y95114yd3LAw'
const SUPABASE_URL = 'https://dnefhofmxpisyzvpxyxy.supabase.co'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export{
  supabase
}
