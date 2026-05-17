'use client';
import React, { useState } from 'react';
import {
  Box, Typography, Button, Card, CardContent, Grid,
  TextField, Divider, Switch, FormControlLabel, Avatar,
  IconButton,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    agencyName: 'وكالة الرحاب للحج والعمرة',
    email: 'info@alrehab.com',
    phone: '+966 50 123 4567',
    address: 'شارع فلسطين، جدة',
    baseCurrency: 'SAR',
    taxNumber: '300123456700003',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          الإعدادات
        </Typography>
        <Button variant="contained" startIcon={<SaveIcon />}>
          حفظ التغييرات
        </Button>
      </Box>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)', mb: 4 }}>
            <CardContent sx={{ textAlign: 'center', py: 4 }}>
              <Box sx={{ position: 'relative', display: 'inline-block', mb: 2 }}>
                <Avatar
                  sx={{ width: 120, height: 120, fontSize: '3rem', bgcolor: 'primary.light', mx: 'auto' }}
                >
                  الرحاب
                </Avatar>
                <IconButton
                  color="primary"
                  sx={{ position: 'absolute', bottom: 0, right: 0, bgcolor: 'background.paper', boxShadow: 1 }}
                >
                  <PhotoCameraIcon />
                </IconButton>
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>شعار الوكالة</Typography>
              <Typography variant="body2" color="text.secondary">
                PNG, JPG (الحد الأقصى 2MB)
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>إعدادات الإشعارات</Typography>
              <FormControlLabel control={<Switch defaultChecked />} label="تنبيهات الجوازات المنتهية" sx={{ display: 'block', mb: 1 }} />
              <FormControlLabel control={<Switch defaultChecked />} label="تنبيهات الدفعات المتأخرة" sx={{ display: 'block', mb: 1 }} />
              <FormControlLabel control={<Switch />} label="رسائل SMS للحجاج" sx={{ display: 'block', mb: 1 }} />
              <FormControlLabel control={<Switch defaultChecked />} label="إشعارات الوكلاء الفرعيين" sx={{ display: 'block' }} />
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Card sx={{ boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                المعلومات الأساسية
              </Typography>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="اسم الوكالة" name="agencyName" value={settings.agencyName} onChange={handleChange} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="البريد الإلكتروني" name="email" value={settings.email} onChange={handleChange} dir="ltr" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="رقم الهاتف" name="phone" value={settings.phone} onChange={handleChange} dir="ltr" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="الرقم الضريبي" name="taxNumber" value={settings.taxNumber} onChange={handleChange} dir="ltr" />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField fullWidth label="العنوان" name="address" value={settings.address} onChange={handleChange} />
                </Grid>
              </Grid>

              <Divider sx={{ my: 4 }} />

              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                العملات والدفع
              </Typography>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="العملة الأساسية" name="baseCurrency" value={settings.baseCurrency} onChange={handleChange} dir="ltr" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="ضريبة القيمة المضافة (%)" defaultValue="15" type="number" dir="ltr" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
