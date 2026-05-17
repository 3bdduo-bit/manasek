'use client';
import React from 'react';
import {
  AppBar, Toolbar, Typography, Button, Box, Container,
  Grid, Card, CardContent,
} from '@mui/material';
import Link from 'next/link';
import SettingsIcon from '@mui/icons-material/Settings';
import PublicIcon from '@mui/icons-material/Public';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function LandingPage() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* ─── Navbar ─── */}
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, fontWeight: 'bold', color: 'primary.main', display: 'flex', alignItems: 'center', gap: 1 }}
            >
              <Box component="span" sx={{ fontSize: '1.5rem' }}>🕋</Box> مناسك
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Button color="inherit" href="#features">الميزات</Button>
              <Button color="inherit" href="#how-it-works">كيف يعمل</Button>
              <Button color="inherit" href="#pricing">الأسعار</Button>
            </Box>

            <Box sx={{ ml: 2, display: 'flex', gap: 1 }}>
              <Button variant="outlined" component={Link} href="/login">تسجيل الدخول</Button>
              <Button variant="contained" component={Link} href="/signup">ابدأ مجاناً</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* ─── Hero ─── */}
      <Box sx={{ bgcolor: 'primary.dark', color: 'white', py: { xs: 8, md: 12 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 'bold', fontSize: { xs: '2.5rem', md: '3.5rem' } }}
          >
            الفوضى بين Excel وواتساب والورق تنتهي هنا
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9, fontWeight: 300 }}>
            لم نبنِ مناسك لنضيف أداة جديدة إلى قائمتك. بل لتحذف منها 5.
            منتج واحد، يدير وكالتك بالكامل من لحظة اتصال العميل إلى عودة الحاج.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={Link}
              href="/signup"
              sx={{ py: 1.5, px: 4, fontSize: '1.1rem' }}
            >
              جرّب 14 يوماً مجاناً ←
            </Button>
            <Button
              variant="outlined"
              href="#features"
              sx={{
                color: 'white',
                borderColor: 'white',
                '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' },
                py: 1.5,
                px: 4,
                fontSize: '1.1rem',
              }}
            >
              شاهد الميزات
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ─── Features ─── */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="features">
        <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 2 }}>
          منتج واحد، يدير وكالتك بالكامل
        </Typography>
        <Typography variant="h6" sx={{ textAlign: 'center', color: 'text.secondary', mb: 6 }}>
          19 وحدة متكاملة: بوابة الحاج، التأشيرات، التطعيمات، الفنادق، الوكلاء الفرعيون، والفواتير
        </Typography>

        <Grid container spacing={4}>
          {[
            { icon: <PhoneIphoneIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />, title: 'بوابة الحاج v2', body: 'كل حاج يحصل على رابط خاص: عدّاد تنازلي، حالة تأشيرة، طقس مكة، وزر طوارئ.' },
            { icon: <SettingsIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />, title: '12 مؤشر في الوقت الفعلي', body: 'لوحة تحكم احترافية: إجمالي الحجاج، الإيرادات، مشاكل الجوازات وتطعيمات منتهية.' },
            { icon: <PublicIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />, title: 'فريقك خارج الوكالة', body: 'وكلاء فرعيون بدخول خاص، يرون حجاجهم فقط. العمولة تُحسب تلقائياً.' },
            { icon: <AttachMoneyIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />, title: 'متعدد العملات', body: 'الدفعات تُحفظ بعملتها الأصلية ومُحوّلة إلى عملتك الأساسية في نفس الوقت.' },
          ].map((f) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={f.title}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
                <CardContent>
                  {f.icon}
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>{f.title}</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{f.body}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ─── Pricing ─── */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }} id="pricing">
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 2 }}>
            3 خطط. اختر ما يناسبك.
          </Typography>
          <Typography variant="h6" sx={{ textAlign: 'center', color: 'text.secondary', mb: 6 }}>
            ألغِ في أي وقت. لا عقود طويلة. لا رسوم إعداد.
          </Typography>

          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            {/* Starter */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ p: 3, borderTop: '4px solid', borderColor: 'primary.light' }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>الانطلاقة</Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>للوكالات الناشئة</Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold', my: 3 }}>
                  تجربة 7 أيام مجاناً
                </Typography>
                <Box component="ul" sx={{ pl: 3, color: 'text.secondary', mb: 4, lineHeight: 2 }}>
                  <li>بيانات غير محدودة</li>
                  <li>إدارة التأشيرات والتطعيمات</li>
                  <li>إدارة الفنادق والغرف</li>
                  <li>إدارة الفواتير والإيصالات</li>
                  <li>حتى 3 حسابات مستخدمين</li>
                </Box>
                <Button variant="outlined" fullWidth size="large" component={Link} href="/signup">ابدأ الآن</Button>
              </Card>
            </Grid>

            {/* Pro */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ p: 3, borderTop: '4px solid', borderColor: 'primary.main', transform: 'scale(1.04)', boxShadow: 6 }}>
                <Box sx={{ bgcolor: 'primary.main', color: 'white', px: 2, py: 0.5, borderRadius: 1, display: 'inline-block', mb: 2, fontSize: '0.8rem', fontWeight: 'bold' }}>
                  الأكثر شيوعاً
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>التوسع</Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>للوكالات المتنامية</Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold', my: 3 }}>
                  تواصل معنا للأسعار
                </Typography>
                <Box component="ul" sx={{ pl: 3, color: 'text.secondary', mb: 4, lineHeight: 2 }}>
                  <li>كل ميزات باقة الانطلاقة</li>
                  <li>إدارة الوكلاء الفرعيين</li>
                  <li>بوابة الحاج والمعتمر</li>
                  <li>شرائح إنترنت (eSIM)</li>
                  <li>حتى 10 حسابات مستخدمين</li>
                </Box>
                <Button variant="contained" fullWidth size="large" component={Link} href="/signup">ابدأ تجربتك المجانية</Button>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ─── Footer ─── */}
      <Box sx={{ bgcolor: '#0f172a', color: 'white', py: 6, mt: 'auto' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box component="span">🕋</Box> مناسك
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.7, mt: 2 }}>
                المنصة المتكاملة لوكالات الحج والعمرة. بالعربية، للعالم العربي.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>روابط سريعة</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {[['#features', 'الميزات'], ['#pricing', 'الأسعار'], ['/login', 'تسجيل الدخول']].map(([href, label]) => (
                  <Link key={href} href={href} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{label}</Link>
                ))}
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>تواصل معنا</Typography>
              <Typography variant="body2" sx={{ opacity: 0.7, mb: 1 }}>+90 505 054 8890</Typography>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>info@manasek.net</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
