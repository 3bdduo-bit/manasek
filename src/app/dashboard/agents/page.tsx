'use client';
import React from 'react';
import {
  Box, Typography, Button, Card, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Chip, IconButton, Avatar,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const agentsData = [
  { id: 1, name: 'مكتب الإيمان للسياحة', city: 'الرياض', pilgrimsCount: 45, commission: '12,500 SAR', status: 'نشط' },
  { id: 2, name: 'وكالة الرحاب', city: 'جدة', pilgrimsCount: 12, commission: '3,000 SAR', status: 'نشط' },
  { id: 3, name: 'سفريات النور', city: 'الدمام', pilgrimsCount: 0, commission: '0 SAR', status: 'غير نشط' },
];

export default function AgentsPage() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          الوكلاء الفرعيون
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />}>
          إضافة وكيل جديد
        </Button>
      </Box>

      <Card sx={{ boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}>
        <Box sx={{ p: 2, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>قائمة الوكلاء</Typography>
          <Typography variant="body2" color="text.secondary">
            إدارة الوكلاء الفرعيين، متابعة حجاجهم، وحساب العمولات.
          </Typography>
        </Box>
        <TableContainer>
          <Table>
            <TableHead sx={{ bgcolor: 'rgba(0,0,0,0.02)' }}>
              <TableRow>
                {['الوكيل', 'المدينة', 'إجمالي الحجاج', 'العمولة المستحقة', 'الحالة', 'إجراء'].map((h) => (
                  <TableCell key={h} sx={{ fontWeight: 'bold' }} align={h === 'إجراء' ? 'right' : 'inherit'}>{h}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {agentsData.map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar sx={{ bgcolor: 'primary.light' }}>{row.name.charAt(0)}</Avatar>
                      <Typography sx={{ fontWeight: 500 }}>{row.name}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{row.city}</TableCell>
                  <TableCell>{row.pilgrimsCount}</TableCell>
                  <TableCell sx={{ color: 'success.main', fontWeight: 'bold' }}>{row.commission}</TableCell>
                  <TableCell>
                    <Chip
                      label={row.status}
                      size="small"
                      color={row.status === 'نشط' ? 'success' : 'default'}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <IconButton size="small" color="primary"><AccountBalanceWalletIcon fontSize="small" /></IconButton>
                    <IconButton size="small"><MoreVertIcon /></IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
}
