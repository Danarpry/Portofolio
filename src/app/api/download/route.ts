import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const fileKey = searchParams.get('file');

  const allowedFiles: Record<string, { fileName: string; relativePath: string }> = {
    cv: {
      fileName: 'CV_Danar_Priyo_Utomo.pdf',
      relativePath: 'assets/cv/CV_Danar_Priyo_Utomo.pdf',
    },
    professional: {
      fileName: 'professional.pdf',
      relativePath: 'assets/cv/professional.pdf',
    },
    personal: {
      fileName: 'personal.pdf',
      relativePath: 'assets/cv/personal.pdf',
    },
  };

  if (!fileKey || !allowedFiles[fileKey]) {
    return new NextResponse('File not found', { status: 404 });
  }

  const fileInfo = allowedFiles[fileKey];
  const filePath = path.join(process.cwd(), 'public', fileInfo.relativePath);

  if (!fs.existsSync(filePath)) {
    // Fallback to uppercase Assets folder just in case
    const fallbackPath = path.join(process.cwd(), 'public', fileInfo.relativePath.replace('assets/', 'Assets/'));
    if (fs.existsSync(fallbackPath)) {
      return serveFile(fallbackPath, fileInfo.fileName);
    }
    return new NextResponse('File not found on disk', { status: 404 });
  }

  return serveFile(filePath, fileInfo.fileName);
}

function serveFile(filePath: string, fileName: string) {
  const fileBuffer = fs.readFileSync(filePath);
  return new NextResponse(fileBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${fileName}"`,
    },
  });
}
