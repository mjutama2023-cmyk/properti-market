# Properti Market
Marketplace properti dengan halaman publik dan dashboard admin tunggal.

## Fitur
- Halaman publik, pencarian berdasarkan judul/lokasi, filter transaksi, jenis properti, dan harga maksimum.
- Halaman detail properti dan galeri foto.
- Tombol kontak WhatsApp.
- Login admin, dashboard statistik, tambah/edit/hapus listing, status draft/publikasi, listing unggulan.
- Supabase database, Auth, Storage, dan Row Level Security.

## Menjalankan di komputer
1. Instal Node.js 20 atau lebih baru.
2. Buat project di https://supabase.com.
3. Buka SQL Editor Supabase, jalankan seluruh isi `supabase/schema.sql`.
4. Buka Authentication > Users, buat satu akun admin dengan email dan password.
5. Salin User UID akun tersebut. Jalankan query INSERT admin di bagian akhir `schema.sql` dengan UUID yang benar.
6. Salin Project URL dan anon/public key dari Supabase Project Settings > API.
7. Salin `.env.example` menjadi `.env.local`, lalu isi:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
8. Instal dependensi dan jalankan:
   ```bash
   npm install
   npm run dev
   ```
9. Buka http://localhost:3000. Login admin melalui `/admin/login`.

## Deploy online
- Push folder project ke repository GitHub.
- Import repository di Vercel.
- Masukkan kedua environment variables Supabase pada Vercel Project Settings.
- Deploy. Atur `NEXT_PUBLIC_SITE_URL` sesuai domain website.

## Catatan keamanan
- Jangan pernah menaruh Supabase `service_role` key di frontend atau file `.env` yang diawali `NEXT_PUBLIC_`.
- Admin hanya akun yang UUID-nya tercatat di `public.profiles` dengan role `admin`.
- Jangan berikan akses pendaftaran publik untuk admin. Buat akun admin langsung melalui Supabase Dashboard.
- Kebijakan RLS membatasi perubahan data dan upload foto hanya untuk admin.
- Contoh ini adalah fondasi aplikasi siap dikonfigurasi; database dan domain harus dihubungkan sebelum listing benar-benar tersimpan dan dapat diakses publik.
