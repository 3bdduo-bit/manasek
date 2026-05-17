'use client';
import React, { useState } from 'react';
import {
  Box, Typography, TextField, Button, CircularProgress,
  MenuItem, Select, FormControl, Alert, SelectChangeEvent
} from '@mui/material';
import Link from 'next/link';

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    rePassword: '',
    country: '',
    city: '',
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSelectChange = (e: SelectChangeEvent) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          rePassword: formData.rePassword,
          phone: formData.phone,
        }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'حدث خطأ أثناء إنشاء الحساب');

      setSuccessMsg('تم إنشاء الحساب بنجاح! جاري تحويلك...');
      setTimeout(() => { window.location.href = '/login'; }, 1500);
    } catch (err: any) {
      setErrorMsg(err.message || 'حدث خطأ غير معروف');
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

      <Box sx={{ width: '100%', maxWidth: 440, position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
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

        <Box sx={{ bgcolor: 'white', borderRadius: '24px', p: 4, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
          {/* Step Indicator */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
            {[1, 2, 3].map((s, i) => (
              <React.Fragment key={s}>
                <Box sx={{
                  width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '12px', fontWeight: 'bold', flexShrink: 0, transition: 'all 0.3s',
                  bgcolor: step >= s ? '#0f172a' : '#f1f5f9',
                  color: step >= s ? '#CB954B' : '#94a3b8',
                  boxShadow: step === s ? '0 0 0 4px rgba(15,23,42,0.08)' : 'none'
                }}>
                  {s}
                </Box>
                {i < 2 && <Box sx={{ flex: 1, height: 2, borderRadius: 1, bgcolor: step > s ? '#0f172a' : '#e2e8f0' }} />}
              </React.Fragment>
            ))}
          </Box>
          <Typography sx={{ textAlign: 'center', fontSize: '11px', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 1, mb: 2 }}>
            الخطوة {step} من 3
          </Typography>

          {/* Header */}
          <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', color: '#0f172a', mb: 1 }}>
            {step === 1 ? 'أخبرنا عن وكالتك' : step === 2 ? 'معلومات التواصل' : 'إعداد كلمة المرور'}
          </Typography>
          <Typography sx={{ textAlign: 'center', color: '#64748b', fontSize: '14px', mb: 3 }}>
            {step === 1 ? 'سنستخدم هذه المعلومات لتخصيص تجربتك' : step === 2 ? 'للتواصل معك بشأن الوكالة' : 'تأمين حساب الوكالة الخاص بك'}
          </Typography>

          {errorMsg && <Alert severity="error" sx={{ mb: 2, borderRadius: 2 }}>{errorMsg}</Alert>}
          {successMsg && <Alert severity="success" sx={{ mb: 2, borderRadius: 2 }}>{successMsg}</Alert>}

          <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
            
            {step === 1 && (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#334155', mb: 1 }}>اسم الوكالة</Typography>
                  <TextField
                    fullWidth size="small" placeholder="مثال: وكالة الفاروق للسفر"
                    name="name" value={formData.name} onChange={handleChange} required
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3, bgcolor: '#f8fafc' } }}
                  />
                  <Typography sx={{ fontSize: '10px', color: '#64748b', mt: 1 }}>
                    ⚠ سيظهر هذا الاسم في الفواتير والبوابات
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#334155', mb: 1 }}>الدولة</Typography>
                    <FormControl fullWidth size="small">
                      <Select
                        name="country" value={formData.country} onChange={handleSelectChange} displayEmpty
                        sx={{ borderRadius: 3, bgcolor: '#f8fafc' }}
                      >
                        <MenuItem value="" disabled>اختر دولتك</MenuItem>
                        <MenuItem value="SA">🇸🇦 السعودية</MenuItem>
                        <MenuItem value="EG">🇪🇬 مصر</MenuItem>
                        <MenuItem value="DZ">🇩🇿 الجزائر</MenuItem>
                        <MenuItem value="MA">🇲🇦 المغرب</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#334155', mb: 1 }}>المدينة</Typography>
                    <TextField
                      fullWidth size="small" placeholder="مثال: جدة"
                      name="city" value={formData.city} onChange={handleChange} required
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3, bgcolor: '#f8fafc' } }}
                    />
                  </Box>
                </Box>
              </Box>
            )}

            {step === 2 && (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#334155', mb: 1 }}>البريد الإلكتروني</Typography>
                  <TextField
                    fullWidth size="small" type="email" placeholder="example@agency.com"
                    name="email" value={formData.email} onChange={handleChange} required dir="ltr"
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3, bgcolor: '#f8fafc' } }}
                  />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#334155', mb: 1 }}>رقم الهاتف</Typography>
                  <TextField
                    fullWidth size="small" type="tel" placeholder="+966 5X XXX XXXX"
                    name="phone" value={formData.phone} onChange={handleChange} required dir="ltr"
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3, bgcolor: '#f8fafc' } }}
                  />
                </Box>
              </Box>
            )}

            {step === 3 && (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#334155', mb: 1 }}>كلمة المرور</Typography>
                  <TextField
                    fullWidth size="small" type="password" placeholder="••••••••"
                    name="password" value={formData.password} onChange={handleChange} required dir="ltr"
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3, bgcolor: '#f8fafc' } }}
                  />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#334155', mb: 1 }}>تأكيد كلمة المرور</Typography>
                  <TextField
                    fullWidth size="small" type="password" placeholder="••••••••"
                    name="rePassword" value={formData.rePassword} onChange={handleChange} required dir="ltr"
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3, bgcolor: '#f8fafc' } }}
                  />
                </Box>
              </Box>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{
                mt: 4, py: 1.5, borderRadius: 3, fontWeight: 'bold', fontSize: '15px',
                bgcolor: '#0f172a', color: 'white', '&:hover': { bgcolor: '#1e293b' },
                boxShadow: '0 10px 15px -3px rgba(15, 23, 42, 0.2)'
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : step < 3 ? 'التالي ←' : 'إنشاء حساب'}
            </Button>
          </form>

          <Typography sx={{ textAlign: 'center', mt: 3, fontSize: '14px', color: '#64748b' }}>
            لديك حساب بالفعل؟{' '}
            <Link href="/login" style={{ color: '#CB954B', fontWeight: 600, textDecoration: 'none' }}>
              تسجيل الدخول
            </Link>
          </Typography>
        </Box>

        <Box sx={{ mt: 3, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3, fontSize: '12px', fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>
          <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <span style={{ color: '#34d399' }}>✓</span> 14 يوم تجربة مجانية
          </Typography>
          <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <span style={{ color: '#34d399' }}>✓</span> بدون بطاقة ائتمان
          </Typography>
          <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <span style={{ color: '#34d399' }}>✓</span> إلغاء في أي وقت
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
