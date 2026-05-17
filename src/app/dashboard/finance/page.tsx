'use client';
import React from 'react';
import {
  Box, Typography, Button, Card, CardContent, Grid,
  List, ListItem, ListItemText, ListItemAvatar, Avatar,
  Divider,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import CallMadeIcon from '@mui/icons-material/CallMade';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const transactions = [
  { id: 1, type: 'income', amount: '+ 4,500 SAR', date: '2026-02-15 10:30', desc: 'دفعة أولى - أحمد محمد عبدالله' },
  { id: 2, type: 'expense', amount: '- 15,000 SAR', date: '2026-02-14 09:15', desc: 'حجز طيران الخطوط السعودية - مجموعة أ' },
  { id: 3, type: 'income', amount: '+ 9,000 SAR', date: '2026-02-12 14:20', desc: 'دفعة كاملة - فاطمة علي حسن' },
  { id: 4, type: 'expense', amount: '- 2,500 SAR', date: '2026-02-10 11:00', desc: 'رسوم تأشيرات - 5 حجاج' },
];

export default function FinancePage() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          المالية والفواتير
        </Typography>
        <Button variant="outlined" startIcon={<DownloadIcon />}>
          تصدير التقرير
        </Button>
      </Box>

      {/* Finance Summary */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[
          { title: 'إجمالي الإيرادات', value: '1,250,000 SAR', color: 'success.main' },
          { title: 'إجمالي المصروفات', value: '840,000 SAR', color: 'error.main' },
          { title: 'صافي الربح', value: '410,000 SAR', color: 'primary.main' },
        ].map((stat, i) => (
          <Grid size={{ xs: 12, md: 4 }} key={i}>
            <Card sx={{ boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}>
              <CardContent>
                <Typography color="text.secondary" gutterBottom>
                  {stat.title}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: stat.color }}>
                  {stat.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <Card sx={{ boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}>
            <Box sx={{ p: 2, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>أحدث المعاملات</Typography>
            </Box>
            <List sx={{ p: 0 }}>
              {transactions.map((t, index) => (
                <React.Fragment key={t.id}>
                  <ListItem sx={{ py: 2 }}>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: t.type === 'income' ? 'success.light' : 'error.light' }}>
                        {t.type === 'income' ? <CallReceivedIcon color="success" /> : <CallMadeIcon color="error" />}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={<Typography sx={{ fontWeight: 'bold' }}>{t.desc}</Typography>}
                      secondary={t.date}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: t.type === 'income' ? 'success.main' : 'error.main', direction: 'ltr' }}>
                      {t.amount}
                    </Typography>
                  </ListItem>
                  {index < transactions.length - 1 && <Divider component="li" />}
                </React.Fragment>
              ))}
            </List>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          <Card sx={{ height: '100%', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)', bgcolor: 'primary.dark', color: 'white' }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                رصيد المحفظة
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                45,000
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8, mb: 4 }}>
                ريال سعودي (متاح للسحب)
              </Typography>
              
              <Button variant="contained" color="secondary" fullWidth size="large" startIcon={<AttachMoneyIcon />}>
                طلب سحب الرصيد
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
