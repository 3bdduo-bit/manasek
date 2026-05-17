import ThemeRegistry from '../components/ThemeRegistry/ThemeRegistry';

export const metadata = {
  title: 'مناسك — المنصة المتكاملة لوكالات الحج والعمرة',
  description: 'المنصة المتكاملة لوكالات الحج والعمرة. 19 وحدة متكاملة، كل شيء بالعربية.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
