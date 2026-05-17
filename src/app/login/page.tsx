'use client';
import React, { useState } from 'react';
import {
  Box, Typography, TextField, Button, CircularProgress, Alert,
} from '@mui/material';
import Link from 'next/link';

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'بيانات الدخول غير صحيحة');

      if (data.token) localStorage.setItem('token', data.token);
      window.location.href = '/dashboard';
    } catch (err: any) {
      setErrorMsg(err.message || 'حدث خطأ أثناء تسجيل الدخول');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #162619 0%, #0d1f12 40%, #1a4a2e 100%)',
      position: 'relative',
      overflow: 'hidden',
      p: 2,
    }}>
      {/* Background decorations */}
      <Box sx={{ position: 'absolute', top: -150, right: -100, width: 600, height: 600, background: 'radial-gradient(circle, rgba(203,149,75,0.14) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: -150, left: -100, width: 500, height: 500, background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <Box sx={{ width: '100%', maxWidth: 420, position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            component={Link}
            href="/"
            variant="h4"
            sx={{
              display: 'inline-flex', alignItems: 'center', gap: 1.5,
              textDecoration: 'none', color: 'white', fontWeight: 'bold'
            }}
          >
            <Box sx={{ width: 44, height: 44, borderRadius: '12px', background: 'linear-gradient(135deg, #1a4a2e, #1a4a2e)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
              🕋
            </Box>
            مناسك
          </Typography>
        </Box>

        <Box sx={{ bgcolor: 'white', borderRadius: '24px', p: 5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', color: '#0f172a', mb: 1 }}>
            تسجيل الدخول
          </Typography>
          <Typography sx={{ textAlign: 'center', color: '#64748b', fontSize: '14px', mb: 4 }}>
            مرحباً بك مجدداً في نظام إدارة وكالتك
          </Typography>

          {errorMsg && <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>{errorMsg}</Alert>}

          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              <Box>
                <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#334155', mb: 1 }}>البريد الإلكتروني</Typography>
                <TextField
                  fullWidth size="small" type="email" placeholder="example@agency.com"
                  name="email" value={formData.email} onChange={handleChange} required dir="ltr"
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3, bgcolor: '#f8fafc' } }}
                />
              </Box>
              <Box>
                <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#334155', mb: 1, display: 'flex', justifyContent: 'space-between' }}>
                  كلمة المرور
                  <Link href="#" style={{ color: '#CB954B', textDecoration: 'none', fontWeight: 500 }}>نسيت كلمة المرور؟</Link>
                </Typography>
                <TextField
                  fullWidth size="small" type="password" placeholder="••••••••"
                  name="password" value={formData.password} onChange={handleChange} required dir="ltr"
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3, bgcolor: '#f8fafc' } }}
                />
              </Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={loading}
                sx={{
                  mt: 2, py: 1.5, borderRadius: 3, fontWeight: 'bold', fontSize: '15px',
                  bgcolor: '#0f172a', color: 'white', '&:hover': { bgcolor: '#1e293b' },
                  boxShadow: '0 10px 15px -3px rgba(15, 23, 42, 0.2)'
                }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'دخول النظام'}
              </Button>
            </Box>
          </form>

          <Typography sx={{ textAlign: 'center', mt: 4, fontSize: '14px', color: '#64748b' }}>
            ليس لديك حساب بعد؟{' '}
            <Link href="/signup" style={{ color: '#CB954B', fontWeight: 600, textDecoration: 'none' }}>
              ابدأ تجربتك المجانية
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
