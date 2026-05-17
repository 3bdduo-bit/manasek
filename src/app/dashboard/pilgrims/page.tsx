'use client';
import React from 'react';
import {
  Box, Typography, Button, Card, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Chip, IconButton, InputBase,
  Paper, Tooltip,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';

const pilgrimsData = [
  { id: 1, name: 'أحمد محمد عبدالله', passport: 'A1234567', group: 'عمرة رمضان - مجموعة أ', stage: 'تسجيل مبدئي', visa: 'قيد المعالجة', vaccine: 'مكتمل' },
  { id: 2, name: 'فاطمة علي حسن', passport: 'A7654321', group: 'عمرة رمضان - مجموعة أ', stage: 'تم إصدار التأشيرة', visa: 'مقبولة', vaccine: 'مكتمل' },
  { id: 3, name: 'محمود خالد العتيبي', passport: 'B9876543', group: 'حج 1445 - VIP', stage: 'بانتظار الدفع', visa: 'غير مبدوء', vaccine: 'ناقص' },
  { id: 4, name: 'سارة إبراهيم الدوسري', passport: 'C3456789', group: 'حج 1445 - VIP', stage: 'مرفوض', visa: 'مرفوضة', vaccine: 'مكتمل' },
  { id: 5, name: 'عمر عبدالرحمن', passport: 'D1122334', group: 'عمرة شوال', stage: 'جاهز للسفر', visa: 'مقبولة', vaccine: 'مكتمل' },
];

export default function PilgrimsPage() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, flexWrap: 'wrap', gap: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          الحجاج والمعتمرين
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="outlined" startIcon={<UploadFileIcon />}>
            استيراد Excel
          </Button>
          <Button variant="contained" startIcon={<AddIcon />}>
            إضافة حاج
          </Button>
        </Box>
      </Box>

      <Card sx={{ boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)', mb: 4 }}>
        <Box sx={{ p: 2, borderBottom: '1px solid rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: 2 }}>
          <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, bgcolor: 'background.default', elevation: 0, border: '1px solid rgba(0,0,0,0.12)' }}>
            <IconButton sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="ابحث بالاسم، رقم الجواز..."
              inputProps={{ 'aria-label': 'search pilgrims' }}
            />
          </Paper>
        </Box>
        <TableContainer>
          <Table sx={{ minWidth: 800 }}>
            <TableHead sx={{ bgcolor: 'rgba(0,0,0,0.02)' }}>
              <TableRow>
                {['الاسم', 'رقم الجواز', 'المجموعة', 'المرحلة', 'التأشيرة', 'التطعيم', 'إجراءات'].map((h) => (
                  <TableCell key={h} sx={{ fontWeight: 'bold' }} align={h === 'إجراءات' ? 'right' : 'inherit'}>{h}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {pilgrimsData.map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell sx={{ fontWeight: 500 }}>{row.name}</TableCell>
                  <TableCell>{row.passport}</TableCell>
                  <TableCell>{row.group}</TableCell>
                  <TableCell>
                    <Chip size="small" label={row.stage} variant="outlined" color="primary" />
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={row.visa}
                      size="small"
                      color={row.visa === 'مقبولة' ? 'success' : row.visa === 'مرفوضة' ? 'error' : 'warning'}
                      sx={{ fontWeight: 'bold' }}
                    />
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={row.vaccine}
                      size="small"
                      color={row.vaccine === 'مكتمل' ? 'success' : 'error'}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="تعديل">
                      <IconButton size="small"><EditIcon fontSize="small" /></IconButton>
                    </Tooltip>
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
