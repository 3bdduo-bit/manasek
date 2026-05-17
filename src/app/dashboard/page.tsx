'use client';
import React from 'react';
import {
  Box, Grid, Card, CardContent, Typography, Button, IconButton,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Chip, List, ListItem, ListItemIcon, ListItemText,
} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const statCards = [
  { title: 'إجمالي الحجاج', value: '450', icon: <PeopleIcon sx={{ fontSize: 40, color: '#3b82f6' }} />, bgcolor: '#eff6ff' },
  { title: 'إيرادات الشهر', value: '1,250,000 SAR', icon: <AttachMoneyIcon sx={{ fontSize: 40, color: '#10b981' }} />, bgcolor: '#ecfdf5' },
  { title: 'مشاكل الجوازات', value: '3', icon: <WarningIcon sx={{ fontSize: 40, color: '#ef4444' }} />, bgcolor: '#fef2f2' },
  { title: 'تأشيرات مقبولة', value: '425', icon: <CheckCircleIcon sx={{ fontSize: 40, color: '#8b5cf6' }} />, bgcolor: '#f5f3ff' },
];

const recentPilgrims = [
  { id: 1, name: 'أحمد محمد عبدالله', group: 'عمرة رمضان - مجموعة أ', visaStatus: 'مقبولة', payment: 'مكتمل' },
  { id: 2, name: 'فاطمة علي حسن', group: 'عمرة رمضان - مجموعة أ', visaStatus: 'قيد المعالجة', payment: 'جزئي' },
  { id: 3, name: 'محمود خالد العتيبي', group: 'حج 1445 - VIP', visaStatus: 'مقبولة', payment: 'مكتمل' },
  { id: 4, name: 'سارة إبراهيم الدوسري', group: 'حج 1445 - VIP', visaStatus: 'مرفوضة', payment: 'قيد الانتظار' },
  { id: 5, name: 'عمر عبدالرحمن', group: 'عمرة شوال', visaStatus: 'مقبولة', payment: 'مكتمل' },
];

const urgentTasks = [
  { icon: <WarningIcon color="error" />, primary: 'جوازات قريبة الانتهاء', secondary: '3 حجاج جوازاتهم تنتهي خلال 6 أشهر', btnLabel: 'معالجة', btnColor: 'error' as const },
  { icon: <WarningIcon color="warning" />, primary: 'نواقص تطعيمات ACWY', secondary: '12 حاج لم يرفعوا شهادة التطعيم', btnLabel: 'مراسلة', btnColor: 'warning' as const },
  { icon: <BusinessCenterIcon color="info" />, primary: 'عمولات وكلاء فرعيين', secondary: 'يجب تسوية 5 فواتير وكلاء', btnLabel: 'عرض', btnColor: 'info' as const },
];

export default function DashboardPage() {
  return (
    <Box>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          لوحة القيادة
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />} sx={{ px: 3 }}>
          إضافة حاج جديد
        </Button>
      </Box>

      {/* KPI Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {statCards.map((stat, i) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
            <Card sx={{ boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ bgcolor: stat.bgcolor, p: 2, borderRadius: 2, display: 'flex' }}>
                  {stat.icon}
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }} gutterBottom>
                    {stat.title}
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    {stat.value}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Bottom section */}
      <Grid container spacing={3}>

        {/* Pilgrims table */}
        <Grid size={{ xs: 12, lg: 8 }}>
          <Card sx={{ boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}>
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>أحدث المسجلين</Typography>
              <Button size="small">عرض الكل</Button>
            </Box>
            <TableContainer>
              <Table>
                <TableHead sx={{ bgcolor: 'rgba(0,0,0,0.02)' }}>
                  <TableRow>
                    {['اسم الحاج', 'المجموعة', 'حالة التأشيرة', 'الدفع', ''].map((h) => (
                      <TableCell key={h} sx={{ fontWeight: 'bold' }} align={h === '' ? 'right' : 'inherit'}>{h}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentPilgrims.map((row) => (
                    <TableRow key={row.id} hover>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.group}</TableCell>
                      <TableCell>
                        <Chip
                          label={row.visaStatus}
                          size="small"
                          color={row.visaStatus === 'مقبولة' ? 'success' : row.visaStatus === 'مرفوضة' ? 'error' : 'warning'}
                          sx={{ fontWeight: 'bold' }}
                        />
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={row.payment}
                          size="small"
                          variant="outlined"
                          color={row.payment === 'مكتمل' ? 'success' : 'primary'}
                        />
                      </TableCell>
                      <TableCell align="right">
                        <IconButton size="small"><MoreVertIcon /></IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>

        {/* Urgent tasks */}
        <Grid size={{ xs: 12, lg: 4 }}>
          <Card sx={{ height: '100%', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}>
            <Box sx={{ p: 2, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>مهام عاجلة</Typography>
            </Box>
            <List disablePadding>
              {urgentTasks.map((task) => (
                <ListItem key={task.primary} divider sx={{ py: 2, gap: 1 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>{task.icon}</ListItemIcon>
                  <ListItemText
                    primary={<Typography sx={{ fontWeight: 600, fontSize: '0.9rem' }}>{task.primary}</Typography>}
                    secondary={<Typography sx={{ fontSize: '0.78rem' }}>{task.secondary}</Typography>}
                  />
                  <Button size="small" variant="outlined" color={task.btnColor}>{task.btnLabel}</Button>
                </ListItem>
              ))}
            </List>
          </Card>
        </Grid>

      </Grid>
    </Box>
  );
}
